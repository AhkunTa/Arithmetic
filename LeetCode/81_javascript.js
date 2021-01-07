// 假设按照升序排序的数组在预先未知的某个点上进行了旋转。

// ( 例如，数组 [0,0,1,2,2,5,6] 可能变为 [2,5,6,0,0,1,2] )。

// 编写一个函数来判断给定的目标值是否存在于数组中。若存在返回 true，否则返回 false。

// 示例 1:

// 输入: nums = [2,5,6,0,0,1,2], target = 0
// 输出: true
// 示例 2:

// 输入: nums = [2,5,6,0,0,1,2], target = 3
// 输出: false
// 进阶:

// 这是 搜索旋转排序数组 的延伸题目，本题中的 nums  可能包含重复元素。
// 这会影响到程序的时间复杂度吗？会有怎样的影响，为什么？

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
// 和 33 相比增加了重复元素 需要判断
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let middle = Math.floor(left + (right - left) / 2);
    if (nums[middle] == target) {
      return true;
    }
    // 当重复数字 不能确定两边相同的区间
    if (nums[left] == nums[middle]) {
      left++;
    } else if (nums[middle] <= nums[right]) {
      if (target <= nums[right] && target >= nums[middle]) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    } else {
      if (target <= nums[middle] && target >= nums[left]) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }
  }
  return false;
};
