// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

// 说明：

// 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

// 示例 1:

// 输入: [2,2,1]
// 输出: 1
// 示例 2:

// 输入: [4,1,2,1,2]
// 输出: 4

/**
 * @param {number[]} nums
 * @return {number}
 */

// 异或运算 ^ 

// 将数字转换为二进制计算  	1^1=0
// 					  	1^0=1
// 						0^1=1
// 						0^0=0

var singleNumber = function(nums) {
    let a = 0;
    for(let i=0;i<nums.length;i++){
        a= a^nums[i];
    }
    return a;
};

// [2,2,2,2,1]

// 去重 比较
var singleNumber = function(nums) {
    nums.sort((a,b) => a-b )
    //  i+ = 2 
    for(let i =0; i< nums.length-1; i+=2){
        // 比较前后两个数是否相等
        if(nums[i] !== nums[i+1]){
            return nums[i]
        }
    }
    // 最后一种情况
    // i = nums.length -2
    return nums[nums.length - 1];
};