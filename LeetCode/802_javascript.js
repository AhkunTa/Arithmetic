// 在有向图中，以某个节点为起始节点，从该点出发，每一步沿着图中的一条有向边行走。如果到达的节点是终点（即它没有连出的有向边），则停止。

// 对于一个起始节点，如果从该节点出发，无论每一步选择沿哪条有向边行走，最后必然在有限步内到达终点，则将该起始节点称作是 安全 的。

// 返回一个由图中所有安全的起始节点组成的数组作为答案。答案数组中的元素应当按 升序 排列。

// 该有向图有 n 个节点，按 0 到 n - 1 编号，其中 n 是 graph 的节点数。图以下述形式给出：graph[i] 是编号 j 节点的一个列表，满足 (i, j) 是图的一条有向边。

//

// 示例 1：

// 输入：graph = [[1,2],[2,3],[5],[0],[5],[],[]]
// 输出：[2,4,5,6]
// 解释：示意图如上。
// 示例 2：

// 输入：graph = [[1,2,3,4],[1,2],[3,4],[0,4],[]]
// 输出：[4]
//

// 提示：

// n == graph.length
// 1 <= n <= 104
// 0 <= graph[i].length <= n
// graph[i] 按严格递增顺序排列。
// 图中可能包含自环。
// 图中边的数目在范围 [1, 4 * 104] 内。

/**
 * @param {number[][]} graph
 * @return {number[]}
 */

// 题目意思是找出所有 无论怎么走都能到达终点的节点 - 即 一个节点的所有路径都能到终点

// 能解但超出时间限制 需做剪枝操作 105 / 112
var eventualSafeNodes = function (graph) {
  let visited = new Array(graph.length).fill(false);
  let res = [];
  let dfs = arr => {
    for (let i = 0; i < arr.length; i++) {
      let tempArr = graph[arr[i]];
      if (visited[arr[i]]) return false;
      visited[arr[i]] = true;
      if (!dfs(tempArr)) {
        return false;
      }
      visited[arr[i]] = false;
    }
    return true;
  };
  for (let i = 0; i < graph.length; i++) {
    if (dfs(graph[i])) {
      res.push(i);
    }
  }
  return res;
};
// dfs 优化循环
var eventualSafeNodes = function (graph) {
  let visited = new Array(graph.length).fill(false);
  let res = [];

  let dfs = index => {
    if (visited[index]) return false;
    visited[index] = true;
    for (let i = 0; i < graph[index].length; i++) {
      if (!dfs(graph[index][i])) {
        return false;
      }
    }
    // 如果上面没有return 表示此处节点能够走到最后那么直接标记为空数组 - 空数组也返回true
    // 如果return false 自然不会将其节点节点复值
    // 此处 将graph 已经走过的点标记为空数组 优化循环
    graph[index] = [];
    visited[index] = false;
    return true;
  };

  for (let i = 0; i < graph.length; i++) {
    if (dfs(i)) {
      res.push(i);
    }
  }
  return res;
};
