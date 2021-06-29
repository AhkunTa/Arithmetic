// 给定一个正整数，返回它在 Excel 表中相对应的列名称。

// 例如，

//     1 -> A
//     2 -> B
//     3 -> C
//     ...
//     26 -> Z
//     27 -> AA
//     28 -> AB
//     ...
// 示例 1:

// 输入: 1
// 输出: "A"
// 示例 2:

// 输入: 28
// 输出: "AB"
// 示例 3:

// 输入: 701
// 输出: "ZY"

/**
 * @param {number} columnNumber
 * @return {string}
 */

// 1------------
// 面向测试用例编程 测了很多用例
// 主要在于 26 52 26的倍数 需处理
var convertToTitle = function (columnNumber) {
  let map = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let res = [];
  while (columnNumber) {
    let num = columnNumber % 26;
    columnNumber = Math.floor(columnNumber / 26);
    if (num == 0) {
      num += 26;
      columnNumber--;
    }
    res.unshift(map[num - 1]);
    if (columnNumber <= 26) {
      res.unshift(map[columnNumber - 1]);
      break;
    }
  }
  return res.join("");
};

// 2 -----------

// 此题为1开始的26进制转换
// 一般都是从0开始的进制转化
// 如下面二进制转换
function tBinary(n) {
  let res = [];
  while (n) {
    let num = n % 2;
    n = n >> 1;
    res.push(num);
  }
  return res.reverse().join("");
}
// 所以需减一来实现整体偏移
var convertToTitle = function (columnNumber) {
  let res = [];
  while (columnNumber) {
    columnNumber--;
    let num = columnNumber % 26;
    columnNumber = Math.floor(columnNumber / 26);
    res.unshift(String.fromCharCode(num + "A".charCodeAt()));
  }
  return res.join("");
};
