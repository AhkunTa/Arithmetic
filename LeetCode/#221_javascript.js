// 在一个由 0 和 1 组成的二维矩阵内，找到只包含 1 的最大正方形，并返回其面积。

// 示例:

// 输入: 

// 1 0 1 0 0
// 1 0 1 1 1
// 1 1 1 1 1
// 1 0 0 1 0

// 输出: 4


/**
 * @param {character[][]} matrix
 * @return {number}
 */

// 动态规划
// 状态转移方程 dp[i][j]为当前点上正方形边长  dp[i+1][j+1] = Math.min(dp[i][j] , dp[i+1][j] , dp[i][j+1]) + 1;

var maximalSquare = function(matrix) {
    let row = matrix.length;
    //  测试用例 有 [] 的情况
    if(row < 1) return 0

    let col = matrix[0].length;
    let max = 0; 
    // 生成 dp数组
    let dp = Array.from(new Array(row +1),()=> new Array(col +1).fill(0));
    for(let i =0 ; i< row ; i++) {
        for(let j= 0 ; j< col; j++){
        	// 如果当前为 1 则 判断 上方 左方 和左上方的边长是否为正方形
        	// dp[i][j] 边长最大值为 上方 左方 和左上方的边长最小值 加 1
            if(matrix[i][j] == '1'){
                dp[i+1][j+1] = Math.min(dp[i][j] , dp[i+1][j] , dp[i][j+1]) + 1;
                max = Math.max(max , dp[i+1][j+1]);
            }
           
        }
    }
    return max * max
};


