// 给定一个二叉树，返回它的 后序 遍历。

// 示例:

// 输入: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3

// 输出: [3,2,1]
// 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  let res = [];
  let dfs = (root) => {
    if (!root) {
      return;
    }
    dfs(root.left);
    dfs(root.right);
    res.push(root.val);
  };
  dfs(root);
  return res;
};

// 迭代 使用栈存储过程状态

// 前序
var postorderTraversal = function (root) {
  let res = [];
  let stack = [root];
  while (stack.length) {
    let ele = stack.shift();
    if (ele.left) {
      stack.push(ele.left);
    }
    if (ele.right) {
      stack.push(ele.right);
    }
    res.push(ele.val);
  }
  return res;
};

// // 后序
// var postorderTraversal = function (root) {
//   let res = [];
//   let current = root;
//   let stack = [];
//   while (stack.length || current) {
//     if (current) {
//       stack.push(current);
//       res.push(current.val);
//       current = current.right;
//     } else {
//       current = stack.shift();
//       current = current.left;
//     }
//   }
//   return res;
// };
