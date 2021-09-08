// 假设 力扣（LeetCode）即将开始 IPO 。为了以更高的价格将股票卖给风险投资公司，力扣 希望在 IPO 之前开展一些项目以增加其资本。 由于资源有限，它只能在 IPO 之前完成最多 k 个不同的项目。帮助 力扣 设计完成最多 k 个不同项目后得到最大总资本的方式。

// 给你 n 个项目。对于每个项目 i ，它都有一个纯利润 profits[i] ，和启动该项目需要的最小资本 capital[i] 。

// 最初，你的资本为 w 。当你完成一个项目时，你将获得纯利润，且利润将被添加到你的总资本中。

// 总而言之，从给定项目中选择 最多 k 个不同项目的列表，以 最大化最终资本 ，并输出最终可获得的最多资本。

// 答案保证在 32 位有符号整数范围内。

//

// 示例 1：

// 输入：k = 2, w = 0, profits = [1,2,3], capital = [0,1,1]
// 输出：4
// 解释：
// 由于你的初始资本为 0，你仅可以从 0 号项目开始。
// 在完成后，你将获得 1 的利润，你的总资本将变为 1。
// 此时你可以选择开始 1 号或 2 号项目。
// 由于你最多可以选择两个项目，所以你需要完成 2 号项目以获得最大的资本。
// 因此，输出最后最大化的资本，为 0 + 1 + 3 = 4。
// 示例 2：

// 输入：k = 3, w = 0, profits = [1,2,3], capital = [0,1,2]
// 输出：6
//

// 提示：

// 1 <= k <= 105
// 0 <= w <= 109
// n == profits.length
// n == capital.length
// 1 <= n <= 105
// 0 <= profits[i] <= 104
// 0 <= capital[i] <= 109

/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */

// 暴力遍历 超时 32/35 一个一万数据的直接超时

var findMaximizedCapital = function (k, w, profits, capital) {
  if (k > capital.length) {
    k = capital.length;
  }
  while (k--) {
    let maxProfit = 0;
    let index = -1;
    for (let j = 0; j < capital.length; j++) {
      // 资本要大于初始资本
      if (w >= capital[j]) {
        // 获取能够获取的最大利润 记录索引
        if (maxProfit < profits[j]) {
          maxProfit = profits[j];
          index = j;
        }
      }
    }
    w += maxProfit;
    // 删除已经使用过的项目
    profits.splice(index, 1);
    capital.splice(index, 1);
  }
  return w;
};

// 暴力法 优化剪枝
// 面向测试用例编程
// https://leetcode-cn.com/problems/ipo/solution/javascripthen-hao-li-jie-de-xie-fa-by-mr-6kik/

var findMaximizedCapital = function (k, w, profits, capital) {
  if (k > capital.length) {
    k = capital.length;
  }
  // 按照资本排序
  let map = Array.from(new Array(capital.length), arr => new Array(2));

  for (let i = 0; i < capital.length; i++) {
    map[i][0] = capital[i];
    map[i][1] = profits[i];
  }
  // 以利润进行倒序
  map.sort((a, b) => {
    return b[1] - a[1];
  });
  // 例： profits = [1,2,3], capital = [0,1,2]
  // 排完后的map = [[2,3],[1,2],[0,1]]

  // 获取最大所需资本 方便之后剪枝操作
  let max = Math.max(...capital);
  while (k--) {
    // w 总最大资本 大于 最大所需资本 那就表示所有的项目都可以进行 直接遍历map取其顶部

    /* 和上面相比多了的剪枝操作 */
    if (w >= max) {
      for (let i = 0; i <= k; i++) {
        w += map[i][1];
      }
      return w;
    } else {
      // 否则就只能遍历map 获取当前资本可以投资的最大项目的索引
      let index = map.findIndex(ele => ele[0] >= w);
      // 找不到直接返回

      /* 和上面相比多了的剪枝操作 */
      if (index == -1) return w;
      w += map[index][1];
      map.splice(index, 1);
    }
  }
  return w;
};

// 优先队列 js没有优先队列要手动实现一个
// 待续 下次一定
