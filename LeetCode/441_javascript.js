// 你总共有 n 枚硬币，你需要将它们摆成一个阶梯形状，第 k 行就必须正好有 k 枚硬币。

// 给定一个数字 n，找出可形成完整阶梯行的总行数。

// n 是一个非负整数，并且在32位有符号整型的范围内。

// 示例 1:

// n = 5

// 硬币可排列成以下几行:
// ¤
// ¤ ¤
// ¤ ¤

// 因为第三行不完整，所以返回2.
// 示例 2:

// n = 8

// 硬币可排列成以下几行:
// ¤
// ¤ ¤
// ¤ ¤ ¤
// ¤ ¤

// 因为第四行不完整，所以返回3.

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let num = 0;
  for (let i = 0; i <= n; i++) {
    num += i;
    if (num == n) {
      return i;
    } else if (num > n) {
      return i - 1;
    }
  }
};

// 二分
// 查找最多能分的行数
var arrangeCoins = function (n) {
  let left = 1;
  let right = n;
  while (left <= right) {
    let middle = Math.floor(left + (right - left) / 2);
    // 获取 1 到middle 的和
    let sum = ((middle + 1) * middle) / 2;
    if (sum < n) {
      left = middle + 1;
    } else if (sum > n) {
      right = middle - 1;
    } else {
      return middle;
    }
  }
  return right;
};
