
// 给定一个字符串S，通过将字符串S中的每个字母转变大小写，我们可以获得一个新的字符串。返回所有可能得到的字符串集合。

 

// 示例：
// 输入：S = "a1b2"
// 输出：["a1b2", "a1B2", "A1b2", "A1B2"]

// 输入：S = "3z4"
// 输出：["3z4", "3Z4"]

// 输入：S = "12345"
// 输出：["12345"]
 

// 提示：

// S 的长度不超过12。
// S 仅由数字和字母组成。




/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {

  let res = [];
  dfs = (tempArray,index) =>{
      if(tempArray.length === S.length){
          res.push(tempArray.join(''));
          return;
      }
      if( isNaN(S[index]) == false  ){
          dfs([...tempArray, S[index]], index +1)

      }else {
          dfs([...tempArray, S[index].toLowerCase()] , index +1);
          dfs([...tempArray, S[index].toUpperCase()] , index +1)
      }
  }
  dfs([],0);
  return res;
}