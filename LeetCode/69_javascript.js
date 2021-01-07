// 实现 int sqrt(int x) 函数。
// 计算并返回 x 的平方根，其中 x 是非负整数。

// 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

// 示例 1:

// 输入: 4
// 输出: 2
// 示例 2:

// 输入: 8
// 输出: 2
// 说明: 8 的平方根是 2.82842...,
//      由于返回类型是整数，小数部分将被舍去。

/**
 * @param {number} x
 * @return {number}
 */

// 二分法
// 对于一个非负数n，它的平方根不会小于大于（n/2+1）
// 在[0, n/2+1]这个范围内可以进行二分搜索，求出n的平方根。

var mySqrt = function (x) {
  let i = 0,
    j = x / 2 + 1;
  while (i <= j) {
    let mid = Math.floor((i + j) / 2);
    let sq = mid * mid;
    if (sq == x) {
      return mid;
    } else if (sq < x) {
      i = mid + 1;
    } else if (sq > x) {
      j = mid - 1;
    }
  }
  return j < i ? j : i;
};

// 牛顿迭代法
// 迭代法算法自行百度 反正我是看不懂 = =
var mySqrt = function (x) {};
