// 给你一个长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。

//

// 示例:

// 输入: [1,2,3,4]
// 输出: [24,12,8,6]
//

// 提示：题目数据保证数组之中任意元素的全部前缀元素和后缀（甚至是整个数组）的乘积都在 32 位整数范围内。

// 说明: 请不要使用除法，且在 O(n) 时间复杂度内完成此题。

// 进阶：
// 你可以在常数空间复杂度内完成这个题目吗？（ 出于对空间复杂度分析的目的，输出数组不被视为额外空间。）

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let left = 1;
  right = 1;
  // nums[i] = num[i]的左边值 * num[i]的右边值
  let res = new Array(nums.length).fill(1);
  // 先计算left
  for (let i = 0; i < nums.length; i++) {
    if (i - 1 >= 0) {
      res[i] = nums[i - 1] * left;
      // 依次计算left
      left = left * nums[i - 1];
    }
  }
  // res  1  1  2  6
  // left 1  1  2  6

  // 在计算right
  for (let j = nums.length - 1; j >= 0; j--) {
    if (j + 1 < nums.length) {
      // 此处要先计算right
      right = right * nums[j + 1];
      res[j] = res[j] * right;
    }
  }
  return res;
};

// 一次遍历
var productExceptSelf = function (nums) {
  let left = 1;
  right = 1;

  let res = new Array(nums.length).fill(1);

  for (let i = 0; i < nums.length; i++) {
    res[i] *= left;
    left *= nums[i];

    res[nums.length - 1 - i] *= right;
    right *= nums[nums.length - 1 - i];
  }

  return res;
};
