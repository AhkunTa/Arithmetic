// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

// 示例:
// 输入: [-2,1,-3,4,-1,2,1,-5,4],
// 输出: 6
// 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。

/**
 * @param {number[]} nums
 * @return {number}
 */
 //1 循环遍历 实现复杂度为 O(n)
var maxSubArray = function(nums) {
    var sum = nums[0];
    var max = nums[0];
    for(var i = 1; i<nums.length; i++){
    	// sun< 0 时 获取数组的后一位元素作为和的初值
    	// 判断sun是否为正数 sun> 0 时 将sun加上数组当前的数值 
        if(sum <= 0){
            sum = nums[i]
        }else{
            sum = sum + nums[i]
        }
        if(max < sum){
            max = sum;
        }
    }
    return max
};


//2 动态规划 

