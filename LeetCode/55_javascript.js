// 给定一个非负整数数组，你最初位于数组的第一个位置。

// 数组中的每个元素代表你在该位置可以跳跃的最大长度。

// 判断你是否能够到达最后一个位置。

// 示例 1:

// 输入: [2,3,1,1,4]
// 输出: true
// 解释: 我们可以先跳 1 步，从位置 0 到达 位置 1, 然后再从位置 1 跳 3 步到达最后一个位置。
// 示例 2:

// 输入: [3,2,1,0,4]
// 输出: false
// 解释: 无论怎样，你总会到达索引为 3 的位置。但该位置的最大跳跃长度是 0 ， 所以你永远不可能到达最后一个位置。

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let res = true;
  // 循环从 i-1 开始 不考虑最后一位
  for (let i = nums.length - 2; i >= 0; i--) {
    // 从后往前循环 当有0时 判断前面的所有值能不能跳过0这个坐标
    if (nums[i] === 0) {
      let j = i;
      res = false;
      while (j--) {
        // 当前值 + 索引 大于 0的索引就可以跳过
        if (nums[j] + j > i) {
          res = true;
          break;
        }
      }
      // 当所有前面元素都通不过时 直接return false
      // 都通过时 需判断下一个0
      if (!res) return false;
    }
  }
  return res;
};

// 维护一个最远长度
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let mostDistance = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i <= mostDistance) {
      mostDistance = Math.max(nums[i] + i, mostDistance);
      if (mostDistance >= nums.length - 1) {
        return true;
      }
    }
  }
  return false;
};
// https://leetcode-cn.com/problems/jump-game/solution/tiao-yue-you-xi-by-leetcode-solution/

// 以上优化
var canJump = function (nums) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > k) return false;
    k = Math.max(k, i + nums[i]);
  }
  return true;
};
