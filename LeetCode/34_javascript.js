// 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

// 如果数组中不存在目标值 target，返回 [-1, -1]。

// 进阶：

// 你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？

// 示例 1：

// 输入：nums = [5,7,7,8,8,10], target = 8
// 输出：[3,4]
// 示例 2：

// 输入：nums = [5,7,7,8,8,10], target = 6
// 输出：[-1,-1]
// 示例 3：

// 输入：nums = [], target = 0
// 输出：[-1,-1]

// 提示：

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums 是一个非递减数组
// -109 <= target <= 109

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 双指针
// O(n)
var searchRange = function (nums, target) {
  if (!nums.includes(target)) return [-1, -1];

  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    if (nums[left] == target && nums[right] == target) {
      return [left, right];
    }
    if (nums[left] < target) {
      left++;
    }
    if (nums[right] > target) {
      right--;
    }
  }
};

// 偷鸡
var searchRange = function (nums, target) {
  let start = nums.indexOf(target);
  let end = nums.lastIndexOf(target);
  return [start, end];
};

// 二分
// O(logn)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let left = binalySearch(nums, target, true);
  let right = binalySearch(nums, target, false);
  return [left, right];
};
function binarySearch(nums, target, flag) {
  let left = 0,
    right = nums.length - 1;
  let res = -1;
  while (left <= right) {
    let middle = Math.floor(left + (right - left) / 2);
    if (nums[middle] > target) {
      right = middle - 1;
    } else if (nums[middle] < target) {
      left = middle + 1;
    } else {
      res = middle;
      // 当middle 等于 target 判断左右边界
      // true 判断左边界 将right 减小
      // false 判断右边界 将left 增大
      if (flag) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }
  }
  return res;
}
