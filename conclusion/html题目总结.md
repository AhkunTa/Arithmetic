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

## history 模式 和 hash 模式

- `hash`
  1. 使用 location.hash 来修改页面 url 的哈希值来模仿路由 所有路径后会带上#
  2. 从而触发 onhashchange 事件 来监听页面路由
  3. 当只改变浏览器地址栏 URL 的哈希部分
- `history`
  1. 使用 html 新特性 history.pushState history.replaceState 来修改路由
  2. 使用方式和原生方式几乎没有不同 会改变 History 对象
  3. 需注意当页面直接请求 history 模式的其他路径时，服务器请求需做一个请求页面返回返回默认的静态页面
