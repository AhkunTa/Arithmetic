// 给定一个正整数 n，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。

// 示例:

// 输入: 3
// 输出:
// [
//  [ 1, 2, 3 ],
//  [ 8, 9, 4 ],
//  [ 7, 6, 5 ]
// ]

/**
 * @param {number} n
 * @return {number[][]}
 */

// 题目 同 54
var generateMatrix = function (n) {
  let res = Array.from(new Array(n), arr => new Array(n));

  let left = 0,
    right = n - 1,
    top = 0,
    bottom = n - 1;

  let num = 1;
  while (true) {
    for (let i = left; i <= right; i++) {
      res[top][i] = num++;
    }
    if (++top > bottom) break;

    for (let j = top; j <= bottom; j++) {
      res[j][right] = num++;
    }
    if (--right < left) break;

    for (let k = right; k >= left; k--) {
      res[bottom][k] = num++;
    }
    if (--bottom < top) break;
    for (let h = bottom; h >= top; h--) {
      res[h][left] = num++;
    }
    if (++left > right) break;
  }

  return res;
};
