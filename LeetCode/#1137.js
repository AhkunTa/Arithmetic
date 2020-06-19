// 泰波那契序列 Tn 定义如下： 

// T0 = 0, T1 = 1, T2 = 1, 且在 n >= 0 的条件下 Tn+3 = Tn + Tn+1 + Tn+2

// 给你整数 n，请返回第 n 个泰波那契数 Tn 的值。

//  

// 示例 1：

// 输入：n = 4
// 输出：4
// 解释：
// T_3 = 0 + 1 + 1 = 2
// T_4 = 1 + 1 + 2 = 4
// 示例 2：

// 输入：n = 25
// 输出：1389537
//  

// 提示：

// 0 <= n <= 37
// 答案保证是一个 32 位整数，即 answer <= 2^31 - 1。


// 空间优化
// 时间复杂度：O(N)。

// 空间复杂度：)O(1)，保存最后 3 个斐波那契数。


/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if(n == 0){
        return 0;
    }
    if(n == 1) {
        return 1;
    }
    if(n == 2) {
        return 1;
    }
    let x= 0,y=1,z=1,temp;
    for(let i=0; i< n-2; i++){
        temp = x + y+ z;
        x = y;
        y = z;
        z = temp;
    }
    return temp
};

// 动态规划