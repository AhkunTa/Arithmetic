
// 给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j 的差的 绝对值 至多为 k。

// 示例 1:

// 输入: nums = [1,2,3,1], k = 3
// 输出: true
// 示例 2:

// 输入: nums = [1,0,1,1], k = 1
// 输出: true
// 示例 3:

// 输入: nums = [1,2,3,1,2,3], k = 2
// 输出: false


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

// 双重循环暴力破解
var containsNearbyDuplicate = function(nums,k) {
    for(let i=0; i< nums.length ; i++){
        for(let j = i+1; j< nums.length; j++){
           if(nums[i] == nums[j] && j - i <= k){
               return true
           } 
        }  
    }
    return false
};


// 维护一个哈希表，里面始终最多包含 k 个元素，当出现重复值时则说明在 k 距离内存在重复元素
// 每次遍历一个元素则将其加入哈希表中，如果哈希表的大小大于 k，则移除最前面的数字
// 时间复杂度：O(n)O(n)，nn 为数组长度

var containsNearbyDuplicate = function(nums,k) {
    let set =  new Set();

    for(let i=0 ;i< nums.length; i++) {
    	if(set.has(nums[i])){
    		return true;
    	}
    	set.add(nums[i]);

    	if(set.size == k){
    		set.delete(nums[i-k]);

    	}
    }
    return false;
};