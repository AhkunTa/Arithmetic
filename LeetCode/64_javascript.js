// 给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

// 说明：每次只能向下或者向右移动一步。

// 示例:

// 输入:
// [
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]
// 输出: 7
// 解释: 因为路径 1→3→1→1→1 的总和最小。

// 1 动态规划

/**
 * @param {number[][]} grid
 * @return {number}
 */

var minPathSum = function (grid) {
  let row = grid.length;
  let column = grid[0].length;
  let sum = 0;
  let dp = Array.from(new Array(row), () => new Array(column).fill(0));
  dp[0][0] = grid[0][0];
  for (let i = 1; i < row; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }

  for (let i = 1; i < column; i++) {
    dp[0][i] = dp[0][i - 1] + grid[0][i];
  }

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < column; j++) {
      dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[row - 1][column - 1];
};