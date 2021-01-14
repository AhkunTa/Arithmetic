// n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。

// 给你一个整数 n ，返回 n 皇后问题 不同的解决方案的数量。

//

// 示例 1：

// 输入：n = 4
// 输出：2
// 解释：如上图所示，4 皇后问题存在两个不同的解法。
// 示例 2：

// 输入：n = 1
// 输出：1
//

// 提示：

// 1 <= n <= 9
// 皇后彼此不能相互攻击，也就是说：任何两个皇后都不能处于同一条横行、纵行或斜线上。

/**
 * @param {number} n
 * @return {number}
 */
// 和 51题一样
var totalNQueens = function (n) {
  let col = {};
  let bias = {};
  let bias2 = {};

  let res = 0;
  let dfs = i => {
    if (i == n) {
      res++;
    }
    for (let j = 0; j < n; j++) {
      if (!col[j] && !bias[i + j] && !bias2[i - j]) {
        col[j] = true;
        bias[i + j] = true;
        bias2[i - j] = true;
        dfs(i + 1);
        col[j] = false;
        bias[i + j] = false;
        bias2[i - j] = false;
      }
    }
  };
  dfs(0);
  return res;
};
