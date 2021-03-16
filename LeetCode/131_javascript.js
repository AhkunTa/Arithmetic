// 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。

// 回文串 是正着读和反着读都一样的字符串。

//

// 示例 1：

// 输入：s = "aab"
// 输出：[["a","a","b"],["aa","b"]]
// 示例 2：

// 输入：s = "a"
// 输出：[["a"]]
//

// 提示：

// 1 <= s.length <= 16
// s 仅由小写英文字母组成

/**
 * @param {string} s
 * @return {string[][]}
 */
// dfs
var partition = function (s) {
  let result = [];

  let dfs = (str, index, tempArr) => {
    if (index == s.length) {
      // push 数组的浅拷贝
      result.push(tempArr.concat());
      return;
    }
    for (let i = 0; i <= str.length; i++) {
      // 分割字符串
      // 前面部分
      let string1 = str.substring(0, i);
      // 后面部分
      let string2 = str.substring(i, str.length);
      // 需保证前面部分为回文 后面部分不需保证.
      if (!isPalindrome(string1)) {
        continue;
      }
      tempArr.push(string1);
      dfs(string2, index + i, tempArr);
      // tempArr 回溯
      tempArr.pop();
    }
  };

  dfs(s, 0, []);

  // 判断回文串的方法
  function isPalindrome(str) {
    if (str == "") {
      return false;
    }
    let left = 0,
      right = str.length - 1;
    while (left < right) {
      if (str[left] !== str[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }
  return result;
};

// 动态规划解法
// https://leetcode-cn.com/problems/palindrome-partitioning/solution/fen-ge-hui-wen-chuan-by-leetcode-solutio-6jkv/
