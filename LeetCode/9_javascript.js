// 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。

// 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。

//

// 示例 1：

// 输入：x = 121
// 输出：true
// 示例 2：

// 输入：x = -121
// 输出：false
// 解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
// 示例 3：

// 输入：x = 10
// 输出：false
// 解释：从右向左读, 为 01 。因此它不是一个回文数。
// 示例 4：

// 输入：x = -101
// 输出：false
//

// 提示：

// -231 <= x <= 231 - 1
//

/**
 * @param {number} x
 * @return {boolean}
 */
// 简单转化为字符串
var isPalindrome = function (x) {
  x = x.toString();
  for (let i = 0; i < x.length / 2; i++) {
    if (x[i] !== x[x.length - i - 1]) {
      return false;
    }
  }
  return true;
};

// 使用数字反转
var isPalindrome = function (x) {
  if (x < 0 || (x % 10 == 0 && x != 0)) {
    return false;
  }

  var reverseNum = 0;
  while (x > reverseNum) {
    reverseNum = reverseNum * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return x == reverseNum || x == Math.floor(reverseNum / 10);
};
