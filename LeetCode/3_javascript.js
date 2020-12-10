// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

//  

// 示例 1:

// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:

// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:

// 输入: s = "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
// 示例 4:

// 输入: s = ""
// 输出: 0
//  

// 提示：

// 0 <= s.length <= 5 * 104
// s 由英文字母、数字、符号和空格组成

/**
 * @param {string} s
 * @return {number}
 */

// hash去重
var lengthOfLongestSubstring = function(s) {

  let max = 0;
  for (let i = 0; i < s.length; i++) {
    let map = new Map();
    let tempMax = 0
    for (let j = i; j < s.length; j++) {
      if (map.has(s[j])) {
        break;
      } else {
        // 记录最大临时长度
        tempMax++;
        map.set(s[j], true)
      }
    }
    max = Math.max(max, tempMax);
  }
  return max
};


// 滑动窗口 维护数组
var lengthOfLongestSubstring = function(s) {

  let arr = [];
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    // 维护一个arr数组 当存在重复元素 arr中移除从头部到当前元素的子元素
    // arr中永远为一个不重复的子数组
    if (arr.indexOf(char) != -1) {
      arr.splice(0, arr.indexOf(char) + 1);
    }
    arr.push(s[i]);
    max = Math.max(arr.length, max);
  }
  return max;
};