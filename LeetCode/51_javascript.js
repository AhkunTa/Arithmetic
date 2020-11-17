// n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。



// 上图为 8 皇后问题的一种解法。

// 给定一个整数 n，返回所有不同的 n 皇后问题的解决方案。

// 每一种解法包含一个明确的 n 皇后问题的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。


// 链接：https://leetcode-cn.com/problems/n-queens




/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {

  let res = [];
  let arr = Array.from(new Array(n), value => new Array(n).fill('.'));

  let isValid = (row ,col) =>{
      for(let i=0; i<row; i++){
          for(let j=0; j<n; j++){
              if( arr[i][j] == 'Q' && (j == col || i - j == row - col || i+j == row +col)  ){
                  return false
              }
          }
      }
      return true;
  }

  let dfs = (row)=>{
      if(row == n){
          let tempArr = arr.slice();
          for (let i = 0; i < n; i++) {
              tempArr[i] = tempArr[i].join('');
          }
          res.push(tempArr);
          return;
      }
      for(let i=0 ;i<n; i++){
          if(isValid(row,i)){
              arr[row][i] ='Q';
              dfs(row + 1);
              arr[row][i] ='.';
          }
      }
  }
  dfs(0);
  return res;
};
// 题解 https://leetcode-cn.com/problems/n-queens/solution/shou-hua-tu-jie-cong-jing-dian-de-nhuang-hou-wen-t/