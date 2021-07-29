// 在一棵无限的二叉树上，每个节点都有两个子节点，树中的节点 逐行 依次按 “之” 字形进行标记。

// 如下图所示，在奇数行（即，第一行、第三行、第五行……）中，按从左到右的顺序进行标记；

// 而偶数行（即，第二行、第四行、第六行……）中，按从右到左的顺序进行标记。

// 给你树上某一个节点的标号 label，请你返回从根节点到该标号为 label 节点的路径，该路径是由途经的节点标号所组成的。

//

// 示例 1：

// 输入：label = 14
// 输出：[1,3,4,14]
// 示例 2：

// 输入：label = 26
// 输出：[1,2,6,10,26]
//

// 提示：

// 1 <= label <= 10^6

// 题目问题主要 在 之字形遍历
// 若正常遍历

//         1
//     2        3
//   4   5    6   7
// 8 9 10 11 12 13 14 15
//
//  只需要 将label 除以2 直到除到1为止
//

//          1
//     3          2
//   4    5     6     7
// 15 14 13 12 11 10 9 8

// 那么之字形如何 求 其对称值

// 当前为偶数层的时候求其对称的的值

// 如 label = 10 则求其对称的 13 的父元素为6
// 10  6  2  1

//

/**
 * @param {number} label
 * @return {number[]}
 */
var pathInZigZagTree = function (label) {
  let level = 1;
  let res = [];
  // 获取当前层数
  while (Math.pow(2, level) <= label) {
    level++;
  }
  if (level % 2 !== 0) {
    label = Math.pow(2, level - 1) + Math.pow(2, level) - 1 - label;
  }
  while (level > 1) {
    // 当为偶数层时直接push
    if (level % 2 == 0) {
      res.push(label);
    } else {
      // 奇数层 获取其对称的点
      // 当前层数 的头尾值 减去 label 即当前层 label的对称值
      // 例子 label = 10   8 + 16 -1 = 8 + 15 - 10 = 13
      let symmetryNum = Math.pow(2, level - 1) + Math.pow(2, level) - 1 - label;
      res.push(symmetryNum);
    }
    label = Math.floor(label / 2);
    level--;
  }
  res.push(1);
  return res.reverse();
};
