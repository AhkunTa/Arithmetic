// 给定字符串 s 和 t ，判断 s 是否为 t 的子序列。

// 你可以认为 s 和 t 中仅包含英文小写字母。字符串 t 可能会很长（长度 ~= 500,000），而 s 是个短字符串（长度 <=100）。

// 字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。

// 示例 1:
// s = "abc", t = "ahbgdc"

// 返回 true.

// 示例 2:
// s = "axc", t = "ahbgdc"

// 返回 false.

// 后续挑战 :

// 如果有大量输入的 S，称作S1, S2, ... , Sk 其中 k >= 10亿，你需要依次检查它们是否为 T 的子序列。在这种情况下，你会怎样改变代码？




/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */


// 双指针方法

var isSubsequence = function(s, t) {
    if (s.length == 0) return true;
    var tIndex = 0,
        sIndex = 0;
    while (tIndex < t.length) {
        if (s[sIndex] == t[tIndex]) {
            sIndex++;
        }
        tIndex++
        if (sIndex == s.length) return true
    }
    return false;
};



// 数组

var isSubsequence = function(s, t) {
    if (s.length == 0) return true;
    var sArr = s.split('');
    var tArr = t.split('');
    while (tArr.length > 0) {
        // 每次移除最后一位和s数组进行判断
        var item = tArr.pop();
        if (sArr[sArr.length - 1] == item) {
            // 当两者相等 s数组移除一位
            sArr.pop()
            // s数组如果都移除完毕 则返回true
            if (sArr.length == 0) return true;
        }
    }
    return false
};

// indexOf
var isSubsequence = function(s, t) {
    if (s.length == 0) return true;
    var index = -1
    for (var value of s) {
        index = t.indexOf(value, index + 1)
        if (index == -1) return false;
    }
    return true
};




//  附加题 
// 如果有大量输入的 S，称作S1, S2, ... , Sk 其中 k >= 10亿，你需要依次检查它们是否为 T 的子序列。在这种情况下，你会怎样改变代码？