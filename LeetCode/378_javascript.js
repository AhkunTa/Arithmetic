
// 给定一个 n x n 矩阵，其中每行和每列元素均按升序排序，找到矩阵中第 k 小的元素。
// 请注意，它是排序后的第 k 小元素，而不是第 k 个不同的元素。

 

// 示例：

// matrix = [
//    [ 1,  5,  9],
//    [10, 11, 13],
//    [12, 13, 15]
// ],
// k = 8,

// 返回 13。
 

// 提示：
// 你可以假设 k 的值永远是有效的，1 ≤ k ≤ n2 。


/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */

// 转化为一维数组
var kthSmallest = function(matrix, k) {
	let arr = []
	for(let i=0;i<matrix.length; i++){
        arr.push(...matrix[i])
    }
    arr.sort((a,b)=>a-b);
    return arr[k-1]
};

//  二分法

const countInMatrix = (matrix, midVal) => {
  const n = matrix.length;            // 这题是方阵 n行n列
  let count = 0;
  let row = 0;                        // 第一行
  let col = n - 1;                    // 最后一列
  while (row < n && col >= 0) {
    if (midVal >= matrix[row][col]) { // 大于等于当前行的最右
      count += col + 1;               // 不大于它的数增加col + 1个
      row++;                          // 比较下一行
    } else {                          // 干不过当前行的最右元素
      col--;                          // 留在当前行，比较左边一个
    }
  }
  return count;
};

const kthSmallest = (matrix, k) => {
  const n = matrix.length;
  let low = matrix[0][0];
  let high = matrix[n - 1][n - 1];
  while (low <= high) {
    let midVal = low + ((high - low) >>> 1);   // 获取中间值
    let count = countInMatrix(matrix, midVal); // 矩阵中小于等于它的个数
    if (count < k) {
      low = midVal + 1;
    } else {
      high = midVal - 1;
    }
  }
  return low;
};

// 链接：https://leetcode-cn.com/problems/kth-smallest-element-in-a-sorted-matrix/solution/dui-shu-zhi-er-fen-cha-zhao-by-hyj8/
