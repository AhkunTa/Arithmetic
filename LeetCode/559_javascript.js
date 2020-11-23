// 给定一个 N 叉树，找到其最大深度。

// 最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。

// 例如，给定一个 3叉树 :

//  



//  

// 我们应返回其最大深度，3。

// 说明:

// 树的深度不会超过 1000。
// 树的节点总不会超过 5000。

// 图片链接：https://leetcode-cn.com/problems/maximum-depth-of-n-ary-tree


/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
// 深度优先 DFS
var maxDepth = function(root) {
  if(!root) return 0
  let res = 0;

  let dfs = (node,length)=>{
      if(node.children.length == 0){
          res = Math.max(res,length);
          return 
      }
      for(let i=0; i<node.children.length; i++){
          dfs(node.children[i],length+1)
      }

  }
  dfs(root,1);
  return res;
};


// 广度优先BFS
var maxDepth = function(root) {
  if(!root) return 0
  let res = [root];
  let depth = 0;
  while(res.length >0){
      
      let len = res.length; //暂存每一层的长度
      while(len-- ) { // 每一层进行BFS递归 推出栈
          let temp = res.shift();
          if (temp.children.length > 0) {
              res = res.concat(temp.children) 
          }
      }
      depth ++ // 长度++
  }

  return depth
};