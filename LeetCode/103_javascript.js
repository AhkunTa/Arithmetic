// 给定一个二叉树，返回其节点值的锯齿形层次遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。

// 例如：
// 给定二叉树 [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回锯齿形层次遍历如下：

// [
//   [3],
//   [20,9],
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
// 102 的变形
// BFS
var zigzagLevelOrder = function(root) {
  if(!root) return [];
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
      if(res.length % 2 == 1){
          resArr.reverse()
      } 
      res.push(resArr)
  }
  return res
};

// DFS 解法参照 102