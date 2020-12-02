

/* 
    本题分三题
    三题解答方法基本一样
    通过BFS DFS 解
    相似题目 102 103 107

  */

// 1.剑指 Offer 32 - I. 从上到下打印二叉树

// 从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。

//  

// 例如:
// 给定二叉树: [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回：

// [3,9,20,15,7]
//  

// 提示：

// 节点总数 <= 1000

// 第一题

// DFS
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
var levelOrder = function(root) {
  if(!root) return []
  
  let res = [];
  let dfs = (node, depth) =>{
      if(res.length < depth){
          res.push([])
      }
      res[depth-1].push(node.val);
      if(node.left) dfs(node.left, depth +1);
      if(node.right) dfs(node.right, depth + 1);

  }
  dfs(root, 1);
  let newRes = []
  res.forEach((val,index) =>{
      newRes.push(...val.join(',').split(','))
  })
  return newRes
};


// BFS

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
var levelOrder = function(root) {
  if(!root) return []
  let tempArray = [root];
  let res = []
  while(tempArray.length){

      let length = tempArray.length;
      while(length -- ){
          let temp = tempArray.shift();
          if(temp) res.push(temp.val);    
          if(temp.left) tempArray.push(temp.left);
          if(temp.right) tempArray.push(temp.right);
      }
  }
  return res
};



// 2. 剑指 Offer 32 - II. 从上到下打印二叉树 II
// 第二题

// 从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。

// 例如:
// 给定二叉树: [3,9,20,null,null,15,7],

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
//  

// 提示：

// 节点总数 <= 1000

// 题目和102题一样 
// 具体请看102







// 3.剑指 Offer 32 - III. 从上到下打印二叉树 III

// 第三题
// 请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。

// 例如:
// 给定二叉树: [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回其层次遍历结果：

// [
//   [3],
//   [20,9],
//   [15,7]
// ]
//  

// 提示：

// 节点总数 <= 1000

// 题目和103题一样 
// 具体请看103