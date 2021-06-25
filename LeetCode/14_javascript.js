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
// 纵向遍历
var longestCommonPrefix = function (strs) {
  var result = "";
  if (strs.length == 0) return result;
  for (var i = 0; i < strs[0].length; i++) {
    for (var j = 1; j < strs.length; j++) {
      if (strs[0][i] != strs[j][i]) {
        return result;
      }
    }
    result += strs[0][i];
  }
  return result;
};

/**
 * @param {string[]} strs
 * @return {string}
 */
// 横向遍历
var longestCommonPrefix = function (strs) {
  // res即设定的最长子串
  let res = strs[0];

  for (let i = 1; i < strs.length; i++) {
    // 循环取 res的长度
    // 应为最多不超过res的长度
    for (let j = 0; j < res.length; j++) {
      // 判断当有一个不匹配则跳出
      if (strs[i][j] !== res[j]) {
        res = strs[i].slice(0, j);
        break;
      }
    }
  }
  return res;
};
