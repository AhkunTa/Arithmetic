// 给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。

//  

// 示例 1:

// 输入: coins = [1, 2, 5], amount = 11
// 输出: 3 
// 解释: 11 = 5 + 5 + 1
// 示例 2:

// 输入: coins = [2], amount = 3
// 输出: -1
 

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

// 动态规划

// dp[i] 为i总金额下 最小的硬币数量

// coins = [1, 2, 5], amount = 11

// 那么 dp[11] = dp[10 + 1]  = dp[10] + 1  = dp[11 -1] + 1 
//             =  dp[9 + 2]  = dp[9] + 1 = dp[11 -2] + 1
//             = dp[6 + 5] = dp[6] + 1 = dp[11 - 5] + 1




var coinChange = function(coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity)
    dp[0] = 0

    for(let i =1; i<=amount; i++){
        for(let j=0; j < coins.length; j++){
            if( i >= coins[j] ){
                dp[i] = Math.min( dp[i], dp[i - coins[j]] + 1)
            }
        }
    }
    return dp[amount] == Infinity ? -1 : dp[amount] 
};
