// 给定一个字符串 s 和一个整数 k，从字符串开头算起，每 2k 个字符反转前 k 个字符。

// 如果剩余字符少于 k 个，则将剩余字符全部反转。
// 如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。
//

// 示例 1：

// 输入：s = "abcdefg", k = 2
// 输出："bacdfeg"
// 示例 2：

// 输入：s = "abcd", k = 2
// 输出："bacd"
//

// 提示：

// 1 <= s.length <= 104
// s 仅由小写英文组成
// 1 <= k <= 104

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  if (k == 1) return s;
  let arrS = s.split("");
  for (let i = 0; i < arrS.length; i += 2 * k) {
    // 反转 从 i 到 r 的值
    // 此处注意 slice (start,end) 的边距问题
    let r = i + k;
    let reverseArr = reverse(arrS.slice(i, r));
    arrS.splice(i, k, ...reverseArr);
  }
  return arrS.join("");
  // 数组反转方法 只需遍历一半数组
  function reverse(arr) {
    let length = arr.length;
    for (let i = 0; i < length / 2; i++) {
      [arr[i], arr[length - 1 - i]] = [arr[length - 1 - i], arr[i]];
    }
    return arr;
  }
};
