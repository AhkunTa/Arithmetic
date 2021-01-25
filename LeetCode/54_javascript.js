// 给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。

// 示例 1:

// 输入:
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]
// 输出: [1,2,3,6,9,8,7,4,5]
// 示例 2:

// 输入:
// [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9,10,11,12]
// ]
// 输出: [1,2,3,4,8,12,11,10,9,5,6,7]

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let up = 0,
    left = 0,
    right = matrix[0].length - 1,
    bottom = matrix.length - 1;
  let res = [];
  // 依次循环
  while (true) {
    for (let i = left; i <= right; i++) {
      res.push(matrix[up][i]);
    }
    if (++up > bottom) break; // 设定边界
    for (let j = up; j <= bottom; j++) {
      res.push(matrix[j][right]);
    }
    if (--right < left) break;
    for (let k = right; k >= left; k--) {
      res.push(matrix[bottom][k]);
    }
    if (--bottom < up) break;
    for (let h = bottom; h >= up; h--) {
      res.push(matrix[h][left]);
    }
    if (++left > right) break;
  }
  return res;
};
// https://leetcode-cn.com/problems/spiral-matrix/solution/cxiang-xi-ti-jie-by-youlookdeliciousc-3/
