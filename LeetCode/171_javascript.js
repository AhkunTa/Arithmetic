// 给你一个字符串 columnTitle ，表示 Excel 表格中的列名称。返回该列名称对应的列序号。
// 例如，

//     A -> 1
//     B -> 2
//     C -> 3
//     ...
//     Z -> 26
//     AA -> 27
//     AB -> 28
//     ...
//

// 示例 1:

// 输入: columnTitle = "A"
// 输出: 1
// 示例 2:

// 输入: columnTitle = "AB"
// 输出: 28
// 示例 3:

// 输入: columnTitle = "ZY"
// 输出: 701
// 示例 4:

// 输入: columnTitle = "FXSHRXW"
// 输出: 2147483647
//

// 提示：

// 1 <= columnTitle.length <= 7
// columnTitle 仅由大写英文组成
// columnTitle 在范围 ["A", "FXSHRXW"] 内

/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  // 26进制转换
  let num = 0;
  let pow = 0;
  for (let i = columnTitle.length; i--; i >= 0) {
    // columnTitle.substring(i,i+1).charCodeAt() - 64

    // 获取一个字符的 asc码 并将其减去64 即其对应的值
    num += (columnTitle.substring(i, i + 1).charCodeAt() - 64) * 26 ** pow;
    pow++;
  }
  return num;
};
