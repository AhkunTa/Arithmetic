// 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
// 在杨辉三角中，每个数是它左上方和右上方的数的和。

// 示例:

// 输入: 5
// 输出:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]




/**
 * @param {number} numRows
 * @return {number[][]}
 */
 
var generate = function(numRows) {
    let arr = [];
    
    for(let i = 1; i<=numRows; i++){
        let row = []
        for(let j = 0; j < i; j++){
            if(j == 0 || j== i-1){
                row.push(1);
            }else{
                row.push(arr[i-2][j] + arr[i-2][j-1]);
            }
        }
        arr.push(row);
    }
    return arr;
};

var generate2 = function(numRows) {
  const dp = Array.from(new Array(numRows), (v,k)=> new Array(k+1).fill(1))
  for(let i=1; i<numRows; i++){
    for(let j=1; j<=i; j++){
      if(!dp[i-1][j-1]|| !dp[i-1][j]){
        continue;
      }
      dp[i][j] = dp[i-1][j] + dp[i-1][j-1]
    }
  }
  return dp
}