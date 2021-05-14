// 根据一棵树的中序遍历与后序遍历构造二叉树。

// 注意:
// 你可以假设树中没有重复的元素。

// 例如，给出

// 中序遍历 inorder = [9,3,15,20,7]
// 后序遍历 postorder = [9,15,7,20,3]
// 返回如下的二叉树：

//     3
//    / \
//   9  20
//     /  \
//    15   7

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
//  和105 一模一样
var buildTree = function (inorder, postorder) {
  if (!inorder.length || !postorder.length) return null;

  let rootVal = postorder[postorder.length - 1];

  let rootIdx = inorder.indexOf(rootVal);

  let root = new TreeNode(rootVal);

  root.left = buildTree(inorder.slice(0, rootIdx), postorder.slice(0, rootIdx));

  root.right = buildTree(
    inorder.slice(rootIdx + 1),
    postorder.slice(rootIdx, postorder.length - 1)
  );

  return root;
};
