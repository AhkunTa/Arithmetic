// 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。

// 示例 1:

// 输入: "aba"
// 输出: True
// 示例 2:

// 输入: "abca"
// 输出: True
// 解释: 你可以删除c字符。

// 和 #125 类似

/**
 * @param {string} s
 * @return {boolean}
 */

// 双指针
// 时间 O(n)
// 空间 O(1)

var validPalindrome = function(s) {
    let r = s.length - 1,
        l = 0;
    while (l < r) {
        if (s[l] !== s[r]) {
            return isPalindrome(s, l + 1, r) || isPalindrome(s, l, r - 1);
        }
        l++;
        r--;
    }
    return true;
};

var isPalindrome = function(str, l, r) {
    while (l < r) {
        if (str[l] !== str[r]) {
            return false;
        }
        l++;
        r--;
    }
    return true;
}