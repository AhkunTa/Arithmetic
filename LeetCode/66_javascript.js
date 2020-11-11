// 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
// 最高位数字存放在数组的首位， 数组中每个元素只存储一个数字。
// 你可以假设除了整数 0 之外，这个整数不会以零开头。

// 示例 1:
// 输入: [1,2,3]
// 输出: [1,2,4]
// 解释: 输入数组表示数字 123。
// 示例 2:

// 输入: [4,3,2,1]
// 输出: [4,3,2,2]
// 解释: 输入数组表示数字 4321。


/**
 * @param {number[]} digits
 * @return {number[]}
 */

var plusOne = function(digits) { 
//判断尾部为9的情况，若为[9,9,9] 返回[0,0,0]
    for(var i=digits.length-1; i>=0; i--){
        if(digits[i] == 9){
            digits[i] = 0;
        }else{
            digits[i]++;
            return digits;
        } 
    }
    if(digits.length == 0){
        return [1];
    //题干说明没有0开头  若第一位为0 则原数组为[9,9,9,...],给头部加上1
    }else if(digits[0] == 0){
        digits.unshift(1);
        return digits;
    }
    return digits;
};


// 转化为数字 使用bigint + 1n

var plusOne = function(digits) { 
    return (BigInt(digits.join('')) + 1n).toString().split('')
};



//递归方法
var recursivePlus = function(digits, i) {
  if (digits[i] < 9) {
    digits[i] += 1
  } else {
    digits[i] = 0
    if (i === 0) {
      digits.unshift(1)
      return
    }
    recursivePlus(digits, i - 1)
  }
}

/**
 * 部分递归
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  const n = digits.length

  if (n === 0) {
    return []
  }
  recursivePlus(digits, n - 1)
  return digits
};

// 链接：https://leetcode-cn.com/problems/plus-one/solution/javascriptdi-gui-jie-fa-by-yangtoude/

