// 如果一个十进制数字不含任何前导零，且每一位上的数字不是 0 就是 1 ，那么该数字就是一个 十-二进制数 。例如，101 和 1100 都是 十-二进制数，而 112 和 3001 不是。

// 给你一个表示十进制整数的字符串 n ，返回和为 n 的 十-二进制数 的最少数目。

//

// 示例 1：

// 输入：n = "32"
// 输出：3
// 解释：10 + 11 + 11 = 32
// 示例 2：

// 输入：n = "82734"
// 输出：8
// 示例 3：

// 输入：n = "27346209830709182346"
// 输出：9
//

// 提示：

// 1 <= n.length <= 10**5
// n 仅由数字组成
// n 不含任何前导零并总是表示正整数

/**
 * @param {string} n
 * @return {number}
 */
// 每一次减去最大的12进制数
// 但 题干 1 <= n.length <= 10**5 会导致超出最大运算值
// 如 未超出最大运算值 是可以通过的
var minPartitions = function (n) {
  let res = 0;
  while (n > 0) {
    let deciBinaryNum = "";
    for (let i = 0; i < n.length; i++) {
      if (n[i] > 0) {
        deciBinaryNum += "1";
      } else {
        deciBinaryNum += "0";
      }
    }
    res++;
    console.log(deciBinaryNum, n);
    n = (n - deciBinaryNum).toString();
  }
  return res;
};

// 其实只需查找每一位中最大的数就可以了
// 脑筋急转弯
var minPartitions = function (n) {
  let res = 0;

  for (let i = 0; i < n.length; i++) {
    res = Math.max(n[i], res);
  }
  return res;
};
