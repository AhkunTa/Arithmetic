// 给定一个二维网格和一个单词，找出该单词是否存在于网格中。

// 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

//

// 示例:

// board =
// [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ]

// 给定 word = "ABCCED", 返回 true
// 给定 word = "SEE", 返回 true
// 给定 word = "ABCB", 返回 false
//

// 提示：

// board 和 word 中只包含大写和小写英文字母。
// 1 <= board.length <= 200
// 1 <= board[i].length <= 200
// 1 <= word.length <= 10^3

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let visited = Array.from(new Array(board.length), () =>
    new Array(board[0].length).fill(false)
  );

  let dfs = (i, j, index) => {
    if (index == word.length) {
      return true;
    }
    // 超出界限 返回false
    if (i >= board.length || i < 0 || j >= board[0].length || j < 0) {
      return false;
    }
    // 已访问 或者 字符不同 返回false
    if (visited[i][j] == true || board[i][j] !== word[index]) {
      return false;
    }
    visited[i][j] = true;

    let res =
      dfs(i + 1, j, index + 1) ||
      dfs(i, j + 1, index + 1) ||
      dfs(i - 1, j, index + 1) ||
      dfs(i, j - 1, index + 1);

    visited[i][j] = false;

    if (res) {
      return true;
    }
    return false;
  };

  // 初始化从头部开始
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] == word[0] && dfs(i, j, 0)) {
        return true;
      }
    }
  }
  return false;
};
