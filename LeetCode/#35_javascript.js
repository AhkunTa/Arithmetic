// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
// 你可以假设数组中无重复元素。

// 示例 1:
// 输入: [1,3,5,6], 5
// 输出: 2
// 示例 2:

// 输入: [1,3,5,6], 2
// 输出: 1
// 示例 3:

// 输入: [1,3,5,6], 7
// 输出: 4
// 示例 4:

// 输入: [1,3,5,6], 0
// 输出: 0




/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//1 暴力破解
var searchInsert = function(nums, target) {
    for(var i=0; i<nums.length; i++){
        if(target <= nums[i]){
            return i;
        }
    } 
    return nums.length;
};

//2 二分查找
var searchInsert = function(nums, target) {
   var first = 0,last = nums.length -1;
    while(first <= last){
        var mid = Math.ceil((first + last)/2) ;
        if(nums[mid] == target){
            return mid;
        }
        if(nums[mid] > target){
            last = mid -1;
        }else if(nums[mid] < target){
            first = mid + 1;
        }
    }
    return last + 1;
};