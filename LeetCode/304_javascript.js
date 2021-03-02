// 给定一个二维矩阵，计算其子矩形范围内元素的总和，该子矩阵的左上角为 (row1, col1) ，右下角为 (row2, col2) 。

// 上图子矩阵左上角 (row1, col1) = (2, 1) ，右下角(row2, col2) = (4, 3)，该子矩形内元素的总和为 8。

//

// 示例：

// 给定 matrix = [
//   [3, 0, 1, 4, 2],
//   [5, 6, 3, 2, 1],
//   [1, 2, 0, 1, 5],
//   [4, 1, 0, 1, 7],
//   [1, 0, 3, 0, 5]
// ]

// sumRegion(2, 1, 4, 3) -> 8
// sumRegion(1, 1, 2, 2) -> 11
// sumRegion(1, 2, 2, 4) -> 12
//

// 提示：

// 你可以假设矩阵不可变。
// 会多次调用 sumRegion 方法。
// 你可以假设 row1 ≤ row2 且 col1 ≤ col2 。

// 暴力法 不推荐
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  this.matrix = matrix;
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  let result = 0;
  for (let i = row1; i <= row2; i++) {
    for (let j = col1; j <= col2; j++) {
      result += this.matrix[i][j];
    }
  }
  return result;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

// 获取二位前缀和

var NumMatrix = function (matrix) {
  this.matrix = matrix;
  // 设定一个 sums 数组

  this.sums = Array.from(new Array(matrix.length), arr =>
    new Array(matrix[0].length).fill(0)
  );

  for (let i = 0; i < matrix.length; i++) {
    let sum = 0;
    for (let j = 0; j < matrix[0].length; j++) {
      sum += matrix[i][j];
      this.sums[i][j] = sum;
    }
  }

  // 获取到的 sums 数组 如下所示
  // 所有 sums 的数组元素为当前行的前面元素的总和
  //  matrix = [
  //   [3, 0, 1, 4, 2],
  //   [5, 6, 3, 2, 1],
  //   [1, 2, 0, 1, 5],
  //   [4, 1, 0, 1, 7],
  //   [1, 0, 3, 0, 5]
  // ]

  // sums = [
  // [3,3,4,8,10],
  // [5,11,14,16,17],
  // [1,3,3,4,9],
  // [4,5,5,6,13],
  // [1,1,4,4,9]
  // ]
};

NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  let result = 0;

  for (let i = row1; i <= row2; i++) {
    // 当前行的值为 sums最后一列的值即col2 减去 第一列前一列的值即col1 -1
    if (col1 == 0) {
      // 边界判断
      result += this.sums[i][col2];
    } else {
      result += this.sums[i][col2] - this.sums[i][col1 - 1];
    }
  }
  return result;
};
