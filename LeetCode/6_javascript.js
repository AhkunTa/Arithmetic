// 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。

// 比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：

// L   C   I   R
// E T O E S I I G
// E   D   H   N
// 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。

// 请你实现这个将字符串进行指定行数变换的函数：

// string convert(string s, int numRows);
// 示例 1:

// 输入: s = "LEETCODEISHIRING", numRows = 3
// 输出: "LCIRETOESIIGEDHN"
// 示例 2:

// 输入: s = "LEETCODEISHIRING", numRows = 4
// 输出: "LDREOEIIECIHNTSG"
// 解释:

// L     D     R
// E   O E   I I
// E C   I H   N
// T     S     G

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

// 找规律 假设例子位例1 例2

var convert = function (s, numRows) {
  if (numRows == 1) return s;
  let list = [];
  for (let i = 0; i < Math.min(numRows, s.length); i++) {
    list.push("");
  }

  let flag = -1;
  let col = 0;
  for (let i = 0; i < s.length; i++) {
    list[col] += s[i];
    // 关键在于这里的判断条件
    // 假设 例子1  s = "LEETCODEISHIRING", numRows = 3
    // 在进行变换flag的 i 分别为  0   2   4     6    8   ... 此时 numRows 为3
    // 假设 例子1  s = "LEETCODEISHIRING", numRows = 4
    // 在进行变换flag的 i 分别为  0   3    6    9   12   ... 此时 numRows 为4
    // 所已得出 当 i % (numRows - 1) == 0 改编flag的值

    if (i % (numRows - 1) == 0) {
      flag = -flag;
    }

    // 另一判断条件 可以判断col 当 col ==0 或者 col == numRows -1 时 修改
    col += flag;
  }

  return list.join("");
};

// 以 V 字型为一个循环, 循环周期为 n = (2 * numRows - 2) （2倍行数 - 头尾2个）。
// 对于字符串索引值 i，计算 x = i % n 确定在循环周期中的位置。
// 则行号 y = min(x, n - x)。

var convert = function (s, numRows) {
  if (numRows === 1) return s;
  const rows = new Array(numRows).fill("");
  const n = 2 * numRows - 2;
  for (let i = 0; i < s.length; i++) {
    const x = i % n;
    rows[Math.min(x, n - x)] += s[i];
  }
  return rows.join("");
};

// 链接：https://leetcode-cn.com/problems/zigzag-conversion/solution/ji-jian-jie-fa-by-ijzqardmbd/
