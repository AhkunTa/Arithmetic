// 给定三个字符串 s1、s2、s3，请你帮忙验证 s3 是否是由 s1 和 s2 交错 组成的。

// 两个字符串 s 和 t 交错 的定义与过程如下，其中每个字符串都会被分割成若干 非空 子字符串：

// s = s1 + s2 + ... + sn
// t = t1 + t2 + ... + tm
// |n - m| <= 1
// 交错 是 s1 + t1 + s2 + t2 + s3 + t3 + ... 或者 t1 + s1 + t2 + s2 + t3 + s3 + ...
// 提示：a + b 意味着字符串 a 和 b 连接。

//

// 示例 1：

// 输入：s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
// 输出：true
// 示例 2：

// 输入：s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
// 输出：false
// 示例 3：

// 输入：s1 = "", s2 = "", s3 = ""
// 输出：true
//

// 提示：

// 0 <= s1.length, s2.length <= 100
// 0 <= s3.length <= 200
// s1、s2、和 s3 都由小写英文字母组成
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
// 以上为例 s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"

//      ''   d    b   b   c   a
// ''
// a
// a
// b
// c
// c
//
// [
//   [true, false, false, false, false, false],
//   [true, false, false, false, false, false],
//   [true, true, true, true, true, false],
//   [false, true, true, false, true, false],
//   [false, false, true, true, true, true],
//   [false, false, false, false, false, true],
// ];

// 其他情况，到达（i，j）可能由（i-1,j）点向下一步，选择 s1[i-1] 到达；也可能由 （i,j-1） 点向右一步，选择 s2[j-1] 到达；
// dp[i,j] = (dp[i-1][j] &&s3[i+j-1] == s1[i-1]) || (dp[i][j-1] && s3[i+j-1] == s2[j-1])

// 注意 此处 判断 s1 s2 s3 字符串相等时 需要减去1

var isInterleave = function (s1, s2, s3) {
  if (s1.length + s2.length != s3.length) return false;
  let dp = Array.from(new Array(s1.length + 1), (arr) =>
    new Array(s2.length + 1).fill(false)
  );
  dp[0][0] = true;

  for (let i = 0; i <= s1.length; i++) {
    for (let j = 0; j <= s2.length; j++) {
      if (i > 0) {
        dp[i][j] = dp[i][j] || (dp[i - 1][j] && s1[i - 1] == s3[i + j - 1]);
      }
      if (j > 0) {
        dp[i][j] = dp[i][j] || (dp[i][j - 1] && s2[j - 1] == s3[i + j - 1]);
      }
    }
  }
  return dp[s1.length][s2.length];
};
