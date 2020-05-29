
// 在上次打劫完一条街道之后和一圈房屋后，小偷又发现了一个新的可行窃的地区。这个地区只有一个入口，我们称之为“根”。 除了“根”之外，每栋房子有且只有一个“父“房子与之相连。一番侦察之后，聪明的小偷意识到“这个地方的所有房屋的排列类似于一棵二叉树”。 如果两个直接相连的房子在同一天晚上被打劫，房屋将自动报警。

// 计算在不触动警报的情况下，小偷一晚能够盗取的最高金额。

// 示例 1:

// 输入: [3,2,3,null,3,null,1]

//      3
//     / \
//    2   3
//     \   \ 
//      3   1

// 输出: 7 
// 解释: 小偷一晚能够盗取的最高金额 = 3 + 3 + 1 = 7.
// 示例 2:

// 输入: [3,4,5,1,3,null,1]

//      3
//     / \
//    4   5
//   / \   \ 
//  1   3   1

// 输出: 9
// 解释: 小偷一晚能够盗取的最高金额 = 4 + 5 = 9.



/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var rob = function(root) {
  function bst(node) {
    let curr = [0, 0];
    if (!node) return curr;
    
    let left = bst(node.left),
        right = bst(node.right);
    
    // 当前点没有偷的最大值 = 左节点偷或不偷的最大值 + 右节点偷或不偷的最大值
    curr[0] = Math.max(...left) + Math.max(...right);
    
    // 当前点偷了的最大值 = 它的左右节点没有偷的最大值加上当前点的值
    curr[1] = node.val + left[0] + right[0];
    
    return curr;
  }
  
  let ans = bst(root);
  return Math.max(ans[0], ans[1]);
}