// 给定一个包含非负整数的数组，你的任务是统计其中可以组成三角形三条边的三元组个数。

// 示例 1:

// 输入: [2,2,3,4]
// 输出: 3
// 解释:
// 有效的组合是: 
// 2,3,4 (使用第一个 2)
// 2,3,4 (使用第二个 2)
// 2,2,3
// 注意:

// 数组长度不超过1000。
// 数组里整数的范围为 [0, 1000]。


/**
 * @param {number[]} nums
 * @return {number}
 */
function triangleNumber(nums: number[]): number {
  // 复习以下三角形定义
  // 两边之和大于第三边
  // 两边之差小于第三边
  let res: number = 0;
  // 遇事不决 先排序
  // 从大到小遍历
  nums.sort((a, b) => b - a);
  // [6,5,4,3,2,1]
  for (let i = 0; i < nums.length - 2; i++) {
    // nums[i]为最大值
    // nums[k] 初始为最小值
    // nums[j] 初始为第二大的值
    let k = nums.length - 1;
    let j = i + 1;
    while (j < k) {
      // 当两条边之和大于最长的边
      // 那么可以使第二长的边减小
      if (nums[j] + nums[k] > nums[i]) {
        // 最短的边都可以 那最短的边之前的也都可以
        res += k - j;
        j++;
      } else {
        // k-- 使 nums[k]变大
        k--;
      }
    }
  }
  return res
};