// 运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制 。
// 实现 LRUCache 类：

// LRUCache(int capacity) 以正整数作为容量 capacity 初始化 LRU 缓存
// int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
// void put(int key, int value) 如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字-值」。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。
//

// 进阶：你是否可以在 O(1) 时间复杂度内完成这两种操作？

//

// 示例：

// 输入
// ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// 输出
// [null, null, null, 1, null, -1, null, -1, 3, 4]

// 解释
// LRUCache lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // 缓存是 {1=1}
// lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
// lRUCache.get(1);    // 返回 1
// lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
// lRUCache.get(2);    // 返回 -1 (未找到)
// lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
// lRUCache.get(1);    // 返回 -1 (未找到)
// lRUCache.get(3);    // 返回 3
// lRUCache.get(4);    // 返回 4
//

// 提示：

// 1 <= capacity <= 3000
// 0 <= key <= 3000
// 0 <= value <= 104
// 最多调用 3 * 104 次 get 和 put
// 进阶：你是否可以在 O(1) 时间复杂度内完成这两种操作？
/**
 * @param {number} capacity
 */

// 时间复杂度 O 1
var LRUCache = function (capacity) {
  // 使用array来处理权重问题
  this.cache = new Array();
  this.map = new Map();
  this.capacity = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.map.has(key)) {
    // 更新权重
    this.cache.push(this.cache.splice(this.cache.indexOf(key), 1)[0]);
    return this.map.get(key);
  } else {
    return -1;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  // 已存在
  if (this.map.has(key)) {
    this.cache.push(this.cache.splice(this.cache.indexOf(key), 1)[0]);
  } else {
    // 未存在
    this.cache.push(key);

    // 数组超出长度
    if (this.capacity < this.cache.length) {
      let deleteKey = this.cache.shift();
      this.map.delete(deleteKey);
    }
  }
  this.map.set(key, value);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// 更好的方法 仅用map
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.cache = new Map();
};

LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    let value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  } else {
    return -1;
  }
};

LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    this.cache.delete(key);
  } else if (this.cache.size >= this.capacity) {
    // map.keys 返回的迭代器对象 调用next() 是顺序返回的
    let keys = this.cache.keys();
    let first = keys.next().value;
    this.cache.delete(first);
  }
  this.cache.set(key, value);
};
