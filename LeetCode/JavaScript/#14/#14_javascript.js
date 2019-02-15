// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1:

// 输入: ["flower","flow","flight"]
// 输出: "fl"
// 示例 2:

// 输入: ["dog","racecar","car"]
// 输出: ""
// 解释: 输入不存在公共前缀。


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    var result = '';
    if(strs.length == 0)  return result;
    for(var i=0; i< strs[0].length; i++){
        for(var j=1; j<strs.length; j++){
            if( strs[0][i] != strs[j][i]){
                return result;
            }
        }  
        result += strs[0][i];
    }
    return result;
};