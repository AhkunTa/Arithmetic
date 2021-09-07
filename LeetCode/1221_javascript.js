// 在一个「平衡字符串」中，'L' 和 'R' 字符的数量是相同的。

// 给出一个平衡字符串 s，请你将它分割成尽可能多的平衡字符串。

// 返回可以通过分割得到的平衡字符串的最大数量。

//

// 示例 1：

// 输入：s = "RLRRLLRLRL"
// 输出：4
// 解释：s 可以分割为 "RL", "RRLL", "RL", "RL", 每个子字符串中都包含相同数量的 'L' 和 'R'。
// 示例 2：

// 输入：s = "RLLLLRRRLR"
// 输出：3
// 解释：s 可以分割为 "RL", "LLLRRR", "LR", 每个子字符串中都包含相同数量的 'L' 和 'R'。
// 示例 3：

// 输入：s = "LLLLRRRR"
// 输出：1
// 解释：s 只能保持原样 "LLLLRRRR".
//

// 提示：

// 1 <= s.length <= 1000
// s[i] = 'L' 或 'R'
// 分割得到的每个字符串都必须是平衡字符串。

/**
 * @param {string} s
 * @return {number}
 */
// 2021.09.07 每日一题
var balancedStringSplit = function (s) {
  let total = 0,
    res = 0;
  for (let i = 0; i < s.length; i++) {
    // 仅为R或L 当R的数量 === L的数量 时 res++
    if (s.slice(i, i + 1) == "R") {
      total++;
    } else {
      total--;
    }
    if (total == 0) res++;
  }
  return res;
};
