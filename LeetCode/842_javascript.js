// 给定一个数字字符串 S，比如 S = "123456579"，我们可以将它分成斐波那契式的序列 [123, 456, 579]。

// 形式上，斐波那契式序列是一个非负整数列表 F，且满足：

// 0 <= F[i] <= 2^31 - 1，（也就是说，每个整数都符合 32 位有符号整数类型）；
// F.length >= 3；
// 对于所有的0 <= i < F.length - 2，都有 F[i] + F[i+1] = F[i+2] 成立。
// 另外，请注意，将字符串拆分成小块时，每个块的数字一定不要以零开头，除非这个块是数字 0 本身。

// 返回从 S 拆分出来的任意一组斐波那契式的序列块，如果不能拆分则返回 []。

//

// 示例 1：

// 输入："123456579"
// 输出：[123,456,579]
// 示例 2：

// 输入: "11235813"
// 输出: [1,1,2,3,5,8,13]
// 示例 3：

// 输入: "112358130"
// 输出: []
// 解释: 这项任务无法完成。
// 示例 4：

// 输入："0123"
// 输出：[]
// 解释：每个块的数字不能以零开头，因此 "01"，"2"，"3" 不是有效答案。
// 示例 5：

// 输入: "1101111"
// 输出: [110, 1, 111]
// 解释: 输出 [11,0,11,11] 也同样被接受。
//

// 提示：

// 1 <= S.length <= 200
// 字符串 S 中只含有数字。

/**
 * @param {string} num
 * @return {number[]}
 */

// 此题和 306一模一样
var splitIntoFibonacci = function (num) {
  if (num.length < 3) return false;

  let dfs = (num1, num2, num, res) => {
    res.push(num1);
    if (num === "") {
      res.push(num2);
      return res;
    }
    for (let k = 1; k <= num.length; k++) {
      let num3 = num.slice(0, k);
      if (num3.startsWith("0") && num3.length > 1) break;
      if (Number(num3) > 2 ** 31 - 1) break;

      if (
        Number(num1) + Number(num2) == Number(num3) &&
        dfs(num2, num3, num.slice(k), res).length
      ) {
        return res;
      }
    }
    res = [];
    return res;
  };

  for (let i = 1; i <= num.length - 2; i++) {
    let num1 = num.slice(0, i);
    if (num1.startsWith("0") && num1.length > 1) break;
    // 需加上判断是否小于 2**31 -1
    // 否则 "539834657215398346785398346991079669377161950407626991734534318677529701785098211336528511"
    // 用例不通过
    if (Number(num1) > 2 ** 31 - 1) break;
    for (let j = i + 1; j <= num.length - 1; j++) {
      let num2 = num.slice(i, j);
      if (num2.startsWith("0") && num2.length > 1) break;
      if (Number(num2) > 2 ** 31 - 1) break;
      let res = dfs(num1, num2, num.slice(j), []);
      if (res.length) {
        return res;
      }
    }
  }
  return [];
};

// 官方题解 以后再看

var splitIntoFibonacci = function (num) {
  const list = new Array().fill(0);
  backtrack(list, num, num.length, 0, 0, 0);
  return list;
};

const backtrack = (list, num, length, index, sum, prev) => {
  if (index === length) {
    return list.length >= 3;
  }
  let currLong = 0;
  for (let i = index; i < length; i++) {
    if (i > index && num[index] === "0") {
      break;
    }
    currLong = currLong * 10 + num[i].charCodeAt() - "0".charCodeAt();
    if (currLong > Math.pow(2, 31) - 1) {
      break;
    }
    let curr = currLong;
    if (list.length >= 2) {
      if (curr < sum) {
        continue;
      } else if (curr > sum) {
        break;
      }
    }
    list.push(curr);
    if (backtrack(list, num, length, i + 1, prev + curr, curr)) {
      return true;
    } else {
      list.splice(list.length - 1, 1);
    }
  }
  return false;
};

// 链接：https://leetcode-cn.com/problems/split-array-into-fibonacci-sequence/solution/jiang-shu-zu-chai-fen-cheng-fei-bo-na-qi-ts6c/
