// 给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。

// 请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。
//

// 示例 1：

// 输入：nums = [1,2,0]
// 输出：3
// 示例 2：

// 输入：nums = [3,4,-1,1]
// 输出：2
// 示例 3：

// 输入：nums = [7,8,9,11,12]
// 输出：1
//

// 提示：

// 1 <= nums.length <= 5 * 105
// -231 <= nums[i] <= 231 - 1

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    //  当nums[i]为正整数 并且 交换的索引要小于nums的长度
    //  当 nums[i] ==nums[nums[i]-1] 时陷入死循环排除
    while (
      nums[i] > 0 &&
      nums[i] < nums.length &&
      nums[i] !== nums[nums[i] - 1]
    ) {
      //  两者交换
      [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
    }
  }
  //  交换后最终的nums数组 [1,2,3,4,5,6,...]
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }
  return nums.length + 1;
};
