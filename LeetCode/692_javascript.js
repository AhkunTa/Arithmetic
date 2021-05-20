// 给一非空的单词列表，返回前 k 个出现次数最多的单词。

// 返回的答案应该按单词出现频率由高到低排序。如果不同的单词有相同出现频率，按字母顺序排序。

// 示例 1：

// 输入: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
// 输出: ["i", "love"]
// 解析: "i" 和 "love" 为出现次数最多的两个单词，均为2次。
//     注意，按字母顺序 "i" 在 "love" 之前。
//

// 示例 2：

// 输入: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
// 输出: ["the", "is", "sunny", "day"]
// 解析: "the", "is", "sunny" 和 "day" 是出现次数最多的四个单词，
//     出现次数依次为 4, 3, 2 和 1 次。
//

// 注意：

// 假定 k 总为有效值， 1 ≤ k ≤ 集合元素数。
// 输入的单词均由小写字母组成。
//

// 扩展练习：

// 尝试以 O(n log k) 时间复杂度和 O(n) 空间复杂度解决。
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  let map = new Map();

  for (let i = 0; i < words.length; i++) {
    if (map.get(words[i])) {
      map.set(words[i], map.get(words[i]) + 1);
    } else {
      map.set(words[i], 1);
    }
  }
  let arr = [];
  for (let [key] of map.entries()) {
    arr.push(key);
  }

  // 数组 进行排序
  arr.sort((a, b) => {
    if (map.get(a) == map.get(b)) {
      // localCompare 比较a字符是否在b字符之前 在之前返回-1 之后返回1
      return a.localeCompare(b);
    }
    return map.get(b) - map.get(a);
  });

  return arr.slice(0, k);
};
