// 你有一套活字字模 tiles，其中每个字模上都刻有一个字母 tiles[i]。返回你可以印出的非空字母序列的数目。

// 注意：本题中，每个活字字模只能使用一次。

//  

// 示例 1：

// 输入："AAB"
// 输出：8
// 解释：可能的序列为 "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA"。
// 示例 2：

// 输入："AAABBC"
// 输出：188
//  

// 提示：

// 1 <= tiles.length <= 7
// tiles 由大写英文字母组成


/**
 * @param {string} tiles
 * @return {number}
 */
// 此题和90题 全排列Ⅱ相似 唯一区别为重复子集问题
// 重复子集在90题中 可以通过递归时 遍历索引加1来实现
// 即  for(let i=index; i<nums.length; i++)
// dfs( [...tempArray,nums[i]],i+1);
// 在此题中不需要这么做 因为需循环所有子集
var numTilePossibilities = function(tiles) {
  let res = [];
  let visited = [];
  tiles = tiles.split('').sort().join('');
  dfs = (tempArray,index) =>{
      
      if(tempArray.length){
          res.push(tempArray.join(''));
      }
      if(tempArray.length == tiles.length) return;
      for(let i=0; i<tiles.length; i++){
          if(i >0 && tiles[i -1] == tiles[i]&& visited[i-1] == false || visited[i]) continue;
          visited[i] = true;
          dfs([...tempArray,tiles.substring(i,i+1)], index+1);
          visited[i] = false;
      }
  }
  dfs([],0);
  return res.length;
};