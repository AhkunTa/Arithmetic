// 给定一个二叉树，在树的最后一行找到最左边的值。

// 示例 1:

// 输入:

//     2
//    / \
//   1   3

// 输出:
// 1
//  

// 示例 2:

// 输入:

//         1
//        / \
//       2   3
//      /   / \
//     4   5   6
//        /
//       7

// 输出:
// 7


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
var findBottomLeftValue = function(root) {
  if(root == null) return
  let res;
  let tempArr = [root]
  
  while(tempArr.length){
      let temp = tempArr.shift();
      res = temp.val;
      // 先遍历右节点 在遍历左节点
      // 保证最后的是左子节点
      if(temp.right !== null){
           tempArr.push(temp.right)
      }
      if(temp.left !== null){
          tempArr.push(temp.left)
      }
  }
  return res;
};
