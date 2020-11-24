// 给定一个二叉树，找出其最大深度。

// 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

// 说明: 叶子节点是指没有子节点的节点。

// 示例：
// 给定二叉树 [3,9,20,null,null,15,7]，

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回它的最大深度 3 。



/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// 广度优先 BFS
var maxDepth = function(root) {
  if(!root) return 0;
  let tempArr = [root];
  let res = 0;
  while(tempArr.length){

      let len = tempArr.length
      while(len --){
          let temp = tempArr.shift();
          if(temp.left){
              tempArr.push(temp.left)
          }
          if(temp.right){
              tempArr.push(temp.right)
          }
      }
      res++
  }
  return res;
};


// 深度优先 DFS
var maxDepth = function(root) {

  if(!root) return 0;
  let res = 1;
  let dfs = (node,depth) =>{
      res = Math.max(res,depth);
      if(node.left){
          dfs(node.left,depth +1)
      }
      if(node.right){
          dfs(node.right,depth +1)
      }
  }
  dfs(root,1)
  return res;
};