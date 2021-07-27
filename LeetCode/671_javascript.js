// 给定一个非空特殊的二叉树，每个节点都是正数，并且每个节点的子节点数量只能为 2 或 0。如果一个节点有两个子节点的话，那么该节点的值等于两个子节点中较小的一个。

// 更正式地说，root.val = min(root.left.val, root.right.val) 总成立。

// 给出这样的一个二叉树，你需要输出所有节点中的第二小的值。如果第二小的值不存在的话，输出 -1 。

//

// 示例 1：

// 输入：root = [2,2,5,null,null,5,7]
// 输出：5
// 解释：最小的值是 2 ，第二小的值是 5 。
// 示例 2：

// 输入：root = [2,2,2]
// 输出：-1
// 解释：最小的值是 2, 但是不存在第二小的值。
//

// 提示：

// 树中节点数目在范围 [1, 25] 内
// 1 <= Node.val <= 231 - 1
// 对于树中每个节点 root.val == min(root.left.val, root.right.val)

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

// 1 循环遍历所有节点 找出 大于等于 根节点的最小节点值
// 需遍历所有节点 并且需额外空间
//  时间On   空间On
var findSecondMinimumValue = function (root) {
  let arr = [];
  let dfs = (node, arr) => {
    if (!node) return;
    if (node.val !== root.val) {
      arr.push(node.val);
    }
    dfs(node.left, arr);
    dfs(node.right, arr);
  };
  dfs(root, arr);
  if (arr.length) {
    return Math.min(...arr);
  }
  return -1;
};

// 2 无需遍历所有节点
// 根节点的值等于两个子节点中较小的一个
// 根节点 和  子节点的值不一样时 那么必定第二小的值必定存在

var findSecondMinimumValue = function (root) {
  let res = Infinity;
  let dfs = (node, val) => {
    if (!node) return;
    // 当前值是否和根节点不同
    // 子节点的值 只可能大于等于根节点
    if (node.val !== val) {
      // 当前值大于根节点
      res = Math.min(res, node.val);
      return;
    }
    dfs(node.left, val);
    dfs(node.right, val);
  };
  dfs(root, root.val);
  // 此处需判断是否没有第二大的值
  return res == Infinity ? -1 : res;
};
