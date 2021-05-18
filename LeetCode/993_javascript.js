// 在二叉树中，根节点位于深度 0 处，每个深度为 k 的节点的子节点位于深度 k+1 处。

// 如果二叉树的两个节点深度相同，但 父节点不同 ，则它们是一对堂兄弟节点。

// 我们给出了具有唯一值的二叉树的根节点 root ，以及树中两个不同节点的值 x 和 y 。

// 只有与值 x 和 y 对应的节点是堂兄弟节点时，才返回 true 。否则，返回 false。

//

// 示例 1：

// 输入：root = [1,2,3,4], x = 4, y = 3
// 输出：false
// 示例 2：

// 输入：root = [1,2,3,null,4,null,5], x = 5, y = 4
// 输出：true
// 示例 3：

// 输入：root = [1,2,3,null,4], x = 2, y = 3
// 输出：false
//

// 提示：

// 二叉树的节点数介于 2 到 100 之间。
// 每个节点的值都是唯一的、范围为 1 到 100 的整数。

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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  let deep1 = (deep2 = 0);
  let parent1 = (parent2 = null);
  let dfs = (node, deep, parentVal) => {
    if (!node) return;
    console.log(x, y);
    if (node.val == x) {
      parent1 = parentVal;
      deep1 = deep;
    }
    if (node.val == y) {
      parent2 = parentVal;
      deep2 = deep;
    }

    dfs(node.left, deep + 1, node.val);
    dfs(node.right, deep + 1, node.val);
  };
  dfs(root, 0, root.null);
  return deep1 == deep2 && parent1 !== parent2;
};
