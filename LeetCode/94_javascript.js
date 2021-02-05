// 给定一个二叉树的根节点 root ，返回它的 中序 遍历。

//

// 示例 1：

// 输入：root = [1,null,2,3]
// 输出：[1,3,2]
// 示例 2：

// 输入：root = []
// 输出：[]
// 示例 3：

// 输入：root = [1]
// 输出：[1]
// 示例 4：

// 输入：root = [1,2]
// 输出：[2,1]
// 示例 5：

// 输入：root = [1,null,2]
// 输出：[1,2]

// 二叉数中的遍历

// 前序 父节点 -> left -> right
// 后序 left -> right -> 父节点
// 中序 left -> 父节点 -> right
var inorderTraversal = function (root) {
  // 递归
  let res = [];
  let order = element => {
    if (!element) {
      return;
    }
    order(element.left);
    res.push(element.val);
    order(element.right);
  };
  order(root);
  return res;
};
