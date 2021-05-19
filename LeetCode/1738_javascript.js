// 给你一个二维矩阵 matrix 和一个整数 k ，矩阵大小为 m x n 由非负整数组成。

// 矩阵中坐标 (a, b) 的 值 可由对所有满足 0 <= i <= a < m 且 0 <= j <= b < n 的元素 matrix[i][j]（下标从 0 开始计数）执行异或运算得到。

// 请你找出 matrix 的所有坐标中第 k 大的值（k 的值从 1 开始计数）。

//

// 示例 1：

// 输入：matrix = [[5,2],[1,6]], k = 1
// 输出：7
// 解释：坐标 (0,1) 的值是 5 XOR 2 = 7 ，为最大的值。
// 示例 2：

// 输入：matrix = [[5,2],[1,6]], k = 2
// 输出：5
// 解释：坐标 (0,0) 的值是 5 = 5 ，为第 2 大的值。
// 示例 3：

// 输入：matrix = [[5,2],[1,6]], k = 3
// 输出：4
// 解释：坐标 (1,0) 的值是 5 XOR 1 = 4 ，为第 3 大的值。
// 示例 4：

// 输入：matrix = [[5,2],[1,6]], k = 4
// 输出：0
// 解释：坐标 (1,1) 的值是 5 XOR 2 XOR 1 XOR 6 = 0 ，为第 4 大的值。
//

// 提示：

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 1000
// 0 <= matrix[i][j] <= 106
// 1 <= k <= m * n

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
// matrix
// [
//   [5, 2],
//   [1, 6],
// ];
// pre
// [
//   [0, 0, 0],
//   [0, 5, 7],
//   [0, 4, 0],
// ];

var kthLargestValue = function (matrix, k) {
  let pre = Array.from(new Array(matrix.length + 1), arr =>
    new Array(matrix[0].length + 1).fill(0)
  );
  let res = [];
  for (let i = 1; i <= matrix.length; i++) {
    for (let j = 1; j <= matrix[0].length; j++) {
      pre[i][j] =
        pre[i - 1][j - 1] ^
        pre[i][j - 1] ^
        pre[i - 1][j] ^
        matrix[i - 1][j - 1]; // 注意此时还要异或 matrix[i-1][j-1]
      res.push(pre[i][j]);
    }
  }

  res.sort((a, b) => b - a);
  return res[k - 1];
};
