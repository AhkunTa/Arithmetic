
// 给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。

// 示例 1:

// 输入: n = 12
// 输出: 3 
// 解释: 12 = 4 + 4 + 4.
// 示例 2:

// 输入: n = 13
// 输出: 2
// 解释: 13 = 4 + 9.


/**
 * @param {number} n
 * @return {number}
 */
// 四平方定理
var numSquares = function(n) {
    while(n % 4 == 0){
        n = n/4;
    }
    if(n % 8 == 7){
        return 4;
    }
    let a = 0;
    while(a * a  <= n){
        let b = Math.round(Math.sqrt( n - a*a))
        if( (a *a + b*b) == n){
            if(a !== 0 && b !== 0){
                return 2;
            }else {
                return 1;
            }
        }
        a ++;
    }
    return 3;
};

// 动态规划

/**
 * @param {number} n
 * @return {number}
 */

// 理解状态转移方程
// 假设 n = 12
// 12 = 1 + 11;
// 12 = 4 + 8;
// 12 = 9 + 3;
// 要得出 12 的最优解 当前存在平方数时 一定最优
// 所以 1 4 9 成立 那么就有 11 8 3 继续求 11 8 3 的最优解
// 就形成了状态转移方程 dp[i] = Math.min(dp[i], dp[i - j*j ] + 1)
// dp[i] 为 n值时 最少的完全平方数
// dp[i - j*j ] + 1 为总数 + 1 为 之前 1 或 4 或9 的值
// 

var numSquares = function(n) {
    let dp = [0];
    for(let i=1; i<= n; i++) {
        dp[i] = i;
        for(let j = 1; i - j * j >=0; j++){
            dp[i] = Math.min(dp[i], dp[i - j*j ] + 1)
        }
    }
    return dp[n]
};

