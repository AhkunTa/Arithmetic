// 给你一个含 n 个整数的数组 nums ，其中 nums[i] 在区间 [1, n] 内。请你找出所有在 [1, n] 范围内但没有出现在 nums 中的数字，并以数组的形式返回结果。

//

// 示例 1：

// 输入：nums = [4,3,2,7,8,2,3,1]
// 输出：[5,6]
// 示例 2：

// 输入：nums = [1,1]
// 输出：[2]
//

// 提示：

// n == nums.length
// 1 <= n <= 105
// 1 <= nums[i] <= n
// 进阶：你能在不使用额外空间且时间复杂度为 O(n) 的情况下解决这个问题吗? 你可以假定返回的数组不算在额外空间内。

// 基础很简单 难在进阶 不使用额外空间并时间复杂度为 O(n) 需要利用原始数组
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    // 需要判断num是否小于0 小于0 代表已被转换 需额外判断
    // 以下判断可以使用Math.ads简化
    // nums[Math.abs(num) -1] = -Math.abs(nums[num - 1])
    if (num > 0) {
      nums[num - 1] = nums[num - 1] > 0 ? -nums[num - 1] : nums[num - 1];
    } else if (num < 0) {
      nums[-num - 1] = nums[-num - 1] > 0 ? -nums[-num - 1] : nums[-num - 1];
    }
  }
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] > 0) {
      res.push(j + 1);
    }
  }
  return res;
};
