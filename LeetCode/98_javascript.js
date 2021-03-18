// 给定一个二叉树，判断其是否是一个有效的二叉搜索树。

// 假设一个二叉搜索树具有如下特征：

// 节点的左子树只包含小于当前节点的数。
// 节点的右子树只包含大于当前节点的数。
// 所有左子树和右子树自身必须也是二叉搜索树。
// 示例 1:

// 输入:
//     2
//    / \
//   1   3
// 输出: true
// 示例 2:

// 输入:
//     5
//    / \
//   1   4
//      / \
//     3   6
// 输出: false
// 解释: 输入为: [5,1,4,null,null,3,6]。
// 根节点的值为 5 ，但是其右子节点值为 4 。

// 注意题干
// 右子树的值要大于左子树

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
 * @return {boolean}
 */
// 使用中序遍历 左 中 右
// 深度优先 DFS
var isValidBST = function (root) {
  let pre = -Infinity;
  let dfs = node => {
    if (!node) {
      return true;
    }
    // 遍历左子树
    if (!dfs(node.left)) {
      return false;
    }
    if (pre >= node.val) {
      return false;
    }
    pre = node.val;
    return dfs(node.right);
  };
  return dfs(root);
};

// 不使用递归
var isValidBST = function (root) {
  let pre = -Infinity;
  let tempArr = [];
  while (root || tempArr.length) {
    while (root) {
      tempArr.push(root);
      root = root.left;
    }
    root = tempArr.pop();
    if (root.val <= pre) {
      return false;
    }
    pre = root.val;
    root = root.right;
  }
  return true;
};
