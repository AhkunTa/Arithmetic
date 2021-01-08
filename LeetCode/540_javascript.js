// 给定一个只包含整数的有序数组，每个元素都会出现两次，唯有一个数只会出现一次，找出这个数。

// 示例 1:

// 输入: [1,1,2,3,3,4,4,8,8]
// 输出: 2
// 示例 2:

// 输入: [3,3,7,7,10,11,11]
// 输出: 10
// 注意: 您的方案应该在 O(log n)时间复杂度和 O(1)空间复杂度中运行。

// 时间复杂度 O(logn)
// 二分法
/**
 * @param {number[]} nums
 * @return {number}
 */
// 本题主要取middle中间值
// 分别判断 middle 和  middle -1   middle + 1 是否相等
// 在分别判断以上两种条件下 除去中间 两个相等的值 之外 左右两边的奇偶

var singleNonDuplicate = function (nums) {
  let left = 0,
    right = nums.length - 1;

  while (left < right) {
    let middle = Math.floor(left + (right - left) / 2);
    // 列 : 1 1 2 3 3 5 5 7 7
    // 中间值为 3  middle == middle - 1
    // middle - left = 3 - 0 = 3 % 2 = 1
    // 所以 left = middle + 1
    // 反之 right = middle - 2
    if (nums[middle] == nums[middle - 1]) {
      if ((middle - left) % 2 == 1) {
        left = middle + 1;
      } else {
        right = middle - 2;
      }
      // 列 : 1 1 3 3 5 5 6 7 7
      // 中间值为 5  middle == middle + 1
      // middle - left = 4 - 0 = 4 % 2 = 0
      // middle + 1 为5 跳过 所有以 left = middle + 2
      // 反之 right = middle -1
    } else if (nums[middle] == nums[middle + 1]) {
      if ((middle - left) % 2 == 0) {
        left = middle + 2;
      } else {
        right = middle - 1;
      }
    } else {
      return nums[middle];
    }
  }
  return nums[left];
};
