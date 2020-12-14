// 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

//

// 示例：

// 输入：nums = [-1,2,1,-4], target = 1
// 输出：2
// 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
//

// 提示：

// 3 <= nums.length <= 10^3
// -10^3 <= nums[i] <= 10^3
// -10^4 <= target <= 10^4

// 暴力容易超时 不推荐

// 经典双指针
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var threeSumClosest = function (nums, target) {
  // 先进行排序
  nums.sort((a, b) => {
    return a - b;
  });
  let res = nums[0] + nums[1] + nums[2];
  for (let k = 0; k < nums.length - 2; k++) {
    let i = k + 1;
    j = nums.length - 1;
    while (i < j) {
      let total = nums[i] + nums[j] + nums[k];
      if (Math.abs(total - target) < Math.abs(res - target)) {
        res = total;
      }
      if (target == total) return total;
      if (target < total) {
        j--;
      } else {
        i++;
      }
    }
  }
  return res;
};
