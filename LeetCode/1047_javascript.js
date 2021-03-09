// 给出由小写字母组成的字符串 S，重复项删除操作会选择两个相邻且相同的字母，并删除它们。

// 在 S 上反复执行重复项删除操作，直到无法继续删除。

// 在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。

//

// 示例：

// 输入："abbaca"
// 输出："ca"
// 解释：
// 例如，在 "abbaca" 中，我们可以删除 "bb" 由于两字母相邻且相同，这是此时唯一可以执行删除操作的重复项。之后我们得到字符串 "aaca"，其中又只有 "aa" 可以执行重复项删除操作，所以最后的字符串为 "ca"。
//

// 提示：

// 1 <= S.length <= 20000
// S 仅由小写英文字母组成。

// 划重点 相邻且相同 的两项
// 以下解为 相邻且相同的所有项
// var removeDuplicates = function (S) {
//   var s = S.split("");
//   function re(s) {
//     let length = 1;
//     for (let i = 0; i < s.length - 1; i++) {
//       let j = i + 1;
//       while (s[i] == s[j]) {
//         j++;
//         length++;
//       }
//       if (length > 1) {
//         s.splice(i, length);
//         return re(s);
//       }
//     }
//     if (length == 1) {
//       return s;
//     }
//   }
//   return re(s).join("");
// };

// 递归解法
var removeDuplicates = function (S) {
  var s = S.split("");
  function re(s) {
    let falg = false;
    for (let i = 0; i < s.length - 1; i++) {
      let j = i + 1;
      // 前后两项相同 删除 两项继续递归
      if (s[i] == s[j]) {
        falg = true;
      }
      if (falg) {
        s.splice(i, 2);
        return re(s);
      }
    }
    if (!falg) {
      return s;
    }
  }
  return re(s).join("");
};

// 栈 简单一万倍
var removeDuplicates = function (S) {
  let stack = [];
  for (let s of S) {
    if (stack.length && s == stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(s);
    }
  }
  return stack.join("");
};
