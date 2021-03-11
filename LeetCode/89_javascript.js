// 格雷编码是一个二进制数字系统，在该系统中，两个连续的数值仅有一个位数的差异。

// 给定一个代表编码总位数的非负整数 n，打印其格雷编码序列。即使有多个不同答案，你也只需要返回其中一种。

// 格雷编码序列必须以 0 开头。

//

// 示例 1:

// 输入: 2
// 输出: [0,1,3,2]
// 解释:
// 00 - 0
// 01 - 1
// 11 - 3
// 10 - 2

// 对于给定的 n，其格雷编码序列并不唯一。
// 例如，[0,2,3,1] 也是一个有效的格雷编码序列。

// 00 - 0
// 10 - 2
// 11 - 3
// 01 - 1
// 示例 2:

// 输入: 0
// 输出: [0]
// 解释: 我们定义格雷编码序列必须以 0 开头。
//      给定编码总位数为 n 的格雷编码序列，其长度为 2n。当 n = 0 时，长度为 20 = 1。
//      因此，当 n = 0 时，其格雷编码序列为 [0]。

/**
 * @param {number} n
 * @return {number[]}
 */

// 理论可以完成 但超出最大内存
// 深度优先搜索
var grayCode = function (n) {
  let result = [0];

  let hash = {
    0: true,
  };

  let dfs = tempArray => {
    if (tempArray.length >= 2 ** n) {
      return tempArray;
    }

    for (let i = 0; i < n; i++) {
      // 1 << i 右进位 i步 相等于 2 ** i
      // ^ 异或表示 当两者相同 返回0 不同返回1
      let next = (1 << i) ^ tempArray[tempArray.length - 1];
      if (hash[next]) continue;
      hash[next] = true;
      dfs([...tempArray, next]);
    }
  };
  return dfs(result);
};

var grayCode = function (n) {
  let result = [];
  for (let i = 0; i < 1 << n; i++) {
    result.push(i ^ (i >> 1));
  }
  return result;
};
