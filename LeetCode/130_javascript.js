// 给定一个二维的矩阵，包含 'X' 和 'O'（字母 O）。

// 找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X' 填充。

// 示例:

// X X X X
// X O O X
// X X O X
// X O X X
// 运行你的函数后，矩阵变为：

// X X X X
// X X X X
// X X X X
// X O X X
// 解释:

// 被围绕的区间不会存在于边界上，换句话说，任何边界上的 'O' 都不会被填充为 'X'。 任何不在边界上，或不与边界上的 'O' 相连的 'O' 最终都会被填充为 'X'。如果两个元素在水平或垂直方向相邻，则称它们是“相连”的。

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

// BFS
// 相似题目 994
// 首先获取边缘的O  在通过BFS获取其 上下左右的相邻点 全部置为1
// 再将其他O 的值 改为X
// 最后将 1 改为 O
var solve = function (board) {
  let tempArray = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] == "O") {
        if (
          i == 0 ||
          i == board.length - 1 ||
          j == 0 ||
          j == board[0].length - 1
        ) {
          board[i][j] = "1";
          tempArray.push([i, j]);
        }
      }
    }
  }
  while (tempArray.length) {
    // let length = tempArray.length;
    // while (length--) {
    //   let temp = tempArray.shift();
    //   let i = temp[0];
    //   let j = temp[1];
    //   if (i - 1 > 0 && board[i - 1][j] == "O") {
    //     tempArray.push([i - 1, j]);
    //     board[i - 1][j] = "1";
    //   }
    //   if (i + 1 < board.length && board[i + 1][j] == "O") {
    //     tempArray.push([i + 1, j]);
    //     board[i + 1][j] = "1";
    //   }
    //   if (j - 1 > 0 && board[i][j - 1] == "O") {
    //     tempArray.push([i, j - 1]);
    //     board[i][j - 1] = "1";
    //   }
    //   if (j + 1 < board[0].length && board[i][j + 1] == "O") {
    //     tempArray.push([i, j + 1]);
    //     board[i][j + 1] = "1";
    //   }
    // }

    //  上述循环简化
    let temp = tempArray.shift();
    let queue = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    for (let [a, b] of queue) {
      let i = temp[0] + a;
      let j = temp[1] + b;
      if (i < 0 || i == board.length || j < 0 || j == board[0].length) {
        continue;
      }
      if (board[i][j] == "O") {
        board[i][j] = "1";
        tempArray.push([i, j]);
      }
    }
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] == "O") {
        board[i][j] = "X";
      }
      if (board[i][j] == "1") {
        board[i][j] = "O";
      }
    }
  }
  // return board
};



// DFS
var solve = function (board) {
  let dfs = (i,j)=>{
    if (
      i < 0 ||
      i == board.length ||
      j < 0 ||
      j == board[0].length
    ){
      // 越界return
      return;
    }
    if(board[i][j] == 'O'){
      // 赋值
      board[i][j] = '1'
      dfs(i+1,j);
      dfs(i-1,j);
      dfs(i,j +1);
      dfs(i,j-1);
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] == "O") {
        if (
          i == 0 ||
          i == board.length - 1 ||
          j == 0 ||
          j == board[0].length - 1
        ) {
          dfs(i,j);
        }
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] == "O") {
        board[i][j] = "X";
      }
      if (board[i][j] == "1") {
        board[i][j] = "O";
      }
    }
  }
}



