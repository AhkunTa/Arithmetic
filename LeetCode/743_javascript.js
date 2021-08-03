// 有 n 个网络节点，标记为 1 到 n。

// 给你一个列表 times，表示信号经过 有向 边的传递时间。 times[i] = (ui, vi, wi)，其中 ui 是源节点，vi 是目标节点， wi 是一个信号从源节点传递到目标节点的时间。

// 现在，从某个节点 K 发出一个信号。需要多久才能使所有节点都收到信号？如果不能使所有节点收到信号，返回 -1 。

//

// 示例 1：

// 输入：times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
// 输出：2
// 示例 2：

// 输入：times = [[1,2,1]], n = 2, k = 1
// 输出：1
// 示例 3：

// 输入：times = [[1,2,1]], n = 2, k = 2
// 输出：-1
//

// 提示：

// 1 <= k <= n <= 100
// 1 <= times.length <= 6000
// times[i].length == 3
// 1 <= ui, vi <= n
// ui != vi
// 0 <= wi <= 100
// 所有 (ui, vi) 对都 互不相同（即，不含重复边）

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

// Dijkstra 算法
// 单源最短路径问题

var networkDelayTime = function (times, n, k) {
  // 将 g[i][j] 设为路径 i -> j 的最短路径 若无连接点 即为 Infinity
  let g = Array.from(new Array(n), (arr) => new Array(n).fill(Infinity));

  for (let [x, y, value] of times) {
    // 从0开始
    g[x - 1][y - 1] = value;
  }
  // 设是否使用数组 全部未使用
  let used = new Array(n).fill(false);
  // 设置从原点到各个点的最小距离
  let distance = new Array(n).fill(Infinity);
  // 到原点的距离为 0
  distance[k - 1] = 0;

  for (let i = 0; i < n; i++) {
    var x = -1;
    // 获取上一次的最短路径 x的值
    for (let j = 0; j < n; j++) {
      if (!used[j] && (x == -1 || distance[j] < distance[x])) {
        x = j;
      }
    }
    used[x] = true;
    // 更新所有距离最小值
    for (let j = 0; j < n; j++) {
      distance[j] = Math.min(distance[j], distance[x] + g[x][j]);
    }
  }

  let res = Math.max(...distance);

  return res === Infinity ? -1 : res;
};