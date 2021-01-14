// 给定由若干 0 和 1 组成的数组 A。我们定义 N_i：从 A[0] 到 A[i] 的第 i 个子数组被解释为一个二进制数（从最高有效位到最低有效位）。

// 返回布尔值列表 answer，只有当 N_i 可以被 5 整除时，答案 answer[i] 为 true，否则为 false。

//

// 示例 1：

// 输入：[0,1,1]
// 输出：[true,false,false]
// 解释：
// 输入数字为 0, 01, 011；也就是十进制中的 0, 1, 3 。只有第一个数可以被 5 整除，因此 answer[0] 为真。
// 示例 2：

// 输入：[1,1,1]
// 输出：[false,false,false]
// 示例 3：

// 输入：[0,1,1,1,1,1]
// 输出：[true,false,false,false,true,false]
// 示例 4：

// 输入：[1,1,1,0,1]
// 输出：[false,false,false,false,false]
//

// 提示：

// 1 <= A.length <= 30000
// A[i] 为 0 或 1

/**
 * @param {number[]} A
 * @return {boolean[]}
 */
// 暴力解法
// 当值超过 2**53 的时候会错误
var prefixesDivBy5 = function (A) {
  let res = new Array(A.length).fill(false);

  for (let i = 0; i < A.length; i++) {
    let arr = A.slice(0, i + 1) || [];
    let num = BigInt(0);
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] != 0) {
        num += BigInt(2 ** (arr.length - j - 1));
      }
    }
    if (num % BigInt(5) == 0) {
      res[i] = true;
    }
  }
  return res;
};

//
// 可被5整除的数字只跟该数字的最后一位数字（为0或5）有关系，
// 于是不需要具体的算出二进制前缀对应的十进制整数是多少，
// 只需每次保留最后一位数字（保留用该数字对10取余的十进制整数的结果）就好，
// 而下一个二进制前缀对应的十进制整数 = 上一次的结果左移一位（乘以2）的结果 + 这次的A[i]（0或者1，正好对应十进制的0或者1）的结果。

var prefixesDivBy5 = function (A) {
  let res = new Array(A.length).fill(false);
  let num = 0;
  for (let i = 0; i < A.length; i++) {
    num = num * 2 + A[i];

    if (num % 5 == 0) {
      res[i] = true;
    }
    // 只需判断个位数是 0 或 5  取余避免超过 Number.MAX_VALUE
    num = num % 10;
  }

  return res;
};
