// 给定一个非负整数数组，你最初位于数组的第一个位置。

// 数组中的每个元素代表你在该位置可以跳跃的最大长度。

// 你的目标是使用最少的跳跃次数到达数组的最后一个位置。

// 示例:

// 输入: [2,3,1,1,4]
// 输出: 2
// 解释: 跳到最后一个位置的最小跳跃数是 2。
//      从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
// 说明:

// 假设你总是可以到达数组的最后一个位置。

// 题目同 55题
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  if (nums.length <= 1) return 0;
  // 最大长度
  let max = 0;
  // 结束位置
  let end = 0;
  // 步数
  let step = 0;
  for (let i = 0; i < nums.length; i++) {
    // 获取最大长度
    max = Math.max(max, i + nums[i]);
    // 如果可以跳到最后的位置 步数++ 返回
    if (max >= nums.length - 1) {
      step++;
      return step;
    }
    // 关键在于判断如何 步数++
    // 当 end 结束位置 在等于i位置 即
    // 结束位置大于 能够跳的最大距离
    // step++
    if (end == i) {
      step++;
      end = max;
    }
  }
  return step;
};
