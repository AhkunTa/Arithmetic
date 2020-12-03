// 给定一个 完美二叉树 ，其所有叶子节点都在同一层，每个父节点都有两个子节点。二叉树定义如下：

// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }
// 填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。

// 初始状态下，所有 next 指针都被设置为 NULL。

//  

// 进阶：

// 你只能使用常量级额外空间。
// 使用递归解题也符合要求，本题中递归程序占用的栈空间不算做额外的空间复杂度。
//  

// 示例：



// 输入：root = [1,2,3,4,5,6,7]
// 输出：[1,#,2,3,#,4,5,6,7,#]
// 解释：给定二叉树如图 A 所示，你的函数应该填充它的每个 next 指针，以指向其下一个右侧节点，如图 B 所示。序列化的输出按层序遍历排列，同一层节点由 next 指针连接，'#' 标志着每一层的结束。
//  

// 提示：

// 树中节点的数量少于 4096
// -1000 <= node.val <= 1000


// 完美二叉树 划重点！


// BFS
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
      //             1
      //      2            3
      //  4     5       6      7


var connect = function(root) {
  if(!root) return root
  let tempArray = [root];
  while(tempArray.length){
      let length  =tempArray.length;
      while(length --){
          let temp = tempArray.shift();
          // 按顺序 先push left 再push right 
          if(temp.left) tempArray.push(temp.left);
          if(temp.right) tempArray.push(temp.right);
          if(length !== 0){
              // 当前不是最后一个时  next 取当前同层第一个
              // 从左到右顺序 tempArray 即当前层所有节点 除去第一个被shift的元素 所以tempArray[0] 为下一个元素
              temp.next = tempArray[0];
          }
      }
  }
  return root
};



// DFS
// 利用前序遍历特性
var connect = function(root) {
  if(!root) return root

  let res = [];
  let dfs = (node) =>{
      if(!node.left && !node.right){
          return
      }
      if(node.left){
          // 子节点 next 指向 right
          node.left.next = node.right;
      }

      if (node.right) {
          if (node.next == null) {
              node.right.next = null;
          } else {
              node.right.next = node.next.left;
          }
      }

      if(node.left) dfs(node.left);
      if(node.right) dfs(node.right);

  }
  dfs(root);
  return root
};