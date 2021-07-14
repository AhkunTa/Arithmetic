// 给你两个正整数数组 nums1 和 nums2 ，数组的长度都是 n 。

// 数组 nums1 和 nums2 的 绝对差值和 定义为所有 |nums1[i] - nums2[i]|（0 <= i < n）的 总和（下标从 0 开始）。

// 你可以选用 nums1 中的 任意一个 元素来替换 nums1 中的 至多 一个元素，以 最小化 绝对差值和。

// 在替换数组 nums1 中最多一个元素 之后 ，返回最小绝对差值和。因为答案可能很大，所以需要对 109 + 7 取余 后返回。

// |x| 定义为：

// 如果 x >= 0 ，值为 x ，或者
// 如果 x <= 0 ，值为 -x
//  

// 示例 1：

// 输入：nums1 = [1,7,5], nums2 = [2,3,5]
// 输出：3
// 解释：有两种可能的最优方案：
// - 将第二个元素替换为第一个元素：[1,7,5] => [1,1,5] ，或者
// - 将第二个元素替换为第三个元素：[1,7,5] => [1,5,5]
// 两种方案的绝对差值和都是 |1-2| + (|1-3| 或者 |5-3|) + |5-5| = 3
// 示例 2：

// 输入：nums1 = [2,4,6,8,10], nums2 = [2,4,6,8,10]
// 输出：0
// 解释：nums1 和 nums2 相等，所以不用替换元素。绝对差值和为 0
// 示例 3：

// 输入：nums1 = [1,10,4,4,2,7], nums2 = [9,3,5,1,7,4]
// 输出：20
// 解释：将第一个元素替换为第二个元素：[1,10,4,4,2,7] => [10,10,4,4,2,7]
// 绝对差值和为 |10-9| + |10-3| + |4-5| + |4-1| + |2-7| + |7-4| = 20
//  

// 提示：

// n == nums1.length
// n == nums2.length
// 1 <= n <= 105
// 1 <= nums1[i], nums2[i] <= 105


//  | nums1[i] - nums2[i] | 的绝对值 题目可以修改 nums1[i]的值 
//  所以修改后 | nums1[x] - nums2[i] | x为任意值
//  要想获得最小的绝对值差之和  那么 替换的 | nums1[x] - nums2[i] | 要为最小 -》 无线接近0 就可以
//  所以 循环判断 num1[x]的值 要接近 nums2[i] 
//  使用二分查找最接近 nums2[i] 的索引 x

function minAbsoluteSumDiff(nums1: number[], nums2: number[]): number {
  let sum = 0;
  let max = 0;
  let cloneNums = [...nums1].sort((a, b) => a - b);

  for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] == nums2[i]) continue;
    let diff = Math.abs(nums1[i] - nums2[i])
    sum = sum + diff;
    // 获取和num2[i]最接近的值
    let current = binarySearch(cloneNums, nums2[i]);
    // 因为有可能 current 的索引值大于nums2[i] 也有可能小于 
    // 此处二分采用 left的值 并取left + 1 
    // 所以 需再检查 left的值 - 1
    max = Math.max(max, diff - Math.abs(cloneNums[current] - nums2[i]))

    if (current > 0) {
      max = Math.max(max, diff - Math.abs(cloneNums[current - 1] - nums2[i]))
    }
  }
  function binarySearch(arr: number[], target: number): number {
    // 二分查找最接近 target的值
    let left = 0, right = arr.length - 1;
    while (left < right) {
      let mid = left + Math.floor((right - left) / 2);
      if (arr[mid] < target) {
        left = mid + 1
      } else {
        right = mid
      }
    }
    return left
  }
  // 取余
  return (sum - max) % 1000000007;
};
