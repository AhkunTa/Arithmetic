// 所有 DNA 都由一系列缩写为 'A'，'C'，'G' 和 'T' 的核苷酸组成，例如："ACGAATTCCG"。在研究 DNA 时，识别 DNA 中的重复序列有时会对研究非常有帮助。

// 编写一个函数来找出所有目标子串，目标子串的长度为 10，且在 DNA 字符串 s 中出现次数超过一次。

//

// 示例 1：

// 输入：s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
// 输出：["AAAAACCCCC","CCCCCAAAAA"]
// 示例 2：

// 输入：s = "AAAAAAAAAAAAA"
// 输出：["AAAAAAAAAA"]
//

// 提示：

// 0 <= s.length <= 105
// s[i] 为 'A'、'C'、'G' 或 'T'
/**
 * @param {string} s
 * @return {string[]}
 */

// hash表暴力操作
// 空间复杂度爆炸
// 能过但不建议
var findRepeatedDnaSequences = function (s) {
  if (s.length < 10) return [];
  // 暴力hashmap
  let map = {};
  //   let res = [];
  //  使用set无需考虑重复
  let res = new Set();
  for (let i = 0; i <= s.length - 10; i++) {
    var str = s.substring(i, i + 10);
    if (!map[str]) {
      map[str] = true;
    } else {
      //   if (!res.includes(str)) {
      //     res.push(str);
      //   }
      //  使用set无需考虑重复
      res.add(str);
    }
  }
  return [...res];
};

// 位运算

// 题解
// https://leetcode-cn.com/problems/repeated-dna-sequences/solution/xiang-xi-tong-su-de-si-lu-fen-xi-duo-jie-fa-by-4-7/

// 设 A = 00
//  C = 01
//  G = 10
//  T = 11
// AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT 可转化为 00 00 00 00 00 01 01 01 01 01 00 00 00 00 00 01 01 01 01 01 00 00 00 00 00 10 10 10 11 11 11
// 将其转化为10进制
// 00000111110000011111100000222333
// 在循环肿 每一次 循环 都将第一个字符串 00 00 00 00 00 01 01 01 01 01 即 AAAAACCCCC
// 左移两位 [ 00 ]| 00 00 00 00 01 01 01 01 01 | [] 后面添加新的位

// 理解位移操作
// 十进制数  10 将其左移一位 << 1 为 20
// 原理 10 转化为二进制  1010 << 1 即向左整体移动一位 后面位数加0 即变成 10100 转化为10进制 是 20
// 右移类似 10 >> 1  1010 -> 101 -> 十进制 为 5

// 待定
// var findRepeatedDnaSequences = function (s) {
//   if (s.length < 10) return [];
//   let set = new Set();
//   let res = new Set();
//   var key = 0;
//   let map = {
//     A: 0,
//     B: 1,
//     C: 2,
//     D: 3,
//   };
//   for (let i = 0; i < 10; i++) {
//     key = (key << 2) | map[array[i]];
//   }

//   for (let i = 10; i < s.length; i++) {
//     key <<= 2;
//     key |= map[array[i]];
//     key &= 0xfffff;
//     if (set.has(key)) {
//       res.add(s.substring(i - 9, i + 1));
//     } else {
//       set.add(key);
//     }
//   }
//   return [...res];
// };
