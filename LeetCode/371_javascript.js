// 给你两个整数 a 和 b ，不使用 运算符 + 和 - ​​​​​​​，计算并返回两整数之和。

//

// 示例 1：

// 输入：a = 1, b = 2
// 输出：3
// 示例 2：

// 输入：a = 2, b = 3
// 输出：5
//

// 提示：

// -1000 <= a, b <= 1000

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

// 2021.09.26 每日一题
// 位运算一生之敌
// 直接看题解

var getSum = function (a, b) {
  while (b != 0) {
    const carry = (a & b) << 1;
    a = a ^ b;
    b = carry;
  }
  return a;
};
