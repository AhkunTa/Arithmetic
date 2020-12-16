// 给定一个字符串 s 和一些长度相同的单词 words。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。

// 注意子串要与 words 中的单词完全匹配，中间不能有其他字符，但不需要考虑 words 中单词串联的顺序。

//

// 示例 1：

// 输入：
//   s = "barfoothefoobarman",
//   words = ["foo","bar"]
// 输出：[0,9]
// 解释：
// 从索引 0 和 9 开始的子串分别是 "barfoo" 和 "foobar" 。
// 输出的顺序不重要, [9,0] 也是有效答案。
// 示例 2：

// 输入：
//   s = "wordgoodgoodgoodbestword",
//   words = ["word","good","best","word"]
// 输出：[]

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */

// dfs 获取所有排列组合 最后排列比较
// 超出内存空间
// 总共 176 个测试用例 通过151个
var findSubstring = function (s, words) {
  let map = new Map();
  let visited = new Array(words.length).fill(false);
  // 字符串长度
  let strLength = words[0].length * words.length;
  let res = [];

  if (s.length < strLength) return [];
  // dfs 获取所有排列组合
  let dfs = arr => {
    if (arr.length == words.length) {
      map.set(arr.join(""), true);
    }
    for (let i = 0; i < words.length; i++) {
      if (!visited[i]) {
        visited[i] = true;
        dfs([...arr, words[i]]);
        visited[i] = false;
      }
    }
  };
  dfs([]);
  // 以上 dfs 获取到的所有words 的排列组合 放入 map中
  for (let i = 0; i < s.length - strLength + 1; i++) {
    // 截取同等长度的字符串
    let str = s.substring(i, i + strLength);
    // 判断map中是否包含此字符串
    if (map.has(str)) {
      res.push(i);
    }
  }
  return res;
};

// 因为单词长度固定的，我们可以计算出截取字符串的单词个数是否和 words 里相等，所以我们可以借用哈希表。
// 一个是哈希表是 words，一个哈希表是截取的字符串，比较两个哈希是否相等！
// 因为遍历和比较都是线性的，所以时间复杂度：O(n^2)

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  let wordLen = words[0].length;

  let strLen = words[0].length * words.length;

  let hash = {};
  let res = [];
  for (let i = 0; i < words.length; i++) {
    if (hash[words[i]]) {
      hash[words[i]]++;
    } else {
      hash[words[i]] = 1;
    }
  }
  for (let i = 0; i < s.length - strLen + 1; i++) {
    // 拷贝hash值
    let cloneHash = Object.assign({}, hash);
    let wrodsLen = words.length;

    for (let j = i; j < i + strLen; j += wordLen) {
      let word = s.substring(j, j + wordLen);
      // 判断 hash表的值 和hash表中是否存在值
      if (!(word in cloneHash) || cloneHash[word] <= 0) {
        break;
      }
      wrodsLen--;
      cloneHash[word]--;
    }
    if (wrodsLen == 0) res.push(i);
  }
  return res;
};
