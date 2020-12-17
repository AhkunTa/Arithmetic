// 图片 https://leetcode-cn.com/problems/trapping-rain-water/

// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

// 示例 1：

// 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
// 输出：6
// 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。
// 示例 2：

// 输入：height = [4,2,0,3,2,5]
// 输出：9

// 提示：

// n == height.length
// 0 <= n <= 3 * 104
// 0 <= height[i] <= 105

/**
 * @param {number[]} height
 * @return {number}
 */
// 题解: https://leetcode-cn.com/problems/trapping-rain-water/solution/xiang-xi-tong-su-de-si-lu-fen-xi-duo-jie-fa-by-w-8/
var trap = function (height) {
  // 遍历每一列 求每一列接的雨水
  let res = 0;
  // 第一列和最后一列必接不到雨水 直接略过
  for (let i = 1; i < height.length - 1; i++) {
    let leftMax = 0,
      rightMax = 0;

    // 当前列数为i 获取最左边的最大高度
    for (let j = i; j >= 0; j--) {
      leftMax = Math.max(leftMax, height[j]);
    }
    // 获取最右边最大高度
    for (let k = i; k < height.length; k++) {
      rightMax = Math.max(rightMax, height[k]);
    }
    // 获取其中左右的较小值
    let sum = Math.min(leftMax, rightMax);

    // 当当前高度小于左右两边最大高度的最小值时存入数组
    if (height[i] < sum) {
      res += sum - height[i];
    }
  }
  return res;
};

// 动态规划
// 上面的题解优化一下
// 使用动态规划取 i 时左边和右边的柱子的最大高度

var trap = function (height) {
  // 遍历每一列 求每一列接的雨水
  let res = 0;

  let left = new Array(height.length);
  let right = new Array(height.length);
  // 初始值
  right[height.length - 1] = height[height.length - 1];
  left[0] = height[0];
  // 计算right
  for (let i = height.length - 2; i >= 0; i--) {
    right[i] = Math.max(height[i + 1], right[i + 1]);
  }
  // left 数组
  for (let j = 1; j < height.length; j++) {
    left[j] = Math.max(height[j - 1], left[j - 1]);
  }

  // 第一列和最后一列必接不到雨水 直接略过
  for (let i = 1; i < height.length - 1; i++) {
    let sum = Math.min(left[i], right[i]);
    if (height[i] < sum) {
      res += sum - height[i];
    }
  }
  return res;
};

// 双指针
var trap = function (height) {
  let res = 0;

  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        res += leftMax - height[left];
      }
      ++left;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        res += rightMax - height[right];
      }
      --right;
    }
  }
  return res;
};
// https://leetcode-cn.com/problems/trapping-rain-water/solution/jie-yu-shui-by-leetcode/
