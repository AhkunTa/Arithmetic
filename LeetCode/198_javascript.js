// https://leetcode-cn.com/problems/house-robber/

// 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

// 给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下，能够偷窃到的最高金额。

// 示例 1:

// 输入: [1,2,3,1]
// 输出: 4
// 解释: 偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
//      偷窃到的最高金额 = 1 + 3 = 4 。
// 示例 2:

// 输入: [2,7,9,3,1]
// 输出: 12
// 解释: 偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
//      偷窃到的最高金额 = 2 + 9 + 1 = 12 。


/**
 * @param {number[]} nums
 * @return {number}
 */
// 1 动态规划  来自官方题解

// 判断 所偷窃的最大值 = MAX( 前面偷窃的最大值加上当前偷窃的金额 , 和当前最大值比较 ) 
// maxValue = nums[key] + curValue(循环中将maxValue暂存为curValue)

var rob = function(nums) {
    var maxValue = 0;
    var curValue = 0;
    for(var key in nums){
        var temp = maxValue;
        maxValue = Math.max(curValue + nums[key],maxValue);
        curValue = temp;
    }
    return maxValue;
};