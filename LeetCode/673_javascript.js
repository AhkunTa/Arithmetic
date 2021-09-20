// 给定一个未排序的整数数组，找到最长递增子序列的个数。

// 示例 1:

// 输入: [1,3,5,4,7]
// 输出: 2
// 解释: 有两个最长递增子序列，分别是 [1, 3, 4, 7] 和[1, 3, 5, 7]。
// 示例 2:

// 输入: [2,2,2,2,2]
// 输出: 5
// 解释: 最长递增子序列的长度是1，并且存在5个子序列的长度为1，因此输出5。
// 注意: 给定的数组长度不超过 2000 并且结果一定是32位有符号整数。

// 此题为 300 题的变形
// 2021.09.20 每日一题

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {
  //  dp[i] 为到 i 的最长字序列的长度
  let dp = new Array(nums.length).fill(0);
  // record[i] 表示以 nums[i] 结尾的最长递增子序列的个数
  let record = new Array(nums.length).fill(0);
  // max 记录最长子序列长度
  let max = 0;
  let res = 0;
  dp[0] = record[0] = 1;
  for (let i = 0; i < nums.length; i++) {
    dp[i] = record[i] = 1;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        // i 之前的最长子序列的长度加一
        if (dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1;
          record[i] = record[j];
          // 之前的最长子序列长度加一 等于 当前的最长子序列长度
          // 即子序列长度相等 则个数相加
        } else if (dp[j] + 1 == dp[i]) {
          record[i] += record[j];
        }
      }
    }

    if (dp[i] > max) {
      max = dp[i];
      res = record[i];
    } else if (dp[i] == max) {
      res += record[i];
    }
  }
  return res;
};
