// 对于非负整数 X 而言，X 的数组形式是每位数字按从左到右的顺序形成的数组。例如，如果 X = 1231，那么其数组形式为 [1,2,3,1]。

// 给定非负整数 X 的数组形式 A，返回整数 X+K 的数组形式。

//

// 示例 1：

// 输入：A = [1,2,0,0], K = 34
// 输出：[1,2,3,4]
// 解释：1200 + 34 = 1234
// 示例 2：

// 输入：A = [2,7,4], K = 181
// 输出：[4,5,5]
// 解释：274 + 181 = 455
// 示例 3：

// 输入：A = [2,1,5], K = 806
// 输出：[1,0,2,1]
// 解释：215 + 806 = 1021
// 示例 4：

// 输入：A = [9,9,9,9,9,9,9,9,9,9], K = 1
// 输出：[1,0,0,0,0,0,0,0,0,0,0]
// 解释：9999999999 + 1 = 10000000000
//

// 提示：

// 1 <= A.length <= 10000
// 0 <= A[i] <= 9
// 0 <= K <= 10000
// 如果 A.length > 1，那么 A[0] != 0

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */

// 需注意会超过最大数字导致整数相加不精确

var addToArrayForm = function (A, K) {
  let k = K.toString().split("");
  let length = k.length > A.length ? k.length : A.length;
  let res = new Array(length).fill(0);
  let aLen = A.length;
  let kLen = k.length;
  for (let i = 0; i < length; i++) {
    let numa = A[aLen - i - 1] || 0;
    let numk = k[kLen - i - 1] || 0;
    res[i] = +numk + res[i] + numa;
    if (res[i] >= 10) {
      res[i] = res[i] % 10;
      if (i == length - 1) {
        res.push(1);
      } else {
        res[i + 1]++;
      }
    }
  }
  return res.reverse();
};

// 逐位相加
// https://leetcode-cn.com/problems/add-to-array-form-of-integer/solution/shu-zu-xing-shi-de-zheng-shu-jia-fa-by-l-jljp/
var addToArrayForm = function (A, K) {
  let res = [];
  for (let i = A.length - 1; i >= 0; i--) {
    let sum = A[i] + (K % 10);
    K = Math.floor(K / 10);
    if (sum >= 10) {
      sum = sum % 10;
      K++;
    }
    res.push(sum);
  }
  // K还有剩余
  while (K > 0) {
    res.push(K % 10);
    K = Math.floor(K / 10);
  }
  return res.reverse();
};
