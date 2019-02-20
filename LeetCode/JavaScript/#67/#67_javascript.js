// 给定两个二进制字符串，返回他们的和（用二进制表示）。
// 输入为非空字符串且只包含数字 1 和 0。

// 示例 1:

// 输入: a = "11", b = "1"
// 输出: "100"
// 示例 2:

// 输入: a = "1010", b = "1011"
// 输出: "10101"



/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

// 1 
var addBinary = function(a, b) {
    let isUp = 0; //是否进位 进位为1 加在下一次循环上
    let i = a.length-1, j= b.length-1;
    let sum = ''// 返回的字符串
    // 从后往前计算将ab 字符串最后两位相加 判断是否进位 有3种情况 
    // num = 0 num = 1 不进位 则 isUp = 0 
    // num = 2 num = 3 进位  isUp = 1   
    while(i>-1 || j>-1){
    //	计算一位的 值 
        let num = (a[i] || 0)*1 + (b[j] || 0)*1 + isUp;
        sum = num%2 + sum;
        isUp = Math.floor(num/2);
        i--;
        j--;
    }
    // 判断第一位是否进位 若进位则在字符串前加1
    let returnNum = isUp == 1 ? '1' + sum : sum;
    return returnNum
};

// 2 暴力解法 直接用parseInt做 不过在数据量过大时会报错 通不过编译
var addBinary = function(a, b) {
    let A = parseInt(a,2);
    let B = parseInt(b,2);
    return (A + B).toString(2);
}

// 3 别人的代码，更加简洁。

var addBinary = function(a, b) {
    let res = ''
    let c = 0
    a = a.split('')
    b = b.split('')
    while (a.length || b.length || c) {
        c = ~~a.pop() + ~~b.pop() +c
        res = c % 2 + res
        c = c > 1
    }
    return res
}
    
