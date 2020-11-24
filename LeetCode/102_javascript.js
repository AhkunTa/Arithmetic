
// 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。

 

// 示例：
// 二叉树：[3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回其层次遍历结果：

// [
//   [3],
//   [9,20],
//   [15,7]
// ]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// BFS 
var levelOrder = function(root) {
  if(!root) return []
  let tempArr = [root];
  let res = [];
  while(tempArr.length){
      let length = tempArr.length;
      let resArr = [];
      while(length --){
          let temp = tempArr.shift();
          resArr.push(temp.val);
          if(temp.left){
              tempArr.push(temp.left);
          }
          if(temp.right){
              tempArr.push(temp.right);
          }
      }
      res.push(resArr)
  }
  return res
};

// DFS
var levelOrder = function(root) {
  if(!root) return []
  let res = [];

  let dfs = (node, depth) =>{
      // 当前层数加一 后 res数组push一个新数组
      if(res.length < depth){
          res.push([])
      }
      // depth -1 而非res.length -1
      // 后者在深度搜索时 会有问题
      // 而前者 为当前循环中的值depth值
      res[depth-1].push(node.val);
      if(node.left){
          // 当前层数加一 
          dfs(node.left,depth+1);
      }
      if(node.right){
          // 当前层数加一 
          dfs(node.right,depth+1);
      }
  }
  dfs(root,1);
  return res;
};