// 累加数是一个字符串，组成它的数字可以形成累加序列。

// 一个有效的累加序列必须至少包含 3 个数。除了最开始的两个数以外，字符串中的其他数都等于它之前两个数相加的和。

// 给定一个只包含数字 '0'-'9' 的字符串，编写一个算法来判断给定输入是否是累加数。

// 说明: 累加序列里的数不会以 0 开头，所以不会出现 1, 2, 03 或者 1, 02, 3 的情况。

// 示例 1:

// 输入: "112358"
// 输出: true
// 解释: 累加序列为: 1, 1, 2, 3, 5, 8 。1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8
// 示例 2:

// 输入: "199100199"
// 输出: true
// 解释: 累加序列为: 1, 99, 100, 199。1 + 99 = 100, 99 + 100 = 199
// 进阶:
// 你如何处理一个溢出的过大的整数输入?

/**
 * @param {string} num
 * @return {boolean}
 */

// 主要判断 num1 + num2 === num3
var isAdditiveNumber = function (num) {
  if (num.length < 3) return false;

  let dfs = (num1, num2, str) => {
    // 跳出循环条件 最后所有数字遍历完毕
    // str 必为 ''
    if (str === "") {
      return true;
    }

    for (let i = 1; i <= str.length; i++) {
      let num3 = str.slice(0, i);
      if (num3.startsWith("0") && num3.length > 1) break;
      // 判断相等条件 并在true后递归后面数字
      if (
        Number(num1) + Number(num2) == Number(num3) &&
        dfs(num2, num3, str.slice(i))
      ) {
        return true;
      }
    }
    return false;
  };
  for (let i = 1; i <= num.length - 2; i++) {
    let num1 = num.slice(0, i);
    // 剪枝判断开头是否为0开头如 03 010 等 排除 单个0
    // 此处剪枝操作需在三个地方都调用
    if (num1.startsWith("0") && num1.length > 1) break;

    for (let j = i + 1; j <= num.length - 1; j++) {
      let num2 = num.slice(i, j);
      if (num2.startsWith("0") && num2.length > 1) break;
      let newNum = num.slice(j);
      if (dfs(num1, num2, newNum)) {
        return true;
      }
    }
  }
  return false;
};
