// 给定不同面额的硬币和一个总金额。写出函数来计算可以凑成总金额的硬币组合数。假设每一种面额的硬币有无限个。

//

// 示例 1:

// 输入: amount = 5, coins = [1, 2, 5]
// 输出: 4
// 解释: 有四种方式可以凑成总金额:
// 5=5
// 5=2+2+1
// 5=2+1+1+1
// 5=1+1+1+1+1
// 示例 2:

// 输入: amount = 3, coins = [2]
// 输出: 0
// 解释: 只用面额2的硬币不能凑成总金额3。
// 示例 3:

// 输入: amount = 10, coins = [10]
// 输出: 1
//

// 注意:

// 你可以假设：

// 0 <= amount (总金额) <= 5000
// 1 <= coin (硬币面额) <= 5000
// 硬币种类不超过 500 种
// 结果符合 32 位符号整数

// 1 dfs 时复杂度巨高 需剪枝操作
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  // map增加剪枝操作
  let map = Array.from(new Array(coins.length), arr =>
    new Array(amount + 1).fill(-1)
  );
  let dfs = (i, amount) => {
    if (amount == 0) {
      return 1;
    }
    if (amount < 0 || i == coins.length) {
      return 0;
    }
    // 剪枝 当值已经求过时 直接获取缓存值
    if (map[i][amount] !== -1) {
      // map[i][amount] 所以上面map 的amount需 +1
      return map[i][amount];
    }

    let res = 0;
    // 不选取当前 跳过
    res += dfs(i + 1, amount);
    // 选取当前 价格减去当前的硬币
    res += dfs(i, amount - coins[i]);

    return (map[i][amount] = res);
  };

  return dfs(0, amount);
};
//  如下图所示
//                               1
//           1                   3                  5
//     1     3    5        1     3     5      1     3    5
//   1 3 5 1 3 5 1 3 5   1 3 5 1 3 5 1 3 5  1 3 5 1 3 5 1 3 5
// ...

// 中间存在大量的重复运算需要剪枝操作 如 1 1 3   1 3 1其实是同一个

// 2. 动态规划

// 状态转移方程 设dp[i][j] 为前i个硬币可以组成 j面额的总组合数
// dp[i]][j] = dp[i-1][j] + dp[i][j-coins[i-1]]
//            前i-1个硬币组成的j面额 + 前i枚硬币组成的 就差coins[i-1]的面额
//  一种是没有用第i-1个硬币就凑齐了，一种是前面已经凑到了j-coins[i-1]，现在就差第i-1个硬币了。
// 注意组合数和排列数不一样  排列数包含排列顺序 会比组合数大
// 题解推荐 https://leetcode-cn.com/problems/coin-change-2/solution/ling-qian-dui-huan-iihe-pa-lou-ti-wen-ti-dao-di-yo/
var change = function (amount, coins) {
  let dp = Array.from(new Array(coins.length + 1), arr =>
    new Array(amount + 1).fill(0)
  );

  for (let i = 0; i < coins.length + 1; i++) {
    // 所有组成 0这个组合只有 1种;
    dp[i][0] = 1;
  }

  for (let i = 1; i < coins.length + 1; i++) {
    for (let j = 1; j < amount + 1; j++) {
      if (j >= coins[i - 1]) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i - 1]];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  return dp[coins.length][amount];
};
