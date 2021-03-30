// 给定一个整数数组 prices，其中第 i 个元素代表了第 i 天的股票价格 ；非负整数 fee 代表了交易股票的手续费用。

// 你可以无限次地完成交易，但是你每笔交易都需要付手续费。如果你已经购买了一个股票，在卖出它之前你就不能再继续购买股票了。

// 返回获得利润的最大值。

// 注意：这里的一笔交易指买入持有并卖出股票的整个过程，每笔交易你只需要为支付一次手续费。

// 示例 1:

// 输入: prices = [1, 3, 2, 8, 4, 9], fee = 2
// 输出: 8
// 解释: 能够达到的最大利润:
// 在此处买入 prices[0] = 1
// 在此处卖出 prices[3] = 8
// 在此处买入 prices[4] = 4
// 在此处卖出 prices[5] = 9
// 总利润: ((8 - 1) - 2) + ((9 - 4) - 2) = 8.
// 注意:

// 0 < prices.length <= 50000.
// 0 < prices[i] < 50000.
// 0 <= fee < 50000.

// 状态转移方程
// dp1[i] = Math.max(dp1[i-1] , dp2[i-1] + prices[i] - fee)
// dp2[i] = Math.max(dp2[i - 1], dp1[i - 1] - prices[i]);

// 相似题目 309  121 122 123 等
var maxProfit = function (prices, fee) {
  // dp1 表示当天卖出股票的最大值
  let dp1 = new Array(prices.length).fill(0);
  // dp2 表示当天持有股票的最大值
  let dp2 = new Array(prices.length).fill(0);
  dp1[0] = 0;
  // 注意 第一天持有
  dp2[0] = -prices[0];
  for (let i = 1; i < prices.length; i++) {
    dp1[i] = Math.max(dp1[i - 1], dp2[i - 1] + prices[i] - fee);
    // 对于今天卖出，可以从两个状态转移过来：1. 昨天卖出；2. 昨天持有，今天卖出。两者取较大值。
    dp2[i] = Math.max(dp2[i - 1], dp1[i - 1] - prices[i]);
    // 对于今天持有，可以从两个状态转移过来：1. 昨天也持有；2. 昨天不持有，今天买入。两者取较大值。
  }
  // 对所有的 状态 都有 当天卖出获得的总利润 大于 当天持有总利润
  return dp1[prices.length - 1];
};
