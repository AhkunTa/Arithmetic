// 给定一个仅包含大小写字母和空格 ' ' 的字符串，返回其最后一个单词的长度。

// 如果不存在最后一个单词，请返回 0 。

// 说明：一个单词是指由字母组成，但不包含任何空格的字符串。

// 示例:
// 输入: "Hello World"
// 输出: 5


/**
 * @param {string} s
 * @return {number}
 */

// string 自带trim 去除头尾空格
var lengthOfLastWord = function(s) {
	// 去除尾部空格
    // s = s.replace(/\s*$/g,'')
    
    var arr = s.trim().split(' ');
    var newStr = arr[arr.length-1];
    return newStr.length 
};