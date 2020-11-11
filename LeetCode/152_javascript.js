// 给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。

//  

// 示例 1:

// 输入: [2,3,-2,4]
// 输出: 6
// 解释: 子数组 [2,3] 有最大乘积 6。
// 示例 2:

// 输入: [-2,0,-1]
// 输出: 0
// 解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。


/**
 * @param {number[]} nums
 * @return {number}
 */

// 动态规划

// 四种情况：
// nums[i] 的正负和之前的状态值（正负）就产生了联系，由此关系写出状态转移方程：

// 当 nums[i] > 0 时，由于是乘积关系：
// 最大值乘以正数依然是最大值；
// 最小值乘以同一个正数依然是最小值；
// 当 nums[i] < 0 时，依然是由于乘积关系：
// 最大值乘以负数变成了最小值；
// 最小值乘以同一个负数变成最大值；
// 当 nums[i] = 0 的时候，由于 nums[i] 必须被选取，最大值和最小值都变成 00 ，合并到上面任意一种情况均成立。

// 官方题解 https://leetcode-cn.com/problems/maximum-product-subarray/solution/dong-tai-gui-hua-li-jie-wu-hou-xiao-xing-by-liweiw/

var maxProduct = function(nums) {
    let dpMax = new Array(nums.length).fill(0),dpMin = new Array(nums.length).fill(0);
    let max = nums[0];
    dpMax[0] = dpMin[0] = nums[0];
    
    for(let i = 1; i< nums.length; i++){
        dpMax[i] = Math.max( dpMax[i-1] * nums[i], Math.max( dpMin[i-1] * nums[i], nums[i]));
        dpMin[i] = Math.min( dpMin[i-1] * nums[i], Math.min( dpMax[i-1] * nums[i], nums[i]));
        max = Math.max(max, dpMax[i]);
    }
    return max;

};