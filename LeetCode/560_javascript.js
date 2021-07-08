// 给定一个整数数组和一个整数 k，你需要找到该数组中和为 k 的连续的子数组的个数。

// 示例 1 :

// 输入:nums = [1,1,1], k = 2
// 输出: 2 , [1,1] 与 [1,1] 为两种不同的情况。
// 说明 :

// 数组的长度为 [1, 20,000]。
// 数组中元素的范围是 [-1000, 1000] ，且整数 k 的范围是 [-1e7, 1e7]。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// 连续子数组
// sum[j] - sum[i] == k
// sum[i] 为前面i项之和

var subarraySum = function (nums, k) {
  let map = {};
  let sum = 0;
  let res = 0;
  map[0] = 1;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (map[sum - k] !== undefined) {
      res += map[sum - k];
    }
    map[sum] = map[sum] ? map[sum] + 1 : 1;
  }
  return res;
};
