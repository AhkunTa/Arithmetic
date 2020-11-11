// 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
// 问总共有多少条不同的路径？



// 例如，上图是一个7 x 3 的网格。有多少可能的路径？

// 示例 1:

// 输入: m = 3, n = 2
// 输出: 3
// 解释:
// 从左上角开始，总共有 3 条路径可以到达右下角。
// 1. 向右 -> 向右 -> 向下
// 2. 向右 -> 向下 -> 向右
// 3. 向下 -> 向右 -> 向右
// 示例 2:

// 输入: m = 7, n = 3
// 输出: 28

// 图见  https://leetcode-cn.com/problems/unique-paths/


//  1 动态规划
//  就是一个 杨辉三角 
//  状态转移方程 dp[i][j]=dp[i-1][j]+dp[i][j-1];

var uniquePaths = function(m, n) {
    let dp = Array.from(new Array(m),()=>new Array(n).fill(1));
    for(let i=1; i<m; i++){
        for(let j=1; j<n; j++){
            dp[i][j] = dp[i-1][j] + dp[i][j-1]
        }
    }
    return dp[m-1][n-1]
};

// 链接：https://leetcode-cn.com/problems/unique-paths/solution/62-bu-tong-lu-jing-by-alexer-660/
// 2 数学方法排列组合
var uniquePaths = function(m, n) {
    var N = n+m-2;
    var k = m-1;
    var result = 1;
    for(var i = 1;i<= k;i++){
        result = result * (N-k+i)/i;
    }
    return result;
};


