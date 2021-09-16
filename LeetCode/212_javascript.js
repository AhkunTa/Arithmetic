// 给定一个 m x n 二维字符网格 board 和一个单词（字符串）列表 words，找出所有同时在二维网格和字典中出现的单词。

// 单词必须按照字母顺序，通过 相邻的单元格 内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母在一个单词中不允许被重复使用。

//

// 示例 1：

// 输入：board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
// 输出：["eat","oath"]
// 示例 2：

// 输入：board = [["a","b"],["c","d"]], words = ["abcb"]
// 输出：[]
//

// 提示：

// m == board.length
// n == board[i].length
// 1 <= m, n <= 12
// board[i][j] 是一个小写英文字母
// 1 <= words.length <= 3 * 104
// 1 <= words[i].length <= 10
// words[i] 由小写英文字母组成
// words 中的所有字符串互不相同

// 2021.09.16 每日一题

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
// 理论上可以解 但超时 传统回溯
// 用例 38 / 43
var findWords = function (board, words) {
  let m = board.length;
  let n = board[0].length;

  let visited = Array.from(new Array(m), arr => new Array(n).fill(false));

  let res = new Set([]);
  let dfs = (i, j, str) => {
    // 此处判断防止 无线循环 题干  1 <= words[i].length <= 10
    if (str.length > 10) return;

    for (let k = 0; k < words.length; k++) {
      if (str.indexOf(words[k]) != -1) {
        res.add(words[k]);
      }
    }
    if (i < 0 || j < 0 || i >= m || j >= n) {
      return;
    }
    if (visited[i][j]) {
      return;
    }

    visited[i][j] = true;
    dfs(i + 1, j, str + board[i][j]);
    dfs(i, j + 1, str + board[i][j]);
    dfs(i - 1, j, str + board[i][j]);
    dfs(i, j - 1, str + board[i][j]);
    visited[i][j] = false;
  };

  // 此处要每一个点开头都考虑到
  // 但这样 时间复杂度巨高
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dfs(i, j, "");
    }
  }
  return [...res];
};

// 思路 ： https://leetcode-cn.com/problems/word-search-ii/solution/bao-li-hui-su-jian-zhi-by-xiaoranzife-3n3b/
// 上面优化
// 还是过不了 42 / 43
var findWords = function (board, words) {
  let m = board.length;
  let n = board[0].length;

  let visited = Array.from(new Array(m), arr => new Array(n).fill(false));

  let res = new Set([]);
  let dfs = (i, j, str, word) => {
    if (str.length > 10) return;
    if (str == word) {
      res.add(word);
    }
    if (i < 0 || j < 0 || i >= m || j >= n) {
      return;
    }
    if (visited[i][j]) {
      return;
    }

    visited[i][j] = true;
    dfs(i + 1, j, str + board[i][j], word);
    dfs(i, j + 1, str + board[i][j], word);
    dfs(i - 1, j, str + board[i][j], word);
    dfs(i, j - 1, str + board[i][j], word);
    visited[i][j] = false;
  };

  // 稍微做一下优化
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      for (let word of words) {
        // 只有在 开头两个单词相等 进行递归
        if (board[i][j] == word[0]) {
          dfs(i, j, "", word);
        }
      }
    }
  }

  return [...res];
};

// 链接：https://leetcode-cn.com/problems/word-search-ii/solution/dan-ci-sou-suo-zi-dian-shu-dfs-javascrip-h90t/
// 字典树
// ["oath","pea","eat","rain"] 为例子
// 数据结构转换后
// {
//   "o": {
//       "a": {
//           "t": {
//               "h": {
//                   "isEnd": "oath"
//               }
//           }
//       }
//   },
//   "p": {
//       "e": {
//           "a": {
//               "isEnd": "pea"
//           }
//       }
//   },
//   "e": {
//       "a": {
//           "t": {
//               "isEnd": "eat"
//           }
//       }
//   },
//   "r": {
//       "a": {
//           "i": {
//               "n": {
//                   "isEnd": "rain"
//               }
//           }
//       }
//   }
// }

const findWords = (board, words) => {
  const res = [];
  const [h, w] = [board.length, board[0].length];

  // 构建字典树
  const getTrie = words => {
    const root = Object.create(null);
    for (const word of words) {
      let node = root;
      for (const c of word) {
        if (!node[c]) node[c] = Object.create(null);
        node = node[c];
      }
      // 使用单词标记单词结尾
      node.isEnd = word;
    }
    return root;
  };

  // DFS 深度优先搜素
  const dfs = (trie, i, j) => {
    // 遍历到结尾
    if (trie.isEnd) {
      // 将结尾单词放入res
      res.push(trie.isEnd);
      trie.isEnd = null;
    }

    // 边界条件
    if (i < 0 || j < 0 || i >= h || j >= w) return;

    // 不在字典树中，返回
    if (!trie[board[i][j]]) return;

    const temp = board[i][j];
    // 标记已访问，以免再次遇到
    board[i][j] = "#";
    dfs(trie[temp], i, j - 1);
    dfs(trie[temp], i, j + 1);
    dfs(trie[temp], i - 1, j);
    dfs(trie[temp], i + 1, j);
    // 四个方向访问完毕，恢复字符
    board[i][j] = temp;
  };

  // 遍历网格
  const trie = getTrie(words);
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      dfs(trie, i, j);
    }
  }
  return res;
};
