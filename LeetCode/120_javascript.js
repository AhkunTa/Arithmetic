// 给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。

// 例如，给定三角形：

// [
//      [2],
//     [3,4],
//    [6,5,7],
//   [4,1,8,3]
// ]
// 自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。

// 说明：

// 如果你可以只使用 O(n) 的额外空间（n 为三角形的总行数）来解决这个问题，那么你的算法会很加分。


/**
 * @param {number[][]} triangle
 * @return {number}
 */

// 动态规划 自底层向上 
// 状态转移方程 dp[i][j] =  Math.min(dp[i+1][j], dp[i+1][j+1]) + dp[i][j];

// 重复性(分治)
// problem(i,j) = min(sub(i+1,j) , sub(i+1,j+1)) + a[i,j]
// problem(i,j)：当前行当前列（二维数组）的向下面走的路径总数
// sub(i+1,j)：下一行当前列(即向下并向左边走)的路径总数
// sub(i+1,j+1)：下一行下一列(即向下并向右边走)的路径总数
// 路径总数包括自己所在位置a[i,j]，即到达当前位置所需的步数

// 1 动态规划
var minimumTotal = function(triangle) {
    for (let i = triangle.length - 2; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]);

        }
    }
    return triangle[0][0];
};

// 以上的优化本版,优化空间复杂度 O(n)

var minimumTotal = function(triangle) {
	var dp = Array.from(new Array(triangle.length +1)).fill(0);
    for (let i = triangle.length - 2; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
             dp[j] = Math.min(dp[j],dp[j+1]) + triangle[i][j];
        }
    }
    return dp[0]
};


// 2 动态规划，自顶向下递推
// 链接：https://leetcode-cn.com/problems/triangle/solution/5chong-jie-fa-zhu-jian-you-hua-by-glowry/
// 重复子问题：某个元素(i,j)代表的最小路径和，都为(i-1,j)和(i-1, j-1)的最小路径和中的最小者，再加上本身元素的值
// 但需要判断元素在左右边界的情况，因为左右边界都只有一条路进入
// dp状态：dp[i][j] (i, j)元素代表的最小路径和
// dp方程：dp[i][j] = min(dp[i-1][j], dp[i-1][j-1]) + dp[i][j]

var minimumTotal3 = function(triangle) {
    const dp = triangle
    for (let i = 1; i < triangle.length; i++) {
        for (let j = 0; j < triangle[i].length; j++) {
            if (j === 0) {
                dp[i][j] += dp[i-1][j]
            } else if (j === triangle[i].length-1) {
                dp[i][j] += dp[i-1][j-1]
            } else {
                dp[i][j] += Math.min(dp[i-1][j], dp[i-1][j-1])
            }
        }
    }
    return Math.min(...dp[triangle.length-1])
}

var minimumTotal4 = function(triangle) {
  // 自底向上 动态规划
  for(let i=triangle.length -1; i>=0; i--){
    const line = triangle[i];
    for(let j=0 ; j<line.length; j++){
      dp[i][j] = Math.min(dp[i][j] + dp[])
    }
  }
}