// 三步问题。有个小孩正在上楼梯，楼梯有n阶台阶，小孩一次可以上1阶、2阶或3阶。实现一种方法，计算小孩有多少种上楼梯的方式。结果可能很大，你需要对结果模1000000007。

// 示例1:

//  输入：n = 3 
//  输出：4
//  说明: 有四种走法
// 示例2:

//  输入：n = 5
//  输出：13
// 提示:

// n范围在[1, 1000000]之间



/**
 * @param {number} n
 * @return {number}
 */
// 动态规划
// 状态方程 dp(n) = dp(n-3) + dp(n-2) + dp(n-1);

var waysToStep = function(n) {
    let m = 1000000007;
    let a = 1,b=2,c=4,result=0;
    if(n == 1)
        return 1;
    if(n == 2)
        return 2;
    if(n == 3)
        return 4;
    for(let i=4; i<=n; i++){
        result = (a + b + c)%m;
        a = b%m;
        b = c%m;
        c = result%m;
    }
    return result;
};

// 换种好看点的

var waysToStep = function(n) {
    let m = 1000000007;
    let arr=[0,1,2,4]
    if(n == 1)
        return arr[1];
    if(n == 2)
        return arr[2];
    if(n == 3)
        return arr[3];
    for(let i=4; i<=n; i++){
        arr[i] = arr[i-1] + arr[i-2] + arr[i-3];
    }
    return arr[n];
};