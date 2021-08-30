// 给定一个正整数数组 w ，其中 w[i] 代表下标 i 的权重（下标从 0 开始），请写一个函数 pickIndex ，它可以随机地获取下标 i，选取下标 i 的概率与 w[i] 成正比。

// 例如，对于 w = [1, 3]，挑选下标 0 的概率为 1 / (1 + 3) = 0.25 （即，25%），而选取下标 1 的概率为 3 / (1 + 3) = 0.75（即，75%）。

// 也就是说，选取下标 i 的概率为 w[i] / sum(w) 。

//

// 示例 1：

// 输入：
// ["Solution","pickIndex"]
// [[[1]],[]]
// 输出：
// [null,0]
// 解释：
// Solution solution = new Solution([1]);
// solution.pickIndex(); // 返回 0，因为数组中只有一个元素，所以唯一的选择是返回下标 0。
// 示例 2：

// 输入：
// ["Solution","pickIndex","pickIndex","pickIndex","pickIndex","pickIndex"]
// [[[1,3]],[],[],[],[],[]]
// 输出：
// [null,1,1,1,1,0]
// 解释：
// Solution solution = new Solution([1, 3]);
// solution.pickIndex(); // 返回 1，返回下标 1，返回该下标概率为 3/4 。
// solution.pickIndex(); // 返回 1
// solution.pickIndex(); // 返回 1
// solution.pickIndex(); // 返回 1
// solution.pickIndex(); // 返回 0，返回下标 0，返回该下标概率为 1/4 。

// 由于这是一个随机问题，允许多个答案，因此下列输出都可以被认为是正确的:
// [null,1,1,1,1,0]
// [null,1,1,1,1,1]
// [null,1,1,1,0,0]
// [null,1,1,1,0,1]
// [null,1,0,1,0,0]
// ......
// 诸若此类。
//

// 提示：

// 1 <= w.length <= 10000
// 1 <= w[i] <= 10^5
// pickIndex 将被调用不超过 10000 次

/**
 * @param {number[]} w
 */
// 1 直接计算比例 如 [1,2,3,4]
//   计算出 所有数字除以total 10    [0.1,0.2,0.3,0.4]

// 之后再利用Math.random 获取一个随机值 random
// 然后 计算其区间
var Solution = function (w) {
  this.total = 0;
  this.arr = [];
  for (let i = 0; i < w.length; i++) {
    this.total += w[i];
  }
  for (let j = 0; j < w.length; j++) {
    this.arr[j] = w[j] / this.total;
  }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  let random = Math.random();
  let total = 0;
  for (let i = 0; i < this.arr.length; i++) {
    total += this.arr[i];
    if (random <= total) {
      return i;
    }
  }
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
