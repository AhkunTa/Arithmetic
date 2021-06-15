// 我们把符合下列属性的数组 A 称作山脉：

// A.length >= 3
// 存在 0 < i < A.length - 1 使得A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]
// 给定一个确定为山脉的数组，返回任何满足 A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1] 的 i 的值。

// 示例 1：

// 输入：[0,1,0]
// 输出：1
// 示例 2：

// 输入：[0,2,1,0]
// 输出：1

// 提示：

// 3 <= A.length <= 10000
// 0 <= A[i] <= 10^6
// A 是如上定义的山脉

/**
 * @param {number[]} A
 * @return {number}
 */

// 暴力
var peakIndexInMountainArray = function (A) {
  let i = 0;
  while (A[i] < A[i + 1]) {
    i++;
  }
  return i;
};

// 二分
// 由题可知
// 在山脉上 假设 a为峰顶
// 在 A[i] < A[a] 上 即上坡   A[i] < A[i+1];
// 在 A[i] > A[a] 上 即下坡   A[i] > A[i+1]

var peakIndexInMountainArray = function (A) {
  if (A.length < 3) return false;
  let left = 0;
  let right = A.length - 1;
  while (left < right) {
    let middle = Math.floor(left + (right - left) / 2);
    // 上坡时
    if (A[middle] < A[middle + 1]) {
      left = middle + 1;
    } else {
      // 下坡时
      // 没有判断 right = middle -1
      // 在[0,1,0] 情况下直接获得 峰顶会导致错误
      // 若使用 right = middle -1 需 while循环跳出条件为 left <= right
      right = middle;
    }
  }
  return left;
};
