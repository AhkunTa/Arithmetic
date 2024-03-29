// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

// 注意：给定 n 是一个正整数。

// 示例 1：

// 输入： 2
// 输出： 2
// 解释： 有两种方法可以爬到楼顶。
// 1.  1 阶 + 1 阶
// 2.  2 阶
// 示例 2：

// 输入： 3
// 输出： 3
// 解释： 有三种方法可以爬到楼顶。
// 1.  1 阶 + 1 阶 + 1 阶
// 2.  1 阶 + 2 阶
// 3.  2 阶 + 1 阶

/**
 * @param {number} n
 * @return {number}
 */

// 数列 1 2 3 5 8 13

// 很明显的斐波那契数列 直接暴力递归，不过直接提交超时~
// 不失为一种方法，不过通不过编译   (╰_╯)#

var climbStairs = function (n) {
  if (n == 1) {
    return 1;
  } else if (n == 2) {
    return 2;
  } else {
    return climbStairs(n - 1) + climbStairs(n - 2);
  }
};

//  动态规划
var climbStairs = function (n) {
  let num = new Array(n);
  (num[0] = 1), (num[1] = 2);
  for (let i = 2; i < n; i++) {
    num[i] = num[i - 1] * 1 + num[i - 2] * 1;
  }
  return num[n - 1];
};

var climbStairs2 = function (n) {
  const arr = new Array(n).fill(1);
  arr[1] = 2;

  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr[n - 1];
};
