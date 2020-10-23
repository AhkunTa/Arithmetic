设计一个算法，找出数组中最小的k个数。以任意顺序返回这k个数均可。

示例：

输入： arr = [1,3,5,7,2,4,6,8], k = 4
输出： [1,2,3,4]
提示：

0 <= len(arr) <= 100000
0 <= k <= min(100000, len(arr))


/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */

// 偷鸡解法  实际上使用排序算法大概率会超时
var smallestK = function(arr, k) {

    arr.sort((a,b)=> a-b)

    return arr.slice(0,k)
};