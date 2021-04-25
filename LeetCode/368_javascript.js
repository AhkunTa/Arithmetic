// 给你一个由 无重复 正整数组成的集合 nums ，请你找出并返回其中最大的整除子集 answer ，子集中每一元素对 (answer[i], answer[j]) 都应当满足：
// answer[i] % answer[j] == 0 ，或
// answer[j] % answer[i] == 0
// 如果存在多个有效解子集，返回其中任何一个均可。

//

// 示例 1：

// 输入：nums = [1,2,3]
// 输出：[1,2]
// 解释：[1,3] 也会被视为正确答案。
// 示例 2：

// 输入：nums = [1,2,4,8]
// 输出：[1,2,4,8]
//

// 提示：

// 1 <= nums.length <= 1000
// 1 <= nums[i] <= 2 * 109
// nums 中的所有整数 互不相同

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
  nums.sort((a, b) => a - b);
  // dp[i]为在i时最长的元素长度
  let dp = new Array(nums.length).fill(1);
  // 最大值时的索引值
  let maxIndex = 0;
  // 最大值时的dp[i]
  let maxNum = 1;
  for (let i = 1; i < nums.length; i++) {
    let max = 0;
    for (let j = 0; j < i; j++) {
      if (nums[i] % nums[j] == 0) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    // 获取最大值的最后一个索引 例
    // [1,2,3,4,5,6,7,12]  则获取12的索引
    // 在遍历 第一位 到 索引地址 可以获得最大子数组
    if (dp[i] > maxNum) {
      maxNum = dp[i];
      maxIndex = i;
    }
  }
  let res = [];
  // 获取最大子数组
  //   1  2  3  4  5  6  7  12
  //dp 1  2  2  3  2  3  2  4
  for (let k = maxIndex; k >= 0; k--) {
    if (nums[maxIndex] % nums[k] == 0 && dp[k] == maxNum) {
      res.push(nums[k]);
      maxNum--;
      // 需更新maxIndex值
      maxIndex = k;
    }
  }
  return res;
};
