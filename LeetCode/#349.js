


// 给定两个数组，编写一个函数来计算它们的交集。

// 示例 1:

// 输入: nums1 = [1,2,2,1], nums2 = [2,2]
// 输出: [2]
// 示例 2:

// 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出: [9,4]


// 相似题目 #350


// set 方法去重
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let arr = [];
    let newNums1 = [...new Set(nums1)];
    let newNums2 = [...new Set(nums2)];
    
    for(let i=0; i< newNums1.length; i++){
        if(newNums2.includes(newNums1[i])){
            arr.push(newNums1[i]);
        }
    }
    return arr;
};

// 修改以上方法

var intersection = function(nums1, nums2) {
    let arr = [];
    for(let i=0; i< newNums1.length; i++){
        if(newNums2.includes(newNums1[i])){
            arr.push(newNums1[i]);
        }
    }
    return [... new Set(arr)];
};

// 再次修改
var intersection = function(nums1, nums2) {
	return [...new Set(nums1.filter((item)=>nums2.includes(item)))];
}


// 双指针 


var intersection = function(nums1, nums2) {
	// 先将两个数组排序
	nums1.sort( (a,b) => a-b);
	nums2.sort( (a,b) => a-b);
	let arr = []
	while(i < nums1.length && j < nums2.length){
		if(nums1[i] == nums2[j]){
			arr.push(nums1[i]);
			i++;
			j++;
		}else if( nums1[i] < nums2[j]){
			
			i++;
		}else if(nums1[i] > nums2[j]) {
			
			j++;
		}
	}
	return [...new Set(arr)];

}


// 二分查找 