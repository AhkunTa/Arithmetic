// 给定一个二叉树，找出其最小深度。

// 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

// 说明：叶子节点是指没有子节点的节点。

//  

// 示例 1：


// 输入：root = [3,9,20,null,null,15,7]
// 输出：2
// 示例 2：

// 输入：root = [2,null,3,null,4,null,5,null,6]
// 输出：



/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// BFS
// 一层一层判断
// 当前层的左右子树都没有则最小深度为当前层的深度
var minDepth = function(root) {
  if(!root) return 0
  let minDepth = 1;
  let tempArr = [root];
  while(tempArr.length){
      let length = tempArr.length;
      while(length--){
          let temp = tempArr.shift();
          if(!temp.left && !temp.right) return minDepth
          if(temp.left){
              tempArr.push(temp.left);
          }
          if(temp.right){
              tempArr.push(temp.right)
          }
      }
      minDepth ++
  }
  return minDepth
};

// DFS
var minDepth = function(root) {
    if(root == null) {
        return 0;
    }
    if(root.left == null && root.right == null) {
        return 1;
    }
    let ans = Number.MAX_SAFE_INTEGER;
    if(root.left != null) {
        ans = Math.min(minDepth(root.left), ans);
    }
    if(root.right != null) {
        ans = Math.min(minDepth(root.right), ans);
    }
    return ans + 1;
};
