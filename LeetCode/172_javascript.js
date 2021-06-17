// 给定一个整数 n，返回 n! 结果尾数中零的数量。

// 示例 1:

// 输入: 3
// 输出: 0
// 解释: 3! = 6, 尾数中没有零。
// 示例 2:

// 输入: 5
// 输出: 1
// 解释: 5! = 120, 尾数中有 1 个零.
// 说明: 你算法的时间复杂度应为 O(log n) 。
/**
 * @param {number} n
 * @return {number}
 */
// 注意尾数中的0的个数
// 不必计较中间的0
// 即 7！ = 5040 输出也是1
// 其实只需计算其中5的个数
var trailingZeroes = function (n) {
  let res = 0;
  while (Math.floor(n / 5)) {
    res += Math.floor(n / 5);
    n = Math.floor(n / 5);
  }
  return res;
};
