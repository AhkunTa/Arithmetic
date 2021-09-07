# js 基础

### js 的事件循环机制

> js 事件循环通过队列实现，运行时会从最先进入队列的消息开始处理队列中的消息，处理的消息会被移出队列，并作为输入参数来调用与之关联的函数

> 在浏览器里，每当一个事件发生并且有一个事件监听器绑定在该事件上时，一个消息就会被添加进消息队列。如果没有事件监听器，这个事件将会丢失

> 零延迟并不意味着回调会立即执行。以 0 为第二参数调用 setTimeout 并不表示在 0 毫秒后就立即调用回调函数。其等待的时间取决于队列里待处理的消息数量。在下面的例子中，"这是一条消息" 将会在回调获得处理之前输出到控制台，这是因为延迟参数是运行时处理请求所需的最小等待时间，但并不保证是准确的等待时间。

```javascript
(function () {
  setTimeout(function cb1() {
    console.log("1");
  }, 0);
  setTimeout(function cb() {
    console.log("2");
  }, 0);
  new Promise((resolve, reject) => {
    resolve("3");
  }).then(res => {
    console.log(res);
  });
  // 3 1 2
  // promise 任务为微任务 先于setTimeout
})();

(function () {
  setTimeout(function cb1() {
    console.log("1");
  }, 0);

  setTimeout(function cb() {
    console.log("2");
  }, 0);
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("3");
    }, 0);
  }).then(res => {
    console.log(res);
  });
  // 1 2 3
  // 在promise后再添加一个setTimeout 将其放入宏任务
  // 微任务： promise
  // 宏任务： 按照顺序 1 2 3
  // 所以先执行 promise -> 将3放入宏任务 -> 执行宏任务消息队列 1 2 3
})();
```

[参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/EventLoop)

### js 闭包

### js 立即执行函数

### call apply 原理实现

1. 使用原生方法

```javascript
Function.prototype._call2 = function (...args /* 也可以使用args*/) {
  console.log("call2=====");
  var obj = arguments[0];
  // 若函数有返回值需返回
  return this.apply(obj, [...arguments].slice(1));
};

Function.prototype._apply2 = function (...args /* 也可以使用args*/) {
  console.log("apply2=====");
  var obj = arguments[0];
  var arg1 = arguments[1];
  // 防止不传第二个参数 ...arg1报错
  if (!arg1) {
    arg1 = [];
  }
  // 若函数有返回值需返回
  return this.call(obj, ...arg1);
};
```

2. 不使用原生方法

```javascript
// 当_call _apply 不传参的时候 ...arg 不是可迭代对象会报错
// ...args 和 arguments 几乎相等 不过arguments需要转化为数组对象
Function.prototype._call = function (...args) {
  console.log("call1=====");
  var obj = args[0] || window;
  obj.tempFn = this;
  var result = obj.tempFn(...[...args].slice(1));
  delete obj.tempFn;
  return result;
};

Function.prototype._apply = function (...args) {
  console.log("apply1=====");
  var obj = args[0] || window;
  obj.tempFn = this;
  // 兼容不传参处理
  var arg = args[1];
  if (!arg) {
    arg = [];
  }
  var result = obj.tempFn(...arg);
  delete obj.tempFn;
  return result;
};
```

3. 不使用原生方法 && 扩展运算符...

```javascript
// 不使用扩展运算符 只能取 arguments对象
Function.prototype._call3 = function () {
  // 完善 若arguments[0] 为基础数据对象

  var obj = new Object(arguments[0]) || window;
  var arg2 = [];
  for (var i = 1; i < arguments.length; i++) {
    arg2.push("arguments[" + i + "]");
  }
  obj.tempFn = this;
  // 使用eval 隐式转换
  var result = eval("obj.tempFn(" + arg2 + ")");
  delete obj.tempFn;
  return result;
};

Function.prototype._apply3 = function () {
  var obj = new Object(arguments[0]) || window;
  var arg2 = [];
  obj.tempFn = this;
  // if (arguments[1]) {
  //   for (var i = 0; i < arguments[1].length; i++) {
  //     arg2.push("arguments[1][" + i + "]");
  //   }
  // }
  // var result = eval("obj.tempFn(" + arg2 + ")");
  var result = eval("obj.tempFn(" + arguments[1] + ")");
  delete obj.tempFn;
  return result;
};
```

### 深拷贝

#### 1. 转换为 JSON

```javascript
JSON.parse(JSON.stringfy(obj));
```

#### 2. 手写递归

```javascript
function deepClone(object) {
  let obj;
  if (object && typeof object === "object") {
    if (toString.call(object) === "[object Object]") {
      obj = {};
      for (let i in object) {
        obj[i] = deepClone(object[i]);
      }
    } else if (object.constructor === Array) {
      obj = [];
      for (let item of object) {
        obj.push(deepClone(item));
      }
    } else {
      return object;
    }
  } else {
    return object;
  }
  return obj;
}
```

#### 3. Object.assign()

> Object.assign 内部也是浅拷贝 只能深拷贝一层

### JS 防抖和节流

```javascript
// 防抖
// 多由于输入框或按钮 防止多次重复点击 导致接口等多次请求

function debounce(func, wait) {
  let timer = null;
  let _this = this;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(function () {
      func.apply(_this, args);
    }, wait);
  };
}

// 节流
// 多用于持续开销的方法或函数 比如滑动 减小性能消耗
function throttle(func, wait) {
  let timer = null;
  let _this = this;
  return function (...args) {
    if (!timer) {
      setTimeout(function () {
        func.apply(_this, args);
        timer = null;
      }, wait);
    }
  };
}
```

### 原型与原型链

```javascript
// 例1
function Person(name, age) {
  this.name = name || "default";
  this.age = age || 18;
}

Person.prototype.say = function () {
  console.log("hi");
};

var person = new Person("jack", 22);
```

#### 1. 原型对象 即 Person.prototype

> 在 JavaScript 中，每当定义一个函数数据类型(普通函数、类)时候，都会天生自带一个 prototype 属性，这个属性指向函数的原型对象，并且这个属性是一个对象数据类型的值。

```javascript
Person.prototype.say = function () {
  console.log("hi");
};
// 原型对象 Person.prototype 只是一个普通对象
// 在默认情况下，所有的原型对象都会自动获得一个 constructor（构造函数）属性，这个属性（是一个指针）指向 prototype 属性所在的函数（Person）
person.constructor = Person;
// person 是Person 函数的实例
Person.prototype.constructor === Person;
// 所有Person.prototype 也是 Person的实例

// 可以理解为在函数创建的时候 创建了一个Person的实例 并把实例赋值给了 Person.prototype
var a = new Person();
Person.prototype = A;
```

#### 2. 原型链 \_\_proto\_\_

> 当我们访问对象的一个属性或方法时，它会先在对象自身中寻找，如果有则直接使用，如果没有则会去原型对象中寻找，如果找到则直接使用。如果没有则去原型的原型中寻找,直到找到 Object 对象的原型，Object 对象的原型没有原型，如果在 Object 原型中依然没有找到，则返回 undefined。

> Object 是 JS 中所有对象数据类型的基类(最顶层的类)在 Object.prototype 上**proto** 为 NULL。

```javascript
Person.prototype.constructor == Person;
// 原型链指向的不是构造函数 而是构造函数的原型对象
// new 操作符做的也就是这个操作
person.__proto__ === Person.prototype;
person.constructor === Person;

// 例子
person.__proto__ === Person.prototype; // 指向的是person的构造函数的原型对象

Person.__proto__ === Function.prototype; // Person 由Function申明

Person.prototype.__proto__ === Object.prototype; // Person.protytype是一个普通对象 对象的构造函数原型是Object.prototype

Object.__proto__ === Function.prototype; // Object由Function构造  typeof Object  === 'function';

Object.prototype.__proto__ === null; // null 处于原型链的顶层
```

#### 3.函数对象

```javascript
Number.__proto__ === Function.prototype; // true
Number.constructor === Function; //true

Boolean.__proto__ === Function.prototype; // true
Boolean.constructor === Function; //true

String.__proto__ === Function.prototype; // true
String.constructor === Function; //true

// 所有的构造器都来自于Function.prototype，甚至包括根构造器Object及Function自身
Object.__proto__ === Function.prototype; // true
Object.constructor === Function; // true

// 所有的构造器都来自于Function.prototype，甚至包括根构造器Object及Function自身
Function.__proto__ === Function.prototype; // true
Function.constructor === Function; //true

Array.__proto__ === Function.prototype; // true
Array.constructor === Function; //true

RegExp.__proto__ === Function.prototype; // true
RegExp.constructor === Function; //true

Error.__proto__ === Function.prototype; // true
Error.constructor === Function; //true

Date.__proto__ === Function.prototype; // true
Date.constructor === Function; //true

// JavaScript中有内置(build-in)构造器/对象共计12个（ES5中新加了JSON），这里列举了可访问的8个构造器。剩下如Global不能直接访问，Arguments仅在函数调用时由JS引擎创建，Math，JSON是以对象形式存在的，无需new。它们的proto是Object.prototype

Math.__proto__ === Object.prototype; // true
Math.construrctor === Object; // true

JSON.__proto__ === Object.prototype; // true
JSON.construrctor === Object; //true

// 所有的构造器都来自于 Function.prototype，甚至包括根构造器Object及Function自身。所有构造器都继承了·Function.prototype·的属性及方法。如length、call、apply、bind
// 而 Function.prototype 为空函数 （Empty function）

console.log(typeof Function.prototype); // function
console.log(typeof Object.prototype); // object
console.log(typeof Number.prototype); // object
console.log(typeof Boolean.prototype); // object
console.log(typeof String.prototype); // object
console.log(typeof Array.prototype); // object
console.log(typeof RegExp.prototype); // object
console.log(typeof Error.prototype); // object
console.log(typeof Date.prototype); // object
console.log(typeof Object.prototype); // object

Function.prototype.__proto__ === Object.prototype; // true

// 说明函数的原型链指向的都是普通对象
// 这说明所有的构造器也都是一个普通 JS 对象，可以给构造器添加/删除属性等。同时它也继承了Object.prototype上的所有方法：toString、valueOf、hasOwnProperty等
```

```javascript
function Person(name, age) {
  this.name = name || "default";
  this.age = age || 18;
}

Person.prototype.say = function () {
  console.log("hi");
};

var person = new Person("jack", 22);

person.__proto__ === Person.prototype; // true;
person.__proto__ === person.constructor.prototype; // true

// 重写 Person.prototype
function Person(name, age) {
  this.name = name || "default";
  this.age = age || 18;
}

Person.prototype = {
  say: function () {},
};

var person = new Person("jack", 22);
person.__proto__ === Person.prototype; // true;
person.__proto__ === person.constructor.prototype; // false

// 因为重写了 Person.prototype  perosn.constructor === Object
// 而 Object.prototype === {}.__proto__
```

[参考链接](https://www.jianshu.com/p/a4e1e7b6f4f8)

### Array.prototype.slice.call(aruments) 原理

1. arguments 定义

> arguments 是一个对应于传递给函数的参数的类数组对象。 在所有函数中（非箭头函数）都有这个对象

```javascript
typeof arguments === "object";
Object.prototype.toString.call(argumnets) === "[object Arguments]";
```

2. Array.prototype.slice.call()

> Array.prototype.slice.call(aruments) 可以将 arguments 转化为数组类型

```javascript
// slice 源码 大致实现

Array.prototype.mySlice = function (start, end) {
  // Array.prototype.slice.call(aruments) 修改了slice里的this指向
  var result = [];

  var begin = start || 0;
  var len = this.length;
  // behin 远小于 0   begin + len < 0  直接返回 0
  // 否则 从后往前倒数
  begin = begin >= 0 ? begin : Math.max(0, begin + len);
  var tail = typeof end == "number" ? Math.min(end, len) : len;
  if (tail < 0) {
    tail = tail + len;
  }
  var length = tail - begin;

  for (var i = 0; i < length; i++) {
    result.push(this[begin + i]);
  }

  return result;
};
```

---

# JS 手写题目

## PromiseAll

```javascript
function PromiseAll(promises) {
  function isPromise(obj) {
    return (
      (typeof obj === "object" || typeof obj === "function") &&
      typeof obj.then === "function"
    );
  }

  let res = [];
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      if (isPromise(promises[i])) {
        promises[i]
          .then(data => {
            res[i] = data;
            if (res.length == promises.length) {
              resolve(res);
            }
          })
          .catch(err => {
            reject(err);
          });
      } else {
        res[i] = promises[i];
      }
    }
  });
}
```
