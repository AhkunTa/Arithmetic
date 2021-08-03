# HTML 基础

## 行内元素 块级元素 `inline` , `block`

- 常见行内元素 `a, span, label, strong, em, br, img, input, select, textarea, cite`
- 常见块级元素 `div, h1~h6, p, form, ul, li, ol, dl, address, hr, menu, table, fieldset`

### 基础区别

1. `行内元素`在页面从左到右依次排列一行排列不下自动换行而`块级元素`会占据一整行
2. `行内元素`无法设置宽高但可以设置 line-height，`块级元素`可以设值宽高
3. `行内元素`无法设置垂直方向的 padding、margin 即 padding-top、padding-bottom、margin-top、margin-bottom，而块级元素可以设置

### 总结

- 块级元素
  1. 总是在新行上开始，占据一整行
  2. 高度，行高以及外边距和内边距都可控制
  3. 宽带始终是与浏览器宽度一样，与内容无关
  4. 它可以容纳内联元素和其他块元素
- 行内元素
  1. 和其他元素都在一行上
  2. 高，行高及外边距和内边距部分可改变
  3. 宽度只与内容有关
  4. 行内元素只能容纳文本或者其他行内元素 不可以设置宽高，其宽度随着内容增加，高度随字体大小而改变，内联元素可以设置外边界，但是外边界不对上下起作用，只能对左右起作用，也可以设置内边界，内边界也只对左右起作用

## 跨标签页通信

### 1 使用 LocalStorage

> 当 LocalStorage 变化时，会触发 storage 事件。利用这个特性，我们可以在发送消息时，把消息写入到某个 LocalStorage 中；然后在各个页面内，通过监听 storage 事件即可收到通知

```javascript
// a 标签页
// 当b标签页修改 localStorage 的值时会触发事件
window.addEventListener("storage", function (e) {
  if (e.key == "storageTest") {
    console.log(e.newValue);
  }
});
```

```javascript
// b 标签页
let data = {
  age: "18",
  name: "张三",
};
// 注意 storage 只有在改变值时才会触发 当LocalStorage值一样并不会触发事件
window.localStorage.setItem("storageTest", JSON.stringify(data));
```

### 2 BroadCast Channel

> BroadCast Channel 可以帮我们创建一个用于广播的通信频道。当所有页面都监听同一频道的消息时，其中某一个页面通过它发送的消息就会被其他所有页面收到

```javascript
// a 标签页

// 监听 频道broadCastTest
let bc = new BroadcastChannel("broadCastTest");

bc.onmessage = function (e) {
  console.log(e.data);
};
```

```javascript
// b 标签页
let data = {
  age: "118",
  name: "李四",
};
let bc = new BroadcastChannel("broadCastTest");
$("#broadcastchannel").on("click", function () {
  bc.postMessage(data);
});
```

### 3 Service Worker

> Service Worker 是一个可以长期运行在后台的 Worker，能够实现与页面的双向通信。多页面共享间的 Service Worker 可以共享，将 Service Worker 作为消息的处理中心（中央站）即可实现广播效果。

```javascript
// a 标签页

// 监听 频道Service Worker
navigator.serviceWorker.addEventListener("message", function (e) {
  console.log(e);
});
```

```javascript
// b 标签页
navigator.serviceWorker
  .register("serviceWorker.js", {
    scope: "./",
  })
  .then(function (registration) {
    console.log(registration);
    console.log("Service Worker 注册成功");
  });

navigator.serviceWorker.controller.postMessage(data);
```

```javascript
// serviceWorker.js 脚本文件

self.addEventListener("message", function (e) {
  console.log("service worker receive message", e.data);
  e.waitUntil(
    self.clients.matchAll().then(function (clients) {
      if (!clients || clients.length === 0) {
        return;
      }
      clients.forEach(function (client) {
        client.postMessage(e.data);
      });
    })
  );
});
```

### 4. Shared Worker

> Shared Worker 是 Worker 家族的另一个成员。普通的 Worker 之间是独立运行、数据互不相通；而多个 Tab 注册的 Shared Worker 则可以实现数据共享。

```javascript
// a 标签页

// 标签页需监听同一个shareWorker
let sharedWorker = new SharedWorker("./shareWorker.js");

setInterval(function () {
  sharedWorker.port.postMessage({ get: true });
}, 1000);

// 监听 get 消息的返回数据
sharedWorker.port.addEventListener(
  "message",
  e => {
    console.log(e);
  },
  false
);
sharedWorker.port.start();
```

```javascript
// b 标签页
let sharedWorker = new SharedWorker("./shareWorker.js");

$("#shareWorker").on("click", function () {
  sharedWorker.port.postMessage(data);
});
```

```javascript
// shareWorker.js 脚本文件

let data = null;
self.addEventListener("connect", function (e) {
  const port = e.ports[0];
  port.addEventListener("message", function (event) {
    // get 指令则返回存储的消息数据
    if (event.data.get) {
      data && port.postMessage(data);
    }
    // 非 get 指令则存储该消息数据
    else {
      data = event.data;
    }
  });
  port.start();
});
```

### websocket 服务器双工通信

> 做法是通过 WebSocket 这类的“服务器推”技术来进行同步。这好比将我们的“中央站”从前端移到了后端

### iframe

> 可以使用一个用户不可见的 iframe 作为“桥”。由于 iframe 与父页面间可以通过指定 origin 来忽略同源限制，因此可以在每个页面中嵌入一个 iframe

[参考地址](https://juejin.cn/post/6844903811232825357)

## 前端跨域方式

1. `jsonp` json with padding 填充式 json

2. `cors` cors 和后端有关 需要后端开启 'allow -origin' 允许跨域权限

3. `s`

## history 模式 和 hash 模式

- `hash`
  1. 使用 location.hash 来修改页面 url 的哈希值来模仿路由 所有路径后会带上#
  2. 从而触发 onhashchange 事件 来监听页面路由
  3. 当只改变浏览器地址栏 URL 的哈希部分
- `history`
  1. 使用 html 新特性 history.pushState history.replaceState 来修改路由
  2. 使用方式和原生方式几乎没有不同 会改变 History 对象
  3. 需注意当页面直接请求 history 模式的其他路径时，服务器请求需做一个请求页面返回返回默认的静态页面
