// 堆箱子。给你一堆n个箱子，箱子宽 wi、深 di、高 hi。箱子不能翻转，将箱子堆起来时，下面箱子的宽度、高度和深度必须大于上面的箱子。实现一种方法，搭出最高的一堆箱子。箱堆的高度为每个箱子高度的总和。

// 输入使用数组[wi, di, hi]表示每个箱子。

// 示例1:

//  输入：box = [[1, 1, 1], [2, 2, 2], [3, 3, 3]]
//  输出：6
// 示例2:

//  输入：box = [[1, 1, 1], [2, 3, 4], [2, 6, 7], [3, 4, 5]]
//  输出：10
// 提示:

// 箱子的数目不大于3000个。

/**
 * @param {number[][]} box
 * @return {number}
 */

// 套娃问题 同 354
var pileBox = function (box) {
  let dp = new Array(box.length).fill(1);
  box.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    } else if (a[1] !== b[1]) {
      return a[1] - b[1];
    } else if (a[2] !== b[2]) {
      return a[2] - b[2];
    }
  });

  for (let i = 0; i < box.length; i++) {
    dp[i] = box[i][2];
    for (let j = 0; j < i; j++) {
      if (
        box[i][2] > box[j][2] &&
        box[i][1] > box[j][1] &&
        box[i][0] > box[j][0]
      ) {
        dp[i] = Math.max(dp[i], dp[j] + box[i][2]);
      }
    }
  }

  return Math.max(...dp);
};
