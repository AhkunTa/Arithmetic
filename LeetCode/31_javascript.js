// 实现获取 下一个排列 的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。

// 如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。

// 必须 原地 修改，只允许使用额外常数空间。

//

// 示例 1：

// 输入：nums = [1,2,3]
// 输出：[1,3,2]
// 示例 2：

// 输入：nums = [3,2,1]
// 输出：[1,2,3]
// 示例 3：

// 输入：nums = [1,1,5]
// 输出：[1,5,1]
// 示例 4：

// 输入：nums = [1]
// 输出：[1]
//

// 提示：

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 100
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  // let number = nums.join('')
  // let
  let left = 0;
  right = 0;
  let flag = false;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < nums[i + 1]) {
      right = i + 1;
      left = i;
      flag = true;
    }
  }
  // 如果没有后者的数大于前者的直接反转数组
  if (!flag) {
    return nums.reverse();
  }

  for (let i = right + 1; i < nums.length; i++) {
    if (nums[i] > nums[left]) {
      right = i;
    }
  }
  [nums[left], nums[right]] = [nums[right], nums[left]];

  // 冒泡排序 获取后续队列
  for (let k = left + 1; k < nums.length; k++) {
    for (let h = k + 1; h < nums.length; h++) {
      if (nums[k] > nums[h]) {
        [nums[k], nums[h]] = [nums[h], nums[k]];
      }
    }
  }
};
