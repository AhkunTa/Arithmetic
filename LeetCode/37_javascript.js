// 编写一个程序，通过填充空格来解决数独问题。

// 一个数独的解法需遵循如下规则：

// 数字 1-9 在每一行只能出现一次。
// 数字 1-9 在每一列只能出现一次。
// 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
// 空白格用 '.' 表示。

// 一个数独。
[
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

// 答案被标成红色。

[
  ["5", "3", "4", "6", "7", "8", "9", "1", "2"],
  ["6", "7", "2", "1", "9", "5", "3", "4", "8"],
  ["1", "9", "8", "3", "4", "2", "5", "6", "7"],
  ["8", "5", "9", "7", "6", "1", "4", "2", "3"],
  ["4", "2", "6", "8", "5", "3", "7", "9", "1"],
  ["7", "1", "3", "9", "2", "4", "8", "5", "6"],
  ["9", "6", "1", "5", "3", "7", "2", "8", "4"],
  ["2", "8", "7", "4", "1", "9", "6", "3", "5"],
  ["3", "4", "5", "2", "8", "6", "1", "7", "9"],
];
// 提示：

// 给定的数独序列只包含数字 1-9 和字符 '.' 。
// 你可以假设给定的数独只有唯一解。
// 给定数独永远是 9x9 形式的。

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  // 获取hash值的方法具体看 36题
  let rowHash = Array.from(new Array(board.length), arr => new Array());
  let colHash = Array.from(new Array(board.length), arr => new Array());
  let boxHash = Array.from(new Array(board.length), arr => new Array());

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      // value值为 数组索引 所以减一
      if (board[i][j] == ".") continue;
      let value = board[i][j] - 1;
      let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      // 假设全部有解
      rowHash[i][value] = true;
      colHash[j][value] = true;
      boxHash[boxIndex][value] = true;
    }
  }

  let dfs = (i, j) => {
    while (board[i][j] != ".") {
      // 当已经填有数字时 向后一位
      j++;
      // 当为最后一位时 换行
      if (j >= 9) {
        i++;
        j = 0;
      }
      if (i >= 9) {
        return true;
      }
    }

    let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
    for (let k = 0; k < 9; k++) {
      if (!rowHash[i][k] && !colHash[j][k] && !boxHash[boxIndex][k]) {
        // 这边要将k的值 +1
        board[i][j] = k + 1 + "";
        rowHash[i][k] = true;
        colHash[j][k] = true;
        boxHash[boxIndex][k] = true;
        if (dfs(i, j)) {
          return true;
        }
        // 回退操作
        board[i][j] = ".";
        rowHash[i][k] = false;
        colHash[j][k] = false;
        boxHash[boxIndex][k] = false;
      }
    }
    return false;
  };

  dfs(0, 0);
};

// 使用set
// 无需考虑 +1 -1 问题
var solveSudoku = function (board) {
  let rowSet = Array.from(new Array(board.length), arr => new Set());
  let colSet = Array.from(new Array(board.length), arr => new Set());
  let boxSet = Array.from(new Array(board.length), arr => new Set());
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] == ".") continue;
      let value = board[i][j];
      let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      rowSet[i].add(value);
      colSet[j].add(value);
      boxSet[boxIndex].add(value);
    }
  }

  let dfs = (i, j) => {
    // 边界判断
    if (j >= 9) {
      i++;
      j = 0;
    }
    if (i >= 9) {
      return true;
    }

    if (board[i][j] == ".") {
      for (let k = 0; k < 9; k++) {
        let value = k + 1 + "";
        let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        if (
          !rowSet[i].has(value) &&
          !colSet[j].has(value) &&
          !boxSet[boxIndex].has(value)
        ) {
          board[i][j] = value;
          rowSet[i].add(value);
          colSet[j].add(value);
          boxSet[boxIndex].add(value);
          if (dfs(i, j)) {
            return true;
          }
          board[i][j] = ".";
          rowSet[i].delete(value);
          colSet[j].delete(value);
          boxSet[boxIndex].delete(value);
        }
      }
      return false;
    } else {
      return dfs(i, j + 1);
    }
  };

  dfs(0, 0);
};
