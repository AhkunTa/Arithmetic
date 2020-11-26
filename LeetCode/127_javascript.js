// 给定两个单词（beginWord 和 endWord）和一个字典，找到从 beginWord 到 endWord 的最短转换序列的长度。转换需遵循如下规则：

// 每次转换只能改变一个字母。
// 转换过程中的中间单词必须是字典中的单词。
// 说明:

// 如果不存在这样的转换序列，返回 0。
// 所有单词具有相同的长度。
// 所有单词只由小写字母组成。
// 字典中不存在重复的单词。
// 你可以假设 beginWord 和 endWord 是非空的，且二者不相同。
// 示例 1:

// 输入:
// beginWord = "hit",
// endWord = "cog",
// wordList = ["hot","dot","dog","lot","log","cog"]

// 输出: 5

// 解释: 一个最短转换序列是 "hit" -> "hot" -> "dot" -> "dog" -> "cog",
//      返回它的长度 5。
// 示例 2:

// 输入:
// beginWord = "hit"
// endWord = "cog"
// wordList = ["hot","dot","dog","lot","log"]

// 输出: 0

// 解释: endWord "cog" 不在字典中，所以无法进行转换。

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
// BFS
var ladderLength = function (beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) return 0;
  // 使用set 数据格式
  let wordSet = new Set(wordList)
  let tempArr = [[beginWord, 1]];
  while (tempArr.length) {
    let len = tempArr.length;
    while (len--) {
      let temp = tempArr.shift();
      // 值与 endword 相等 返回 长度
      if (temp[0] == endWord) return temp[1];

      for (let value of wordSet) {
        // 以下代码 判断是否与传入的值 只相差一位
        let modifyCharLen = 0;
        for (let j = 0; j < temp[0].length; j++) {
          if (temp[0][j] !== value[j]) {
            modifyCharLen++;
          }
        }
        // 相差一位 则push
        if (modifyCharLen == 1) {
          // set 数据格式 方便此时删除数据
          // 删除数据 以防之后再重复修改
          // 但存在问题 ？ 若删除的数据之后会用到 ？
          wordSet.delete(value)
          tempArr.push([value, temp[1] + 1])
        }
      }
    }
  }
  return 0;
};


/** BFS 
 * 循环比较 beginWord 与 wordList 中的字符，把相差1个字符的字符放入 queue，等待循环比较
 * 每成功找到1个字符，transNumber + 1
 * 如果 beginWord 与 endWord 相等，则返回 transNumber
 */
const ladderLength = (beginWord, endWord, wordList) => {
  let wordSet = new Set(wordList)
  if (!wordSet.has(endWord)) return 0
  let queue = [[beginWord, 1]]
  while (queue.length) {
    let [word, transNumber] = queue.pop()
    if (word === endWord) return transNumber
    for (let str of wordSet) {
      if (charDiff(word, str) === 1) {
        queue.unshift([str, transNumber + 1])
        wordSet.delete(str)
      }
    }
  }
  return 0
};

const charDiff = (str1, str2) => {
  let changes = 0
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] != str2[i]) changes += 1
  }
  return changes
}
