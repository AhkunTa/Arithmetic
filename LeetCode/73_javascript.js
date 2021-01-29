// 给定一个 m x n 的矩阵，如果一个元素为 0，则将其所在行和列的所有元素都设为 0。请使用原地算法。

// 示例 1:

// 输入:
// [
//   [1,1,1],
//   [1,0,1],
//   [1,1,1]
// ]
// 输出:
// [
//   [1,0,1],
//   [0,0,0],
//   [1,0,1]
// ]
// 示例 2:

// 输入:
// [
//   [0,1,2,0],
//   [3,4,5,2],
//   [1,3,1,5]
// ]
// 输出:
// [
//   [0,0,0,0],
//   [0,4,5,0],
//   [0,3,1,0]
// ]
// 进阶:

// 一个直接的解决方案是使用  O(mn) 的额外空间，但这并不是一个好的解决方案。
// 一个简单的改进方案是使用 O(m + n) 的额外空间，但这仍然不是最好的解决方案。
// 你能想出一个常数空间的解决方案吗？

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  // 为0的列和行全部置为false
  // 判断列行上是否依然为0 跳过
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] == 0 && matrix[i][j] !== false) {
        let tempi = i,
          tempj = j;
        let tepi = i,
          tepj = j;
        while (tempi--) {
          matrix[tempi][j] = matrix[tempi][j] === 0 ? 0 : false;
        }
        while (tempj--) {
          matrix[i][tempj] = matrix[i][tempj] === 0 ? 0 : false;
        }
        while (tepi < matrix.length) {
          matrix[tepi][j] = matrix[tepi][j] === 0 ? 0 : false;
          tepi++;
        }
        while (tepj < matrix[0].length) {
          matrix[i][tepj] = matrix[i][tepj] === 0 ? 0 : false;
          tepj++;
        }
      }
    }
  }
};

// 额外空间
var setZeroes = function (matrix) {
  let R = matrix.length;
  let C = matrix[0].length;
  let rows = new Set();
  let cols = new Set();
  // set 中记录所有值为 0 的 列和行
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (matrix[i][j] == 0) {
        rows.add(i);
        cols.add(j);
      }
    }
  }

  // i j 在set中 就置0
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (rows.has(i) || cols.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }
};

// 最好的方法
// https://leetcode-cn.com/problems/set-matrix-zeroes/solution/ju-zhen-zhi-ling-by-leetcode/
// 我们可以用每行和每列的第一个元素作为标记
// ，这个标记用来表示这一行或者这一列是否需要赋零。
// 这意味着对于每个节点不需要访问 M+N 个格子而是只需要对标记点的两个格子赋值。
// if cell[i][j] == 0 {
//   cell[i][0] = 0
//   cell[0][j] = 0
// }

// 遍历整个矩阵，如果 cell[i][j] == 0 就将第 i 行和第 j 列的第一个元素标记。
// 第一行和第一列的标记是相同的，都是 cell[0][0]，所以需要一个额外的变量告知第一列是否被标记，同时用 cell[0][0] 继续表示第一行的标记。
// 然后，从第二行第二列的元素开始遍历，如果第 r 行或者第 c 列被标记了，那么就将 cell[r][c] 设为 0。这里第一行和第一列的作用就相当于方法一中的 row_set 和 column_set 。
// 然后我们检查是否 cell[0][0] == 0 ，如果是则赋值第一行的元素为零。
// 然后检查第一列是否被标记，如果是则赋值第一列的元素为零。

var setZeroes = function (matrix) {
  let isCol = false;
  let R = matrix.length;
  let C = matrix[0].length;

  for (let i = 0; i < R; i++) {
    if (matrix[i][0] == 0) {
      isCol = true;
    }

    for (let j = 1; j < C; j++) {
      if (matrix[i][j] == 0) {
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }

  for (let i = 1; i < R; i++) {
    for (let j = 1; j < C; j++) {
      if (matrix[i][0] == 0 || matrix[0][j] == 0) {
        matrix[i][j] = 0;
      }
    }
  }

  if (matrix[0][0] == 0) {
    for (let j = 0; j < C; j++) {
      matrix[0][j] = 0;
    }
  }

  if (isCol) {
    for (let i = 0; i < R; i++) {
      matrix[i][0] = 0;
    }
  }
};
