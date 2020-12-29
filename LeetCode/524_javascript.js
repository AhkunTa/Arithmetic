// 给定一个字符串和一个字符串字典，找到字典里面最长的字符串，该字符串可以通过删除给定字符串的某些字符来得到。如果答案不止一个，返回长度最长且字典顺序最小的字符串。如果答案不存在，则返回空字符串。

// 示例 1:

// 输入:
// s = "abpcplea", d = ["ale","apple","monkey","plea"]

// 输出:
// "apple"
// 示例 2:

// 输入:
// s = "abpcplea", d = ["a","b","c"]

// 输出:
// "a"
// 说明:

// 所有输入的字符串只包含小写字母。
// 字典的大小不会超过 1000。
// 所有输入的字符串长度不会超过 1000。

/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function (s, d) {
  d.sort((a, b) => {
    if (a.length == b.length) {
      // 注意 js内sort排序 若 直接返回 d.sort() 可以字符比较 根据字符Unicode码来比 类似ASKⅡ
      // 而使用函数方法 必须返回 number
      return a > b ? 1 : -1;
    }
    return b.length - a.length;
  });
  for (let i = 0; i < d.length; i++) {
    let j = 0;
    for (let k = 0; k < s.length; k++) {
      if (s[k] == d[i][j]) {
        j++;
      }
      if (j == d[i].length) {
        return d[i];
      }
    }
  }
  return "";
};
