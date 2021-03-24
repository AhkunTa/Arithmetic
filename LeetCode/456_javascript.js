// 给你一个整数数组 nums ，数组中共有 n 个整数。132 模式的子序列 由三个整数 nums[i]、nums[j] 和 nums[k] 组成，并同时满足：i < j < k 和 nums[i] < nums[k] < nums[j] 。

// 如果 nums 中存在 132 模式的子序列 ，返回 true ；否则，返回 false 。

//

// 进阶：很容易想到时间复杂度为 O(n^2) 的解决方案，你可以设计一个时间复杂度为 O(n logn) 或 O(n) 的解决方案吗？

//

// 示例 1：

// 输入：nums = [1,2,3,4]
// 输出：false
// 解释：序列中不存在 132 模式的子序列。
// 示例 2：

// 输入：nums = [3,1,4,2]
// 输出：true
// 解释：序列中有 1 个 132 模式的子序列： [1, 4, 2] 。
// 示例 3：

// 输入：nums = [-1,3,2,0]
// 输出：true
// 解释：序列中有 3 个 132 模式的的子序列：[-1, 3, 2]、[-1, 3, 0] 和 [-1, 2, 0] 。
//

// 提示：

// n == nums.length
// 1 <= n <= 104
// -109 <= nums[i] <= 109

// O(n^2)
var find132pattern = function (nums) {
  let numsi = nums[0];
  // 循环 固定两个值 j 和 k
  for (let j = 1; j < nums.length - 1; j++) {
    for (let k = j + 1; k < nums.length; k++) {
      // 正常判断 nums[i] < nums[k] < nums[j]
      if (numsi < nums[k] && nums[k] < nums[j]) {
        return true;
      }
    }
    // 使i < j < k
    // 并且 在循环结束后 更新i的最小值
    // 此处贪心 只需取 j 之前的最小值
    numsi = Math.min(numsi, nums[j]);
  }
  return false;
};
