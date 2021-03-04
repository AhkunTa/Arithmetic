// 给你一个二维整数数组 envelopes ，其中 envelopes[i] = [wi, hi] ，表示第 i 个信封的宽度和高度。

// 当另一个信封的宽度和高度都比这个信封大的时候，这个信封就可以放进另一个信封里，如同俄罗斯套娃一样。

// 请计算 最多能有多少个 信封能组成一组“俄罗斯套娃”信封（即可以把一个信封放到另一个信封里面）。

// 注意：不允许旋转信封。

//
// 示例 1：

// 输入：envelopes = [[5,4],[6,4],[6,7],[2,3]]
// 输出：3
// 解释：最多信封的个数为 3, 组合为: [2,3] => [5,4] => [6,7]。
// 示例 2：

// 输入：envelopes = [[1,1],[1,1],[1,1]]
// 输出：1
//

// 提示：

// 1 <= envelopes.length <= 5000
// envelopes[i].length == 2
// 1 <= wi, hi <= 104

// 进阶 面试题 08.13. 堆箱子 三维数组最长递增子序列

// 题目为 300 题的变体 两个维度的最长递增子序列
// 将其拆解 排序后和300 题一样 使用 动态规划
// 状态转移方程参见 题300
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
  // 首先创建数组
  let dp = new Array(envelopes.length).fill(1);

  // 排序
  envelopes.sort((a, b) => {
    // 数组第一位递增排序
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    } else {
      // 在数组第一位递增排序的基础上 在增序排序数组第二位
      return a[1] - b[1];
    }
  });

  for (let i = 0; i < envelopes.length; i++) {
    for (let j = 0; j < i; j++) {
      // 要确保 数组两位数值 都要大于前面的数组两位数值
      if (
        envelopes[i][0] > envelopes[j][0] &&
        envelopes[i][1] > envelopes[j][1]
      ) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);
};

// 2. 二分法 + 动态规划
// 参考题解
// https://leetcode-cn.com/problems/russian-doll-envelopes/solution/e-luo-si-tao-wa-xin-feng-wen-ti-by-leetc-wj68/
