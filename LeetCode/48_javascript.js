// 给定一个 n × n 的二维矩阵表示一个图像。

// 将图像顺时针旋转 90 度。

// 说明：

// 你必须在原地旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要使用另一个矩阵来旋转图像。

// 示例 1:

// 给定 matrix =
// [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ],

// 原地旋转输入矩阵，使其变为:
// [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3]
// ]
// 示例 2:

// 给定 matrix =
// [
//   [ 5, 1, 9,11],
//   [ 2, 4, 8,10],
//   [13, 3, 6, 7],
//   [15,14,12,16]
// ],

// 原地旋转输入矩阵，使其变为:
// [
//   [15,13, 2, 5],
//   [14, 3, 4, 1],
//   [12, 6, 8, 9],
//   [16, 7,10,11]
// ]
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var rotate = function (matrix) {
  // 以翻转代替旋转
  // 上下翻转
  let len = matrix.length;
  // 这里只需执行len的一半
  for (let i = 0; i < len / 2; i++) {
    for (let j = 0; j < len; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[len - i - 1][j];
      matrix[len - i - 1][j] = temp;
    }
  }
  // 对角翻转
  for (let i = 0; i < len; i++) {
    // 注意 j=i
    for (let j = i; j < len; j++) {
      // 除了设temp值 也可以 解构赋值
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
};

var rotate = function (matrix) {
  let len = matrix.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    // 注意 j=i
    for (let j = 0; j < Math.floor((len + 1) / 2); j++) {
      // 除了设temp值 也可以 解构赋值
      let temp = matrix[i][j];
      matrix[i][j] = matrix[len - j - 1][i];
      // 根据等式 上一个  matrix[len - j - 1][i] 的地址再指向  matrix[len - i - 1][len - j - 1];
      matrix[len - j - 1][i] = matrix[len - i - 1][len - j - 1];
      // 根据等式 上上个再次指向
      matrix[len - i - 1][len - j - 1] = matrix[j][len - i - 1];
      // 最后指向 temp  旋转四个位置 一共要进行四次变换
      matrix[j][len - i - 1] = temp;
    }
  }
};

var rotate = function (matrix) {
  // 找规律
  // 旋转过后的点的位置 i,j = j,length-i-1;
  // 例如 0 0 旋转前的位置 为 2 0
  // 0 1  旋转前的位置 2 1

  // 拷贝原数组
  // 但不满足再原数组上反转
  let copy = Array.from(
    new Array(matrix.length),
    arr => new Array(matrix.length)
  );

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      copy[i][j] = matrix[i][j];
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      matrix[i][j] = copy[matrix.length - j - 1][i];
    }
  }
};
