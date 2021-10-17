// 给你一个 正 整数 num ，输出它的补数。补数是对该数的二进制表示取反。

//

// 示例 1：

// 输入：num = 5
// 输出：2
// 解释：5 的二进制表示为 101（没有前导零位），其补数为 010。所以你需要输出 2 。
// 示例 2：

// 输入：num = 1
// 输出：0
// 解释：1 的二进制表示为 1（没有前导零位），其补数为 0。所以你需要输出 0 。
//

// 提示：

// 给定的整数 num 保证在 32 位带符号整数的范围内。
// num >= 1
// 你可以假定二进制数不包含前导零位。
// 本题与 1009 https://leetcode-cn.com/problems/complement-of-base-10-integer/ 相同

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  // 将 num转成二进制
  let toBinary = "";
  while (num) {
    toBinary += num % 2;
    num = num >> 1;
  }
  toBinary = toBinary.split("").reverse().join("");

  // 忘记 js toString 可以直接转成二进制
  // 上面一长串可以写成这样
  // let toBinary = num.toString(2)

  let res = "";
  for (let i = 0; i < toBinary.length; i++) {
    if (toBinary[i] == "1") {
      res += "0";
    } else {
      res += "1";
    }
  }
  return parseInt(res, 2);
};
