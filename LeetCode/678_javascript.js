// 给定一个只包含三种字符的字符串：（ ，） 和 *，写一个函数来检验这个字符串是否为有效字符串。有效字符串具有如下规则：

// 任何左括号 ( 必须有相应的右括号 )。
// 任何右括号 ) 必须有相应的左括号 ( 。
// 左括号 ( 必须在对应的右括号之前 )。
// * 可以被视为单个右括号 ) ，或单个左括号 ( ，或一个空字符串。
// 一个空字符串也被视为有效字符串。
// 示例 1:

// 输入: "()"
// 输出: True
// 示例 2:

// 输入: "(*)"
// 输出: True
// 示例 3:

// 输入: "(*))"
// 输出: True
// 注意:

// 字符串大小将在 [1，100] 范围内。

/**
 * @param {string} s
 * @return {boolean}
 */
// 2021.09.12 每日一题
// 使用栈
var checkValidString = function (s) {
  // 分别记录左括号和* 的剩余
  let left = [];
  let asterisk = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      left.push(i);
    } else if (s[i] == ")") {
      // 匹配右括号 左括号减一
      // 或者 星号数量减一
      if (left.length) {
        left.pop();
      } else if (asterisk.length) {
        asterisk.pop();
      } else {
        return false;
      }
    } else {
      asterisk.push(i);
    }
  }
  while (left.length && asterisk.length) {
    let l = left.pop();
    let ast = asterisk.pop();
    // 需保证 left 内元素 在星号元素左边
    if (l > ast) {
      return false;
    }
  }
  return left.length == 0;
};

// 贪心可以优化空间复杂度
// 待定
