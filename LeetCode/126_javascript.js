// 给定两个单词（beginWord 和 endWord）和一个字典 wordList，找出所有从 beginWord 到 endWord 的最短转换序列。转换需遵循如下规则：

// 每次转换只能改变一个字母。
// 转换后得到的单词必须是字典中的单词。
// 说明:

// 如果不存在这样的转换序列，返回一个空列表。
// 所有单词具有相同的长度。
// 所有单词只由小写字母组成。
// 字典中不存在重复的单词。
// 你可以假设 beginWord 和 endWord 是非空的，且二者不相同。
// 示例 1:

// 输入:
// beginWord = "hit",
// endWord = "cog",
// wordList = ["hot","dot","dog","lot","log","cog"]

// 输出:
// [
//   ["hit","hot","dot","dog","cog"],
//   ["hit","hot","lot","log","cog"]
// ]
// 示例 2:

// 输入:
// beginWord = "hit"
// endWord = "cog"
// wordList = ["hot","dot","dog","lot","log"]

// 输出: []

// 解释: endWord "cog" 不在字典中，所以不存在符合要求的转换序列。

// 此题和127类似 不过求最短路径BFS即可
// 求所有路径需要回溯算法

// 题目解析
// https://leetcode-cn.com/problems/word-ladder-ii/solution/ru-guo-ni-fa-xian-kan-bie-ren-de-ti-jie-kan-bu-don/

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
// 举例 ["hot","dot","dog","lot","log","cog"]
// wordMap(7) {
//   'hot' => [ 'hit', 'dot', 'lot' ],
//   'dot' => [ 'hot', 'lot', 'dog' ],
//   'lot' => [ 'hot', 'dot', 'log' ],
//   'hit' => [ 'hot' ],
//   'dog' => [ 'dot', 'log', 'cog' ],
//   'log' => [ 'lot', 'dog', 'cog' ],
//   'cog' => [ 'dog', 'log' ]
// }
// levelMap(7) {
//   'hit' => 0,
//   'hot' => 1,
//   'dot' => 2,
//   'lot' => 2,
//   'dog' => 3,
//   'log' => 3,
//   'cog' => 4
// }



var findLadders = function (beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) return [];

  let wordListSet = new Set(wordList);
  let wordMap = new Map();
  let levelMap = new Map();
  let visited = new Set();
  // 初始化设置 初始beginword 已访问 并且leveMap 为 0
  let tempArr = [beginWord];
  wordListSet.add(beginWord);
  visited.add(beginWord);
  levelMap.set(beginWord, 0);

  let hasEndWord = false; // 是否存在相等的值
  let level = 0;
  while (tempArr.length) {
    level++;
    let length = tempArr.length;
    while (length--) {
      let temp = tempArr.shift();
      for (let value of wordListSet.values()) {
        let word = value;
        let different = 0;
        for (let j = 0; j < beginWord.length; j++) {
          if (temp[j] !== word[j]) {
            different++;
          }
        }
        if (different === 1) {
          // push 到 wordMap中
          if (wordMap.has(word)) {
            wordMap.get(word).push(temp);
          } else {
            wordMap.set(word, [temp]);
          }
          // 记录 存在转换成endWord的可能
          if (word == endWord) {
            hasEndWord = true;
          }
          // 已经访问过 跳过
          if (visited.has(word)) continue;
          // 记录层级关系
          levelMap.set(word, level);
          visited.add(word);
          tempArr.push(word);
        }
      }
    }
  }
  // BFS 中 不存在转换的可能 直接return
  if (!hasEndWord) return [];
  let res = [];
  let dfs = (start, end, arr) => {
    // 前后相等 return
    if (start == end) {
      res.push(arr);
      return;
    }
    if (wordMap.get(start)) {
      for (let item of wordMap.get(start)) {
        // start的leve +1   和  wrodMap中 start 的 value值 进行匹配
        if (levelMap.get(start) + 1 == levelMap.get(item)) {
          dfs(item, end, [...arr, item]);
        }
      }
    }
  };
  dfs(beginWord, endWord, [beginWord]);
  return res;
};
