// 中位数是有序列表中间的数。如果列表长度是偶数，中位数则是中间两个数的平均值。

// 例如，

// [2,3,4] 的中位数是 3

// [2,3] 的中位数是 (2 + 3) / 2 = 2.5

// 设计一个支持以下两种操作的数据结构：

// void addNum(int num) - 从数据流中添加一个整数到数据结构中。
// double findMedian() - 返回目前所有元素的中位数。
// 示例：

// addNum(1)
// addNum(2)
// findMedian() -> 1.5
// addNum(3)
// findMedian() -> 2
// 进阶:

// 如果数据流中所有整数都在 0 到 100 范围内，你将如何优化你的算法？
// 如果数据流中 99% 的整数都在 0 到 100 范围内，你将如何优化你的算法？

// 1.
/*
 * 直接排序 最简单  而且没有困难题的意义
 */

// 2.
// 优先队列 js 没有队列 需 手动实现队列
// 手动实现大小顶堆 待定...

// https://leetcode-cn.com/problems/find-median-from-data-stream/solution/tong-ge-lai-shua-ti-la-tu-jie-da-ding-du-ghiy/

// 3.二分查找
/**
 * initialize your data structure here.
 */
/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
  // arr 由小到大排序
  this.arr = [];
  this.count = 0;
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  this.count++;
  if (this.arr.length == 0) {
    this.arr.push(num);
    return;
  }
  if (num <= this.arr[0]) {
    this.arr.unshift(num);
  } else if (num >= this.arr[this.arr.length - 1]) {
    this.arr.push(num);
  } else {
    binaryInsert(num, this.arr);
  }
  function binaryInsert(num, arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
      let mid = left + Math.floor((right - left) / 2);
      if (arr[mid] == num) {
        arr.splice(mid, 0, num);
        return;
      } else if (arr[mid] < num) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    arr.splice(left, 0, num);
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (this.count == 0) return undefined;
  let mid = Math.floor(this.count / 2);
  if (this.count % 2 == 1) {
    return this.arr[mid];
  } else {
    return (this.arr[mid] + this.arr[mid - 1]) / 2;
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
