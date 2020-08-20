
// 给定两个数组，编写一个函数来计算它们的交集。

// 示例 1:

// 输入: nums1 = [1,2,2,1], nums2 = [2,2]
// 输出: [2,2]
// 示例 2:

// 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出: [4,9]
// 说明：

// 输出结果中每个元素出现的次数，应与元素在两个数组中出现的次数一致。
// 我们可以不考虑输出结果的顺序。
// 进阶:

// 如果给定的数组已经排好序呢？你将如何优化你的算法？
// 如果 nums1 的大小比 nums2 小很多，哪种方法更优？
// 如果 nums2 的元素存储在磁盘上，磁盘内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？




// 双指针


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 时间复杂度O(max(nlogn, mlogm, n+m)) 如果数组已排序 复杂度为O(n)
// 空间复杂度为 O(n) 优化可变为O(1)
var intersect = function(nums1, nums2) {
	nums1.sort( (a,b) => a-b);
	nums2.sort( (a,b) => a-b);
	let arr = [],i=0,j=0
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
	return arr
};


// hashmap

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
//  时间复杂度O(n)

// 先用Hashmap记录第一个数组中的元素【放在key】，和出现的次数【放在value】。

// 然后再遍历第二个数组，如果找到对应元素，则添加这个元素到返回数组里。

// 如果value值大于1，HashMap中的value值减 1，表示已经找到一个相同的了。

// 如果value值等于1，则删除该元素。

var intersect = function(nums1, nums2) {
	let hash = new Map();
    let arr = []
    for(let i = 0; i < nums1.length; i ++){
        if(hash.has(nums1[i])){
            hash.set(nums1[i],hash.get(nums1[i]) + 1)
        }else {
            hash.set(nums1[i], 1)
        }
    }

    for(let j = 0; j < nums2.length; j ++){
        if(hash.has(nums2[j])){
            arr.push(nums2[j])
            if(hash.get(nums2[j]) >1){
                hash.set(nums2[j],hash.get(nums2[j]) -1)
            }else {
                hash.delete(nums2[j])
            }
        }
    }
    return arr
};