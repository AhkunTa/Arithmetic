// 给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

// 例如：
// 给定二叉树 [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回其自底向上的层次遍历为：

// [
//   [15,7],
//   [9,20],
//   [3]
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
// 此题和 102题一样 层序遍历
// 维护一个包含每一层的数组
var levelOrderBottom = function(root) {
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
  return res.reverse();
};




