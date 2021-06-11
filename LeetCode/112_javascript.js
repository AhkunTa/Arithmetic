// 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum ，判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。

// 叶子节点 是指没有子节点的节点。

//

// 示例 1：

// 输入：root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// 输出：true
// 示例 2：

// 输入：root = [1,2,3], targetSum = 5
// 输出：false
// 示例 3：

// 输入：root = [1,2], targetSum = 0
// 输出：false
//

// 提示：

// 树中节点的数目在范围 [0, 5000] 内
// -1000 <= Node.val <= 1000
// -1000 <= targetSum <= 1000

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
 * @param {number} targetSum
 * @return {boolean}
 */
// dfs
var hasPathSum = function (root, targetSum) {
  let dfs = (node, sum) => {
    if (!node) {
      return false;
    }
    if (!node.left && !node.right) {
      if (sum + node.val == targetSum) {
        return true;
      }
    }
    let left = dfs(node.left, sum + node.val);
    if (left) return true;
    let right = dfs(node.right, sum + node.val);
    if (right) return true;
    return false;
  };
  return dfs(root, 0);
};
