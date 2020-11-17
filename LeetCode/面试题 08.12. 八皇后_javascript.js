// 设计一种算法，打印 N 皇后在 N × N 棋盘上的各种摆法，其中每个皇后都不同行、不同列，也不在对角线上。这里的“对角线”指的是所有的对角线，不只是平分整个棋盘的那两条对角线。

// 注意：本题相对原题做了扩展

// 示例:

//  输入：4
//  输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
//  解释: 4 皇后问题存在如下两个不同的解法。
// [
//  [".Q..",  // 解法 1
//   "...Q",
//   "Q...",
//   "..Q."],

//  ["..Q.",  // 解法 2
//   "Q...",
//   "...Q",
//   ".Q.."]
// ]




// 和 51题目一摸一样 N皇后题目
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  let res = []
  let arr = Array.from(new Array(n), value =>new Array(n).fill('.'));

  let isVaild = (row,col) => {
      for(let i=0; i<row; i++){
          for(let j=0; j<n; j++){
              if( arr[i][j] == 'Q' && ( j == col || i + j == row + col || i - j == row - col)){
                  return false;
              }
          }
      }
      return true;
  }

  let dfs = (row) => {

    
      if(row == n){
          let tempArray = Object.assign([],arr);

          for(let i=0;i <n; i++){
              tempArray[i] = tempArray[i].join('')
          }
          res.push(tempArray)
      }

      for(let i=0; i<n; i++){
          if(isVaild(row,i)){
              arr[row][i] = 'Q';
              dfs(row + 1);
              arr[row][i] = '.';
          }
      }
  }

  dfs(0);
  return res;
};