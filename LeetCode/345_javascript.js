// 编写一个函数，以字符串作为输入，反转该字符串中的元音字母。

//

// 示例 1：

// 输入："hello"
// 输出："holle"
// 示例 2：

// 输入："leetcode"
// 输出："leotcede"
//

// 提示：

// 元音字母不包含字母 "y" 。

// 经典双指针
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let left = 0;
  let right = s.length - 1;
  let set = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let arr = s.split("");
  while (left < right) {
    let leftChar = arr[left];
    let rightChar = arr[right];

    if (set.has(leftChar) && set.has(rightChar)) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
    if (!set.has(leftChar)) {
      left++;
    }
    if (!set.has(rightChar)) {
      right--;
    }
  }
  return arr.join("");
};
