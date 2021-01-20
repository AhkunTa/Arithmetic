// 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

// 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。

// 此外，你可以假设该网格的四条边均被水包围。

//

// 示例 1：

// 输入：grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// 输出：1
// 示例 2：

// 输入：grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// 输出：3
//

// 提示：

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] 的值为 '0' 或 '1'
/**
 * @param {character[][]} grid
 * @return {number}
 */

// DFS
var numIslands = function (grid) {
  let res = 0;

  let dfs = (i, j) => {
    if (
      i < 0 ||
      i > grid.length - 1 ||
      j < 0 ||
      j > grid[0].length - 1 ||
      // 判断 为 2 或者 0 跳出循环避免重复判断
      grid[i][j] != "1"
    ) {
      return;
    }
    grid[i][j] = "2";
    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  };
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      // 遍历数组当前为1的时候 dfs循环将所有此岛上下左右的岛感染 将岛值 置为2
      // 一旦存在一个 1 则所有其相邻岛屿都为 2 包括自己
      if (grid[i][j] == "1") {
        dfs(i, j);
        res++;
      }
    }
  }
  return res;
};

// BFS
var numIslands = function (grid) {
  let res = 0;
  let tempArray = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      // 遍历数组当前为1的时候 dfs循环将所有此岛上下左右的岛感染 将岛值 置为2
      // 一旦存在一个 1 则所有其相邻岛屿都为 2 包括自己
      if (grid[i][j] == "1") {
        grid[i][j] = "2";
        tempArray.push([i, j]);
        while (tempArray.length) {
          let temp = tempArray.shift();
          let direction = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
          ];
          for (let [a, b] of direction) {
            let i = temp[0] + a;
            let j = temp[1] + b;
            if (
              i < 0 ||
              i > grid.length - 1 ||
              j < 0 ||
              j > grid[0].length - 1 ||
              // 判断 为 2 或者 0 跳出循环避免重复判断
              grid[i][j] != "1"
            ) {
              continue;
            }
            grid[i][j] = "2";
            tempArray.push([i, j]);
          }
        }
        res++;
      }
    }
  }
  return res;
};
