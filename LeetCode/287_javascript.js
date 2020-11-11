// 给定一个包含 n + 1 个整数的数组 nums，其数字都在 1 到 n 之间（包括 1 和 n），可知至少存在一个重复的整数。假设只有一个重复的整数，找出这个重复的数。

// 示例 1:

// 输入: [1,3,4,2,2]
// 输出: 2
// 示例 2:

// 输入: [3,1,3,4,2]
// 输出: 3
// 说明：

 
// 不能更改原数组（假设数组是只读的）。
// 只能使用额外的 O(1) 的空间。
// 时间复杂度小于 O(n2) 。
// 数组中只有一个重复的数字，但它可能不止重复出现一次。
// 原数组不是有序，但是我们知道重复的那个数字肯定是 1 到 n 中的某一个，而 1,2...,n 就是一个有序序列。因此我们可以对 1,2...,n 进行二分查找。

// mid = (1 + n) / 2，接下来判断最终答案是在 [1, mid] 中还是在 [mid + 1, n] 中。

// 我们只需要统计原数组中小于等于 mid 的个数，记为 count。

// 如果 count > mid ，鸽巢原理，在 [1,mid] 范围内的数字个数超过了 mid ，所以一定有一个重复数字。

// 否则的话，既然不在 [1,mid] ，那么最终答案一定在 [mid + 1, n] 中。

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = (nums) => {
  let left = 1, right = nums.length - 1 // 数组项的范围 1 到 n
  while (left < right) { // 在循环中缩小区间，区间闭合循环结束
    let mid = (left + right) >> 1 // 求中位数
    let count = 0
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] <= mid) count++ // 统计小于等于mid的个数
    }
    if (count > mid) { // 重复数落在 [1,mid]
      right = mid       // 区间收缩
    } else {           // 落在 [mid+1,n]
      left = mid + 1    // 区间收缩
    }
  }
  return left
}
