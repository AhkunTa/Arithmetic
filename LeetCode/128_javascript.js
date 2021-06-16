// 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

//

// 进阶：你可以设计并实现时间复杂度为 O(n) 的解决方案吗？

//

// 示例 1：

// 输入：nums = [100,4,200,1,3,2]
// 输出：4
// 解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
// 示例 2：

// 输入：nums = [0,3,7,2,5,8,4,6,0,1]
// 输出：9
//

// 提示：

// 0 <= nums.length <= 104
// -109 <= nums[i] <= 109
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (!nums.length) return 0;
  let set = new Set();
  let maxLength = 1;
  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i]);
  }

  for (let j = 0; j < nums.length; j++) {
    let tempMaxLength = 1;
    // 存在 nums[j] -1的数 则nums[j] 一定不是左边界
    if (set.has(nums[j] - 1)) {
      continue;
    } else {
      // 当前为左边界时 判断 nums[j] +1 ,nums[j] +2 ...
      let tempNum = nums[j];
      while (set.has(++tempNum)) {
        tempMaxLength++;
      }
    }
    maxLength = Math.max(tempMaxLength, maxLength);
  }
  return maxLength;
};
