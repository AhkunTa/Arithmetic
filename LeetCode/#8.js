
// 请你来实现一个 atoi 函数，使其能将字符串转换成整数。

// 首先，该函数会根据需要丢弃无用的开头空格字符，直到寻找到第一个非空格的字符为止。接下来的转化规则如下：

// 如果第一个非空字符为正或者负号时，则将该符号与之后面尽可能多的连续数字字符组合起来，形成一个有符号整数。
// 假如第一个非空字符是数字，则直接将其与之后连续的数字字符组合起来，形成一个整数。
// 该字符串在有效的整数部分之后也可能会存在多余的字符，那么这些字符可以被忽略，它们对函数不应该造成影响。
// 注意：假如该字符串中的第一个非空格字符不是一个有效整数字符、字符串为空或字符串仅包含空白字符时，则你的函数不需要进行转换，即无法进行有效转换。

// 在任何情况下，若函数不能进行有效的转换时，请返回 0 。

// 提示：

// 本题中的空白字符只包括空格字符 ' ' 。
// 假设我们的环境只能存储 32 位大小的有符号整数，那么其数值范围为 [−231,  231 − 1]。如果数值超过这个范围，请返回  INT_MAX (231 − 1) 或 INT_MIN (−231) 。
//  

// 示例 1:

// 输入: "42"
// 输出: 42
// 示例 2:

// 输入: "   -42"
// 输出: -42
// 解释: 第一个非空白字符为 '-', 它是一个负号。
//      我们尽可能将负号与后面所有连续出现的数字组合起来，最后得到 -42 。
// 示例 3:

// 输入: "4193 with words"
// 输出: 4193
// 解释: 转换截止于数字 '3' ，因为它的下一个字符不为数字。
// 示例 4:

// 输入: "words and 987"
// 输出: 0
// 解释: 第一个非空字符是 'w', 但它不是数字或正、负号。
//      因此无法执行有效的转换。
// 示例 5:

// 输入: "-91283472332"
// 输出: -2147483648
// 解释: 数字 "-91283472332" 超过 32 位有符号整数范围。 
//      因此返回 INT_MIN (−231) 。


/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  // 自动机类
  class Automaton{
    constructor() {
      // 执行阶段，默认处于开始执行阶段
      this.state = 'start';
      // 正负符号，默认是正数
      this.sign = 1;
      // 数值，默认是0
      this.answer = 0;
      /*
      关键点：
      状态和执行阶段的对应表
      含义如下：
      [执行阶段, [空格, 正负, 数值, 其他]]
      */
      this.map = new Map([
        ['start', ['start', 'signed', 'in_number', 'end']],
        ['signed', ['end', 'end', 'in_number', 'end']],
        ['in_number', ['end', 'end', 'in_number', 'end']],
        ['end', ['end', 'end', 'end', 'end']]
      ])
    }

    // 获取状态的索引
    getIndex(char) {
      if (char === ' ') {
        // 空格判断
        return 0;
      } else if (char === '-' || char === '+') {
        // 正负判断
        return 1;
      } else if (typeof Number(char) === 'number' && !isNaN(char)) {
        // 数值判断
        return 2;
      } else {
        // 其他情况
        return 3;
      }
    }

    /*
    关键点：
    字符转换执行函数
    */
    get(char) {
      /*
      易错点：
      每次传入字符时，都要变更自动机的执行阶段
      */
      this.state = this.map.get(this.state)[this.getIndex(char)];

      if(this.state === 'in_number') {
        /*
        小技巧：
        在JS中，对字符串类型进行减法操作，可以将得到一个数值型（Number）的值

        易错点：
        本处需要利用括号来提高四则运算的优先级
        */
        this.answer = this.answer * 10 + (char - 0);

        /*
        易错点：
        在进行负数比较时，需要将INT_MIN变为正数
        */
        this.answer = this.sign === 1 ? Math.min(this.answer, Math.pow(2, 31) - 1) : Math.min(this.answer, -Math.pow(-2, 31));
      } else if (this.state === 'signed') {
        /*
        优化点：
        对于一个整数来说，非正即负，
        所以正负号的判断，只需要一次。
        故，可以降低其判断的优先级
        */
        this.sign = char === '+' ? 1 : -1;
      }
    }
  }

  // 生成自动机实例
  let automaton = new Automaton();

  // 遍历每个字符
  for(let char of str) {
    // 依次进行转换
    automaton.get(char);
  }

  // 返回值，整数 = 正负 * 数值
  return automaton.sign * automaton.answer;
};

// https://leetcode-cn.com/problems/string-to-integer-atoi/solution/javascriptzi-dong-ji-guan-fang-ti-jie-de-xiang-xi-/

// parseInt

var myAtoi = function(str) {
    const number = parseInt(str, 10);

    if(isNaN(number)) {
        return 0;
    } else if (number < Math.pow(-2, 31) || number > Math.pow(2, 31) - 1) {
        return number < Math.pow(-2, 31) ? Math.pow(-2, 31) : Math.pow(2, 31) - 1;
    } else {
        return number;
    }
};





// 正则表达式

var myAtoi = function(str) {
    str = str.trim().match(/^[+-]?\d+/g);
    
    if(isNaN(str)){
        return 0
    }else if(str > 2**31 -1 ){
        return 2**31 -1
    }else if(str < -(2 ** 31)){
        return -(2 ** 31)
    }else {
        return Number(str)
    }
    // 简化
    // return res ? Math.max(Math.min(Number(res[0]),2**31-1),-(2**31)) : 0

};