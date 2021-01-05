// 假设有一个很长的花坛，一部分地块种植了花，另一部分却没有。可是，花不能种植在相邻的地块上，它们会争夺水源，两者都会死去。

// 给你一个整数数组  flowerbed 表示花坛，由若干 0 和 1 组成，其中 0 表示没种植花，1 表示种植了花。另有一个数 n ，能否在不打破种植规则的情况下种入 n 朵花？能则返回 true ，不能则返回 false。

//

// 示例 1：

// 输入：flowerbed = [1,0,0,0,1], n = 1
// 输出：true
// 示例 2：

// 输入：flowerbed = [1,0,0,0,1], n = 2
// 输出：false
//

// 提示：

// 1 <= flowerbed.length <= 2 * 104
// flowerbed[i] 为 0 或 1
// flowerbed 中不存在相邻的两朵花
// 0 <= n <= flowerbed.length

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  // 极值判断 [0,1]
  if (flowerbed[0] == 0 && !flowerbed[1]) {
    n--;
    flowerbed[0] = 1;
  }

  let length = flowerbed.length;
  // 极值判断 [1,0]
  if (flowerbed[length - 1] == 0 && !flowerbed[length - 2]) {
    n--;
    flowerbed[length - 1] = 1;
  }

  for (let i = 1; i < length - 1; i++) {
    // 前一位 和后一位都为0 并且当前不为1
    if (!flowerbed[i - 1] && !flowerbed[i + 1] && !flowerbed[i]) {
      flowerbed[i] = 1;
      n--;
    }
  }
  return n <= 0 ? true : false;
};

// 优化
// 左右两边添加0 避免极值判断
var canPlaceFlowers = function (flowerbed, n) {
  flowerbed.push(0);
  flowerbed.unshift(0);
  let length = flowerbed.length;

  for (let i = 1; i < length - 1; i++) {
    // 前一位 和后一位都为0 并且当前不为1
    if (!flowerbed[i - 1] && !flowerbed[i + 1] && !flowerbed[i]) {
      flowerbed[i] = 1;
      n--;
    }
  }
  return n <= 0 ? true : false;
};
