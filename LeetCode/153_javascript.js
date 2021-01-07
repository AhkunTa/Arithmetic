// 假设按照升序排序的数组在预先未知的某个点上进行了旋转。例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] 。

// 请找出其中最小的元素。

//

// 示例 1：

// 输入：nums = [3,4,5,1,2]
// 输出：1
// 示例 2：

// 输入：nums = [4,5,6,7,0,1,2]
// 输出：0
// 示例 3：

// 输入：nums = [1]
// 输出：1
//

// 提示：

// 1 <= nums.length <= 5000
// -5000 <= nums[i] <= 5000
// nums 中的所有整数都是 唯一 的
// nums 原来是一个升序排序的数组，但在预先未知的某个点上进行了旋转

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let middle = Math.floor(left + (right - left) / 2);
    // 判断当 mid < right 缩小右边界
    if (nums[middle] < nums[right]) {
      right = middle;
      // 当 mid > right 缩小左边界 因为 mid必不为最小 可以跳过 left = middle + 1
    } else if (nums[middle] > nums[right]) {
      left = middle + 1;
    }
    // 可以直接 else
    // 因为 当 middle == right   right = Math.floor(left + (right - left) / 2);
    // 可以求得 right - left == (right -left) /2        left == right
    // 和while语句不符
    /* else {
      left = middle + 1;
    } */
  }
  return nums[left];
};
