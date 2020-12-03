// 给定一个二叉树，检查它是否是镜像对称的。

//  

// 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
//  

// 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

//     1
//    / \
//   2   2
//    \   \
//    3    3
//  

// 进阶：

// 你可以运用递归和迭代两种方法解决这个问题吗？

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

 // BFS 打败5% ..

// 原理获取每一层的数值 包括null 
// 例 
// [1,2,2,null,3,null,3]
// 返回 res
// [ [1], [2,2], [null,3,null,3]]
// 然后循环每个数组 判断前后对称

var isSymmetric = function(root) {
    if(!root) return true   
    let tempArray = [root];
    let res = []
    while(tempArray.length){
        let length = tempArray.length;
        let arr = []
        while(length --){
            let temp = tempArray.shift();
            if(temp){
                if(temp.left) {
                    tempArray.push(temp.left);
                }else{
                    tempArray.push(null)
                }               
                if(temp.right) {
                    tempArray.push(temp.right);
                }else{
                    tempArray.push(null)
                }  
                arr.push(temp.val);
            }else {
                arr.push(null);
            }
        }
        res.push(arr)
    }
    for(let i=0; i<res.length; i++){
        for(let j=0; j<res[i].length/2; j++){
            console.log(res[i][j],res[i][res[i].length-1-j])
            if(res[i][j] !== res[i][res[i].length -1-j]){
                return false
            }
        }
    }
    return true
};


// 优化以上代码
var isSymmetric = function(root) {
  if(!root) return true   
  let tempArray = [root];
  while(tempArray.length){
      let length = tempArray.length;
      let arr = []
      while(length --){
          let temp = tempArray.shift();
          if(!temp){
            arr.push(null);
            continue;
          }
          tempArray.push(temp.left);
          tempArray.push(temp.right);
          arr.push(temp.val);
      }
      if(arr.toString() !== arr.reverse().toString()){
        return false
      }
  }
  return true
};

// 递归
var isSymmetric = function(root) {
  if(!root) return true

  let compare = (node1, node2) => {
      if(!node1 && !node2){
          return true;
      }
      if(!node1 || !node2){
          console.log(node1,node2)
          return false;
      }

      return node1.val == node2.val && compare(node1.left,node2.right) && compare(node1.right, node2.left);

  }

  return compare(root, root);
};

// 迭代

var isSymmetric = function(root) {
  if(!root) return true;   
  let tempArray = [];
  tempArray.push(root.left,root.right)

  while(tempArray.length){
    let node1 = tempArray.shift()
    let node2 = tempArray.shift();    
    if(!node1 && !node2){
      continue;
    }
    if(!node1 || !node2 || node1.val !==node2.val){
      return false
    }
    tempArray.push(node1.left);
    tempArray.push(node2.right);
    tempArray.push(node1.right);
    tempArray.push(node2.left);
  }

  return true
};