// 给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

// 示例:

// 输入: [1,2,3,null,5,null,4]
// 输出: [1, 3, 4]
// 解释:

//    1            <---
//  /   \
// 2     3         <---
//  \     \
//   5     4       <---

// 实例不全 补充示例
// 

//    1            <---
//  /   \
// 2     3         <---
//  \     \
//   5     4       <---
//  /
//  7              <---

// 输出 [1,3,4,7]


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// BFS
var rightSideView = function(root) {
  if(!root) return [];
  let tempArray = [root];
  let res = []
  while(tempArray.length){
      let length = tempArray.length;
      while(length --){
          let temp = tempArray.shift();
          // 当长度为0 时push因为下面是先左再右
          if(length == 0) res.push(temp.val);
          // 先 push left 再push right
          if(temp.left) tempArray.push(temp.left);
          if(temp.right) tempArray.push(temp.right);
      }
  }
  return res
};


// DFS
var rightSideView = function(root) {
  if(!root) return [];
  let res = [];
  let dfs = (node , length)=>{

    // 当前二叉树深度 和 res数组长度相等 push  因为优先优子树搜索 所有右子树优先 当没有右子树 则push 左子树 
    if(res.length == length){
      res.push(node.val)
    }
    // 优先右子树搜索
    if(node.right) {
      dfs(node.right, length +1);
    }
    if(node.left) {
      dfs(node.left, length +1);
    }
  }
  dfs(root, 0)
  return res
};

