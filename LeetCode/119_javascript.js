// 给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。

// 在杨辉三角中，每个数是它左上方和右上方的数的和。

// 示例:

// 输入: 3
// 输出: [1,3,3,1]
// 进阶：

// 你可以优化你的算法到 O(k) 空间复杂度吗？

// 1
// 1  1
// 1  2  1
// 1  3  3  1
// 1  4  6  4  1

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
//  正常方法
var getRow = function (rowIndex) {
  let res = [];
  // 先构建三角形
  for (let i = 0; i <= rowIndex; i++) {
    res.push(new Array(i + 1).fill(1));
  }

  for (let i = 2; i <= rowIndex; i++) {
    for (let j = 1; j < res[i].length - 1; j++) {
      // 下一行的值等于 上一行的值相加
      res[i][j] = res[i - 1][j] + res[i - 1][j - 1];
    }
  }
  return res[rowIndex];
};

var getRow = function (rowIndex) {
  let res = [];

  for (let i = 0; i <= rowIndex; i++) {
    // 此处需要从后遍历
    res[i] = 1;
    for (let j = i; j > 0; j--) {
      res[j] = res[j - 1] + res[j];
    }
  }
  return res;
};
