// 给定一个整数数组，判断是否存在重复元素。

// 如果任意一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。

//  

// 示例 1:

// 输入: [1,2,3,1]
// 输出: true
// 示例 2:

// 输入: [1,2,3,4]
// 输出: false
// 示例 3:

// 输入: [1,1,1,3,3,4,3,2,4,2]
// 输出: true


// 暴力

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    for(let i=0; i< nums.length ; i++){
        for(let j = i+1; j< nums.length; j++){
           if(nums[i] == nums[j]){
               return true
           } 
        }
           
    }
    return false
};


// 去重后在判断

// 1.去重后判断长度相等

var containsDuplicate = function(nums) {
    return  nums.length == 0 ? false : new Set(nums).size !== nums.length
};


// 2.排序后判断前后相等 只需一次循环

var containsDuplicate = function(nums) {
	nums.sort((a,b) => a - b);

	for(let i=1; i<nums.length; i++){
		if(nums[i] == nums[i-1]){
			return true
		}
	}
	return false;
};
