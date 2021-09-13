// 可以用字符串表示一个学生的出勤记录，其中的每个字符用来标记当天的出勤情况（缺勤、迟到、到场）。记录中只含下面三种字符：
// 'A'：Absent，缺勤
// 'L'：Late，迟到
// 'P'：Present，到场
// 如果学生能够 同时 满足下面两个条件，则可以获得出勤奖励：

// 按 总出勤 计，学生缺勤（'A'）严格 少于两天。
// 学生 不会 存在 连续 3 天或 连续 3 天以上的迟到（'L'）记录。
// 给你一个整数 n ，表示出勤记录的长度（次数）。请你返回记录长度为 n 时，可能获得出勤奖励的记录情况 数量 。答案可能很大，所以返回对 109 + 7 取余 的结果。

// 示例 1：

// 输入：n = 2
// 输出：8
// 解释：
// 有 8 种长度为 2 的记录将被视为可奖励：
// "PP" , "AP", "PA", "LP", "PL", "AL", "LA", "LL"
// 只有"AA"不会被视为可奖励，因为缺勤次数为 2 次（需要少于 2 次）。
// 示例 2：

// 输入：n = 1
// 输出：3
// 示例 3：

// 输入：n = 10101
// 输出：183236316
//

// 提示：

// 1 <= n <= 105

/**
 * @param {number} n
 * @return {number}
 */

// 写了一大段 没解出来 主要最后一个 dp[0][i]的状态不好写
var checkRecord = function (n) {
  // 设dp[i][j]
  // i= 0 1 2
  // dp[0][j] 为第j天为 缺勤情况下 的  可能获得出勤奖励的记录情况 数量
  // dp[1][j]           迟到
  // dp[2][j]           到场
  let dp = Array.from(new Array(3), arr => new Array(n).fill(0));

  dp[0][1] = 1;
  dp[1][1] = 1;
  dp[2][1] = 1;
  let mod = 10 ** 9 + 7;
  let totalA = 0;
  for (let i = 2; i <= n; i++) {
    // 当天到场  没有影响 等于前一天所有状况相加
    dp[2][i] = (dp[2][i - 1] + dp[1][i - 1] + dp[0][i - 1]) % mod;

    // 当天迟到 最多有两天连续迟到
    // 两种情况
    // 1 再前一天不迟到 前天缺勤和到场  dp[0][i-2] + dp[2][i-2]
    // 2 前一天不迟到的情况 前一天缺勤和到场  dp[0][i-1] + dp[2][i-1]

    dp[1][i] =
      (dp[0][i - 2] + dp[2][i - 2] + dp[0][i - 1] + dp[2][i - 1]) % mod;

    // 当天缺勤 那前面任何时间就不能缺勤
    totalA += dp[0][i - 1];
    dp[0][i] = dp[1][i - 1] + dp[2][i - 1] + dp[0][i - 1] - totalA;
  }
  console.log(dp);
  return dp[0][n] + dp[1][n] + dp[2][n];
};

// 1     3
// 2     8
// 3     19
// 4     43

// [0,1,3,8,19]
// 当前为L
// [0,1,3,7,17]
// 当前为A
// [0,1,2,4,7]

// PPP PPL (PPA)

// APL APP

// PAL PAP

// LPL (LPA) LPP

// PLL (PLA) PLP

// ALL ALP

// LAL LAP

// LLP (LLA)

// 当前迟到 6
// PPL APL PAL LPL PLL ALL LAL
// 当前缺勤 4
// LPA PLA LLA PPA

// i=4
// L
// PPPL PPLL PPAL
// APLL APPL

//
// 状态定义：dp[i][j][k]表示第 i 天、在 A 为 j 次、连续的 L 为 k 次的方案数。
// 状态转移：所有的状态都是从前一天，即 i-1，转移而来，但是对于 j 和 k，要分三种情况来讨论：
// 当前填入的是 P，i-1 天的任何状态都能转移过来；
// 当前填入的是 A，i-1 天即之前肯定没填过 A，同时所有的 late 状态都可以转移到过来。
// 当前填入的是 L，i-1 天最多只能有一个连续的 L，其他的状态依次转移过来。

/**
 * @param {number} n
 * @return {number}
 */
var checkRecord = function (n) {
  let dp = Array.from(new Array(n), arr => {
    return Array.from(new Array(2), arr => new Array(3).fill(0));
  });
  let mod = 10 ** 9 + 7;

  dp[0][0][0] = 1;
  dp[0][1][0] = 1;
  dp[0][0][1] = 1;
  for (let i = 1; i < n; i++) {
    // 本次填入P，分成前一天累计了0个A和1个A两种情况
    dp[i][0][0] = (dp[i - 1][0][0] + dp[i - 1][0][1] + dp[i - 1][0][2]) % mod;
    dp[i][1][0] = (dp[i - 1][1][0] + dp[i - 1][1][1] + dp[i - 1][1][2]) % mod;
    // 本次填入A，前一天没有累计A都能转移过来
    // 这行可以与上面一行合并计算，为了方便理解，我们分开，下面会合并
    dp[i][1][0] =
      (dp[i][1][0] + dp[i - 1][0][0] + dp[i - 1][0][1] + dp[i - 1][0][2]) % mod;
    // 本次填入L，前一天最多只有一个连续的L，分成四种情况
    dp[i][0][1] = dp[i - 1][0][0];
    dp[i][0][2] = dp[i - 1][0][1];
    dp[i][1][1] = dp[i - 1][1][0];
    dp[i][1][2] = dp[i - 1][1][1];
  }
  let res = 0;
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 3; j++) {
      console.log(dp[n - 1][i][j]);
      res = (res + dp[n - 1][i][j]) % mod;
    }
  }
  return res;
};