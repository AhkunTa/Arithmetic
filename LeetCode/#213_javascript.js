// 你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都围成一圈，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

// 给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下，能够偷窃到的最高金额。

// 示例 1:

// 输入: [2,3,2]
// 输出: 3
// 解释: 你不能先偷窃 1 号房屋（金额 = 2），然后偷窃 3 号房屋（金额 = 2）, 因为他们是相邻的。
// 示例 2:

// 输入: [1,2,3,1]
// 输出: 4
// 解释: 你可以先偷窃 1 号房屋（金额 = 1），然后偷窃 3 号房屋（金额 = 3）。
//      偷窃到的最高金额 = 1 + 3 = 4 。

/**
 * @param {number[]} nums
 * @return {number}
 */

// 和打家劫舍原题 198一样的思路不过围成了一个圈
// 循环两次 第一次循环到0 - n-1 第二次 1 - n 选择两者中最大值
// 状态转移方程 和 198 一样
var rob = function(nums) {
    if(nums.length == 0 ) return 0;
    if(nums.length == 1 ) return nums[0];
    // 使用一个数组 降低空间复杂度
	let dp = Array.from(new Array(nums.length )).fill(0);
    let maxValue;
    dp[0] = nums[0];
    dp[1] = Math.max( nums[1], nums[0])
    for(let i=2; i<nums.length-1; i++){
        dp[i] = Math.max(dp[i-1], nums[i] + dp[i-2])
    }
    // 最大的值为length-2
    maxValue = dp[nums.length-2];
    // 重置元素
    dp[0] = 0;
    dp[1] = nums[1]
    for(let j=2; j<nums.length; j++){
        dp[j] = Math.max(dp[j-1], nums[j] + dp[j-2])
    }
    return Math.max(maxValue,dp[nums.length-1])
};