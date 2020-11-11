// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

// 示例 1:

// 输入: 123
// 输出: 321
//  示例 2:

// 输入: -123
// 输出: -321
// 示例 3:

// 输入: 120
// 输出: 21


/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    var y = Number((Math.abs(x) + '').split('').reverse().join(''))
    
    if(y > Math.pow(2,31) -1){
        return 0
    }
    if(x >=0){
        return  y  
    }else {
        return -y
    }
};


/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let result = 0;
    while(x !== 0) {
        result = result * 10 + x % 10;
        x = (x / 10) | 0;
    }
    return (result | 0) === result ? result : 0;
};

// https://leetcode-cn.com/problems/reverse-integer/solution/wei-yun-suan-ji-jian-jie-fa-by-ijzqardmbd/