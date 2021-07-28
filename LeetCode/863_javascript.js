// 给定一个二叉树（具有根结点 root）， 一个目标结点 target ，和一个整数值 K 。

// 返回到目标结点 target 距离为 K 的所有结点的值的列表。 答案可以以任何顺序返回。

//

// 示例 1：

// 输入：root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, K = 2
// 输出：[7,4,1]
// 解释：
// 所求结点为与目标结点（值为 5）距离为 2 的结点，
// 值分别为 7，4，以及 1

// 注意，输入的 "root" 和 "target" 实际上是树上的结点。
// 上面的输入仅仅是对这些对象进行了序列化描述。
//

// 提示：

// 给定的树是非空的。
// 树上的每个结点都具有唯一的值 0 <= node.val <= 500 。
// 目标结点 target 是树上的结点。
// 0 <= K <= 1000.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
// var distanceK = function (root, target, k) {
//   let res = [];
//   // index 为节点所在的层数
//   // 由此可以发现 获取target的层数
//   // 那么 所有结点的值的列表 为目标距离为k的层的集合
//   let kIndex = -1;
//   let dfs = (node, index) => {
//     if (!node) return;
//     if (node.val == target.val) {
//       kIndex = index;
//       return;
//     }
//     dfs(node.left, index + 1);
//     dfs(node.right, index + 1);
//   };
//   dfs(root, 0);
//   //  有三种情况 下面k层  上面k层  或者 经过root在另一个兄弟节点上
//   //  当 kIndex > k 时 kIndex - k
//   //  kIndex < k 时 k-kIndex
//   k1 = kIndex + k;
//   k2 = kIndex > k ? kIndex - k : k - kIndex;

//   let dfs2 = (node, index) => {
//     if (!node) return;
//     if (node.val !== target.val) {
//       if (index == k1 || index == k2) {
//         res.push(node.val);
//       }
//     }
//     dfs2(node.left, index + 1);
//     dfs2(node.right, index + 1);
//   };
//   dfs2(root, 0);
//   return res;
// };

var distanceK = function (root, target, k) {
  let parents = new Map();
  let res = [];

  let findParents = node => {
    if (node.left !== null) {
      parents.set(node.left.val, node);
      findParents(node.left);
    }

    if (node.right !== null) {
      parents.set(node.right.val, node);
      findParents(node.right);
    }
  };
  // 寻找所有节点的父节点存入map
  findParents(root);

  let findTarget = (node, from, index, k) => {
    if (!node) return;

    if (index == k) {
      res.push(node.val);
      return;
    }

    if (node.left !== from) {
      findTarget(node.left, node, index + 1, k);
    }
    if (node.right !== from) {
      findTarget(node.right, node, index + 1, k);
    }
    if (parents.get(node.val) !== from) {
      findParents(parents.get(node.val), node, index + 1, k);
    }
  };

  // 从 target 出发 DFS，寻找所有深度为 k 的结点
  findTarget(target, null, 0, k);

  return res;
};
