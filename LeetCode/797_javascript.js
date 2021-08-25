// 给你一个有 n 个节点的 有向无环图（DAG），请你找出所有从节点 0 到节点 n-1 的路径并输出（不要求按特定顺序）

// 二维数组的第 i 个数组中的单元都表示有向图中 i 号节点所能到达的下一些节点，空就是没有下一个结点了。

// 译者注：有向图是有方向的，即规定了 a→b 你就不能从 b→a 。

//

// 示例 1：

// 输入：graph = [[1,2],[3],[3],[]]
// 输出：[[0,1,3],[0,2,3]]
// 解释：有两条路径 0 -> 1 -> 3 和 0 -> 2 -> 3
// 示例 2：

// 输入：graph = [[4,3,1],[3,2,4],[3],[4],[]]
// 输出：[[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]
// 示例 3：

// 输入：graph = [[1],[]]
// 输出：[[0,1]]
// 示例 4：

// 输入：graph = [[1,2,3],[2],[3],[]]
// 输出：[[0,1,2,3],[0,2,3],[0,3]]
// 示例 5：

// 输入：graph = [[1,3],[2],[3],[]]
// 输出：[[0,1,2,3],[0,3]]
//

// 提示：

// n == graph.length
// 2 <= n <= 15
// 0 <= graph[i][j] < n
// graph[i][j] != i（即，不存在自环）
// graph[i] 中的所有元素 互不相同
// 保证输入为 有向无环图（DAG）
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
// dfs
var allPathsSourceTarget = function (graph) {
  let n = graph.length;
  let res = [];

  // 建图
  let map = new Map();
  for (let i = 0; i < n; i++) {
    map.set(i, graph[i]);
  }

  // start 为开始节点 path 为通过的总路径
  // 如果为有环图 那还需判断是否已遍历过 此题为无环 无需判断
  let dfs = (start, path) => {
    if (start == n - 1) {
      res.push(path);
    }
    if (map.get(start) !== undefined) {
      let arr = map.get(start);
      for (let i = 0; i < arr.length; i++) {
        dfs(arr[i], [...path, arr[i]]);
      }
    }
  };

  dfs(0, [0]);
  return res;
};

// bfs
var allPathsSourceTarget = function (graph) {
  let n = graph.length;

  let res = [];
  // 设队列从 0 开始
  let queue = [0];
  // bfs 需设定一个存储队列的数组
  let path = [[0]];

  while (queue.length) {
    let node = queue.shift();
    let p = path.shift();

    graph[node].forEach(item => {
      if (item == n - 1) {
        res.push([...p, item]);
      } else {
        queue.push(item);
        path.push([...p, item]);
      }
    });
  }

  return res;
};
