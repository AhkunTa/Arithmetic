// 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。

// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。

// 现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？

// 网格中的障碍物和空位置分别用 1 和 0 来表示。

// 说明：m 和 n 的值均不超过 100。

// 示例 1:

// 输入:
// [
//   [0,0,0],
//   [0,1,0],
//   [0,0,0]
// ]
// 输出: 2
// 解释:
// 3x3 网格的正中间有一个障碍物。
// 从左上角到右下角一共有 2 条不同的路径：
// 1. 向右 -> 向右 -> 向下 -> 向下
// 2. 向下 -> 向下 -> 向右 -> 向右

// 1 动态规划
// 状态转移方程 同 #62题不同的是当
// obstacleGrid[i][j] == 1 即有障碍时 dp[i][j] = 0 即不通过
// dp[i][j] = dp[i-1][j] + dp[i][j-1];

var uniquePathsWithObstacles = function (obstacleGrid) {
  let row = obstacleGrid.length;
  let column = obstacleGrid[0].length;
  let dp = Array.from(new Array(row), () => new Array(column).fill(0));
  // 放起点 和放终点的情况
  if (obstacleGrid[0][0] == 1) return 0;
  if (obstacleGrid[row - 1][column - 1] == 1) return 0;
  // 当在第一列时，只要中间存在障碍，之后列上的都是 0
  for (let i = 0; i < column; i++) {
    if (obstacleGrid[0][i] == 1) {
      dp[0][i] = 0;
      break;
    } else {
      dp[0][i] = 1;
    }
  }
  // 第一行同第一列类似
  for (let j = 0; j < row; j++) {
    if (obstacleGrid[j][0] == 1) {
      dp[j][0] = 0;
      break;
    } else {
      dp[j][0] = 1;
    }
  }
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < column; j++) {
      if (obstacleGrid[i][j]) {
        dp[i][j] = 0;
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }
  return dp[row - 1][column - 1];
};

