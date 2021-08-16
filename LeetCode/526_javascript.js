// 假设有从 1 到 N 的 N 个整数，如果从这 N 个数字中成功构造出一个数组，使得数组的第 i 位 (1 <= i <= N) 满足如下两个条件中的一个，我们就称这个数组为一个优美的排列。条件：

// 第 i 位的数字能被 i 整除
// i 能被第 i 位上的数字整除
// 现在给定一个整数 N，请问可以构造多少个优美的排列？

// 示例1:

// 输入: 2
// 输出: 2
// 解释:

// 第 1 个优美的排列是 [1, 2]:
//   第 1 个位置（i=1）上的数字是1，1能被 i（i=1）整除
//   第 2 个位置（i=2）上的数字是2，2能被 i（i=2）整除

// 第 2 个优美的排列是 [2, 1]:
//   第 1 个位置（i=1）上的数字是2，2能被 i（i=1）整除
//   第 2 个位置（i=2）上的数字是1，i（i=2）能被 1 整除
// 说明:

// N 是一个正整数，并且不会超过15。

// dfs 排列组合

/**
 * @param {number} N
 * @return {number}
 */

//  执行用时：792 ms, 在所有 JavaScript 提交中击败了5.09%的用户
//  内存消耗：43.9 MB, 在所有 JavaScript 提交中击败了22.03%的用户
var countArrangement = function (N) {
  let res = 0;
  let dfs = (arr, n) => {
    for (let i = 1; i <= arr.length; i++) {
      if (i % arr[i - 1] !== 0 && arr[i - 1] % i !== 0) {
        return;
      }
    }
    if (arr.length == n) {
      res++;
    }
    for (let j = 1; j <= n; j++) {
      if (arr.includes(j)) {
        continue;
      }
      dfs([...arr, j], n);
    }
  };
  for (let i = 1; i <= N; i++) {
    dfs([i], N);
  }
  return res;
};

// 剪枝优化 减少时间复杂度
// 执行用时：220 ms, 在所有 JavaScript 提交中击败了35.59%的用户
// 内存消耗：43.4 MB, 在所有 JavaScript 提交中击败了28.81%的用户
var countArrangement = function (N) {
  let res = 0;
  // 初始化所有字都没有接触过
  let visited = new Array(N).fill(false);
  let dfs = (arr, n) => {
    if (arr.length == n) {
      res++;
      return;
    }
    for (let j = 1; j <= n; j++) {
      if (visited[j - 1]) {
        continue;
      }
      if (j % (arr.length + 1) == 0 || (arr.length + 1) % j == 0) {
        visited[j - 1] = true;
        dfs([...arr, j], n);
        visited[j - 1] = false;
      }
    }
  };
  dfs([], N);
  return res;
};

// 动态规划 ...
