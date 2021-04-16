// 给你一个 n x n 的 方形 整数数组 matrix ，请你找出并返回通过 matrix 的下降路径 的 最小和 。

// 下降路径 可以从第一行中的任何元素开始，并从每一行中选择一个元素。在下一行选择的元素和当前行所选元素最多相隔一列（即位于正下方或者沿对角线向左或者向右的第一个元素）。具体来说，位置 (row, col) 的下一个元素应当是 (row + 1, col - 1)、(row + 1, col) 或者 (row + 1, col + 1) 。

//

// 示例 1：

// 输入：matrix = [[2,1,3],[6,5,4],[7,8,9]]
// 输出：13
// 解释：下面是两条和最小的下降路径，用加粗标注：
// [[2,1,3],      [[2,1,3],
//  [6,5,4],       [6,5,4],
//  [7,8,9]]       [7,8,9]]
// 示例 2：

// 输入：matrix = [[-19,57],[-40,-5]]
// 输出：-59
// 解释：下面是一条和最小的下降路径，用加粗标注：
// [[-19,57],
//  [-40,-5]]
// 示例 3：

// 输入：matrix = [[-48]]
// 输出：-48
//

// 提示：

// n == matrix.length
// n == matrix[i].length
// 1 <= n <= 100
// -100 <= matrix[i][j] <= 100
/**
 * @param {number[][]} matrix
 * @return {number}
 */

// 设dp[i][j] 为 到i j 时最小下降路径
var minFallingPathSum = function (matrix) {
  let len = matrix.length;
  let dp = Array.from(new Array(len + 1), arr => new Array(len).fill(0));
  if (len == 1) return matrix[0][0];
  for (let i = 1; i <= len; i++) {
    for (let j = 0; j < len; j++) {
      if (j - 1 < 0) {
        // 边界情况
        dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j + 1]) + matrix[i - 1][j];
      } else if (j + 2 > len) {
        // 边界情况
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j]) + matrix[i - 1][j];
      } else {
        dp[i][j] =
          Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i - 1][j + 1]) +
          matrix[i - 1][j];
      }
    }
  }
  return Math.min(...dp[len]);
};
