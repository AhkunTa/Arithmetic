// 判断一个 9x9 的数独是否有效。只需要根据以下规则，验证已经填入的数字是否有效即可。

// 数字 1-9 在每一行只能出现一次。
// 数字 1-9 在每一列只能出现一次。
// 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。

// 上图是一个部分填充的有效的数独。

// 数独部分空格内已填入了数字，空白格用 '.' 表示。

// 示例 1:

// 输入:
// [
//   ["5","3",".",".","7",".",".",".","."],
//   ["6",".",".","1","9","5",".",".","."],
//   [".","9","8",".",".",".",".","6","."],
//   ["8",".",".",".","6",".",".",".","3"],
//   ["4",".",".","8",".","3",".",".","1"],
//   ["7",".",".",".","2",".",".",".","6"],
//   [".","6",".",".",".",".","2","8","."],
//   [".",".",".","4","1","9",".",".","5"],
//   [".",".",".",".","8",".",".","7","9"]
// ]
// 输出: true
// 示例 2:

// 输入:
// [
//   ["8","3",".",".","7",".",".",".","."],
//   ["6",".",".","1","9","5",".",".","."],
//   [".","9","8",".",".",".",".","6","."],
//   ["8",".",".",".","6",".",".",".","3"],
//   ["4",".",".","8",".","3",".",".","1"],
//   ["7",".",".",".","2",".",".",".","6"],
//   [".","6",".",".",".",".","2","8","."],
//   [".",".",".","4","1","9",".",".","5"],
//   [".",".",".",".","8",".",".","7","9"]
// ]
// 输出: false
// 解释: 除了第一行的第一个数字从 5 改为 8 以外，空格内其他数字均与 示例1 相同。
//      但由于位于左上角的 3x3 宫内有两个 8 存在, 因此这个数独是无效的。
// 说明:

// 一个有效的数独（部分已被填充）不一定是可解的。
// 只需要根据以上规则，验证已经填入的数字是否有效即可。
// 给定数独序列只包含数字 1-9 和字符 '.' 。
// 给定数独永远是 9x9 形式的。

// 2021.09.17 每日一题
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  // 行元素 判断
  for (let i = 0; i < board.length; i++) {
    let hash = {};
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] == ".") continue;

      if (hash[board[i][j]]) {
        return false;
      } else {
        hash[board[i][j]] = true;
      }
    }
  }

  // 列元素 判断
  for (let i = 0; i < board[0].length; i++) {
    let hash = {};
    for (let j = 0; j < board.length; j++) {
      if (board[j][i] == ".") continue;

      if (hash[board[j][i]]) {
        return false;
      } else {
        hash[board[j][i]] = true;
      }
    }
  }

  // 3*3 判断
  // 首先循环分成9个区域
  for (let i = 0; i < board.length; i++) {
    let hash = {};

    // i/3*3 获取 每个区域对应的 board坐标 k h
    let k = Math.floor(i / 3) * 3,
      h = Math.floor(i % 3) * 3;
    for (let r = k; r < k + 3; r++) {
      for (let c = h; c < h + 3; c++) {
        if (board[r][c] == ".") continue;

        if (hash[board[r][c]]) {
          return false;
        } else {
          hash[board[r][c]] = true;
        }
      }
    }
  }
  return true;
};

// 更好的方法
var isValidSudoku = function (board) {
  // 新建hash表
  let rowHash = Array.from(new Array(board[0]), arr =>
    new Array(board[0].length).fill(false)
  );
  let colHash = Array.from(new Array(board[0]), arr =>
    new Array(board[0].length).fill(false)
  );
  let boxHash = Array.from(new Array(board[0]), arr =>
    new Array(board[0].length).fill(false)
  );

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let value = board[i][j];
      if (value == ".") continue;
      // 行
      if (rowHash[i][value]) {
        return false;
      } else {
        rowHash[i][value] = true;
      }
      // 列
      if (colHash[j][value]) {
        return false;
      } else {
        colHash[j][value] = true;
      }
      // 获取九宫格地址
      // 关键在于此处找规律获取其地址 将9*9 分成 9个 3*3 区域索引为 0-8
      let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

      if (boxHash[boxIndex][value]) {
        return false;
      } else {
        boxHash[boxIndex][value] = true;
      }
    }
  }
  return true;
};

var isValidSudoku = function (board) {
  // 新建hash表
  let rowHash = Array.from(new Array(board.length), map => new Map());
  let colHash = Array.from(new Array(board.length), map => new Map());
  let boxHash = Array.from(new Array(board.length), map => new Map());

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let value = board[i][j];
      if (value == ".") continue;
      // 行
      if (rowHash[i].get(value)) {
        return false;
      } else {
        rowHash[i].set(value, true);
      }
      // 列
      if (colHash[j].get(value)) {
        return false;
      } else {
        colHash[j].set(value, true);
      }
      // 获取九宫格地址
      let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

      if (boxHash[boxIndex].get(value)) {
        return false;
      } else {
        boxHash[boxIndex].set(value, true);
      }
    }
  }

  return true;
};
