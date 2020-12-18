// 给你一个仅由大写英文字母组成的字符串，你可以将任意位置上的字符替换成另外的字符，总共可最多替换 k 次。在执行上述操作后，找到包含重复字母的最长子串的长度。

// 注意:
// 字符串长度 和 k 不会超过 104。

// 示例 1:

// 输入:
// s = "ABAB", k = 2

// 输出:
// 4

// 解释:
// 用两个'A'替换为两个'B',反之亦然。
// 示例 2:

// 输入:
// s = "AABABBA", k = 1

// 输出:
// 4

// 解释:
// 将中间的一个'A'替换为'B',字符串变为 "AABBBBA"。
// 子串 "BBBB" 有最长重复字母, 答案为 4。

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// 1 循环遍历字符串数组
// 2 判断条件，先找出当前滑块中重复字符最多的字符的个数，然后用 right - left + 1代表滑块大小 减去 字符串最多的那个数，判断是否大于容差K。如果不大于。滑块继续变大。如果大于了，那么滑块左移动。
// 3 左移动的时候需要。先把最前面的字符抛出来，然后再去移动。下次循环的时候需要重新判断当前滑块中重复最多的字符的个数

var characterReplacement = function (s, k) {
  let map = new Map();

  let left = 0,
    right = 0;
  // maxChar 为滑动中字符串中最多的那个字符的值
  let maxChar = 0;
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }
    maxChar = Math.max(map.get(s[i]), maxChar);
    // 滑块长度大于 k + 最多的字符数值 那么 表示不能覆盖滑块移动
    if (right - left + 1 > k + maxChar) {
      map.set(s[left], map.get(s[left]) - 1);
      left++;
      right++;
    } else {
      right++;
    }
  }
  return right - left;
};
