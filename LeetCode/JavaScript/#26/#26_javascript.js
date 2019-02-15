// 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
// 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。


/**
 * @param {number[]} nums
 * @return {number}
 */

//题目是给定一个排序好的数组，注意！
var removeDuplicates = function(nums) {
    if(nums.length == 0) return ;
    var j=0;
    for(var i =0 ; i<nums.length ;i++){
        if(nums[j] !=nums[i]){
            j++;
            nums[j] = nums[i];
        } 
    }
    return j+1;
};