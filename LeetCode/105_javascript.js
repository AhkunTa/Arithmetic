// 根据一棵树的前序遍历与中序遍历构造二叉树。

// 注意:
// 你可以假设树中没有重复的元素。

// 例如，给出

// 前序遍历 preorder = [3,9,20,15,7]
// 中序遍历 inorder = [9,3,15,20,7]
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// 前序遍历 preorder = [3,9,20,15,7]
// 中序遍历 inorder = [9,3,15,20,7]
var buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;
  let root = new TreeNode(preorder[0]);
  // 获取 根节点的索引
  let rootIndex = inorder.indexOf(preorder[0]);

  root.left = buildTree(
    preorder.slice(1, rootIndex + 1), // 截取 前序遍历 的左侧节点
    inorder.slice(0, rootIndex) // 截取 中序遍历 的左侧节点
  );
  root.right = buildTree(
    preorder.slice(rootIndex + 1),
    inorder.slice(rootIndex + 1)
  );
  return root;
};

//  后续优化 可以使用指针 取代slice 复制值
// https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solution/ding-wei-chu-gen-jie-dian-de-wei-zhi-hua-fen-zuo-y/
var buildTree = function (preorder, inorder) {
  function recursion(preStart, preEnd, inStart, inEnd) {
    if (preStart > preEnd || inStart > inEnd) return null;
    let rootNode = preorder[preStart];
    let root = new TreeNode(rootNode);
    let rootIndex = inorder.indexOf(rootNode);
    let leftNum = rootIndex - inStart; // 左子树节点数
    root.left = recursion(
      preStart + 1,
      preStart + leftNum,
      inStart,
      rootIndex - 1
    );
    root.right = recursion(
      preStart + leftNum + 1,
      preEnd,
      rootIndex + 1,
      inEnd
    );
    return root;
  }

  return recursion(0, preorder.length - 1, 0, inorder.length - 1);
};
