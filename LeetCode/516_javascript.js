// 给你一个字符串 s ，找出其中最长的回文子序列，并返回该序列的长度。

// 子序列定义为：不改变剩余字符顺序的情况下，删除某些字符或者不删除任何字符形成的一个序列。

//

// 示例 1：

// 输入：s = "bbbab"
// 输出：4
// 解释：一个可能的最长回文子序列为 "bbbb" 。
// 示例 2：

// 输入：s = "cbbd"
// 输出：2
// 解释：一个可能的最长回文子序列为 "bb" 。
//

// 提示：

// 1 <= s.length <= 1000
// s 仅由小写英文字母组成

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  // dp[i][j] 为到i 到 j的最长子序列长度

  // 状态转移方程

  // 分两种情况
  // s[i] == s[j]  dp[i][j] = dp[i+1][j-1] + 2  即头尾相等的情况下 dp[i][j]为减去头尾的最长子序列长度加 2
  // s[i] !==s[j]  dp[i][j] = Math.max(dp[i+1][j],dp[i][j-1])

  let dp = Array.from(new Array(s.length), arr => new Array(s.length).fill(0));
  for (let i = s.length - 1; i >= 0; i--) {
    dp[i][i] = 1;
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] == s[j]) {
        // dp[i][j]  需取 i+1 j-1 的值 所有i倒序遍历 j增序遍历
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[0][s.length - 1];
};
