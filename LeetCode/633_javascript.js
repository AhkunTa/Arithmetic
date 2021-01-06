// 给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a2 + b2 = c 。

//

// 示例 1：

// 输入：c = 5
// 输出：true
// 解释：1 * 1 + 2 * 2 = 5
// 示例 2：

// 输入：c = 3
// 输出：false
// 示例 3：

// 输入：c = 4
// 输出：true
// 示例 4：

// 输入：c = 2
// 输出：true
// 示例 5：

// 输入：c = 1
// 输出：true
//

// 提示：

// 0 <= c <= 231 - 1

/**
 * @param {number} c
 * @return {boolean}
 */
// 两数之和的变题 双指针
var judgeSquareSum = function (c) {
  let a = 0,
    b = Math.floor(Math.sqrt(c));

  while (a <= b) {
    if (a ** 2 + b ** 2 == c) {
      return true;
    } else if (a ** 2 + b ** 2 < c) {
      a++;
    } else {
      b--;
    }
  }
  return false;
};
