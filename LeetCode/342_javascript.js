// 给定一个整数，写一个函数来判断它是否是 4 的幂次方。如果是，返回 true ；否则，返回 false 。

// 整数 n 是 4 的幂次方需满足：存在整数 x 使得 n == 4x

//

// 示例 1：

// 输入：n = 16
// 输出：true
// 示例 2：

// 输入：n = 5
// 输出：false
// 示例 3：

// 输入：n = 1
// 输出：true
//

// 提示：

// -231 <= n <= 231 - 1
//

// 进阶：

// 你能不使用循环或者递归来完成本题吗？

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  while (n >= 4) {
    n = n / 4;
    if (Math.floor(n) !== n) {
      return false;
    }
  }
  if (n == 1) {
    return true;
  } else {
    return false;
  }
};
// 如果 n 是 44 的幂，那么它可以表示成 4^x的形式，我们可以发现它除以 3 的余数一定为 1
// n & (n - 1) 表示一定为2的幂
var isPowerOfFour = function (n) {
  return n > 0 && (n & (n - 1)) === 0 && n % 3 === 1;
};

var isPowerOfFour = function (n) {
  return n > 0 && (n & (n - 1)) === 0 && (n & 0xaaaaaaaa) === 0;
};

// 作者：LeetCode-Solution
// 链接：https://leetcode-cn.com/problems/power-of-four/solution/4de-mi-by-leetcode-solution-b3ya/
