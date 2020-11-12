// 有 n 个城市通过 m 个航班连接。每个航班都从城市 u 开始，以价格 w 抵达 v。

// 现在给定所有的城市和航班，以及出发城市 src 和目的地 dst，你的任务是找到从 src 到 dst 最多经过 k 站中转的最便宜的价格。 如果没有这样的路线，则输出 -1。
// 示例 1：

// 输入: 
// n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
// src = 0, dst = 2, k = 1
// 输出: 200
// 解释: 
// 城市航班图如下


// 从城市 0 到城市 2 在 1 站中转以内的最便宜价格是 200，如图中红色所示。
// 示例 2：

// 输入: 
// n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
// src = 0, dst = 2, k = 0
// 输出: 500
// 解释: 
// 城市航班图如下


// 从城市 0 到城市 2 在 0 站中转以内的最便宜价格是 500，如图中蓝色所示。
//  

// 提示：

// n 范围是 [1, 100]，城市标签从 0 到 n - 1
// 航班数量范围是 [0, n * (n - 1) / 2]
// 每个航班的格式 (src, dst, price)
// 每个航班的价格范围是 [1, 10000]
// k 范围是 [0, n - 1]
// 航班没有重复，且不存在自环

// 图片链接：https://leetcode-cn.com/problems/cheapest-flights-within-k-stops



// 回溯算法
var findCheapestPrice = function(n, flights, src, dst, K) {

  let minPrice = Infinity;

  let dfs= (src, dst, k, price) =>{
      if(k <= K+1 && src == dst){
          minPrice = Math.min(minPrice,price)
          return;
      }
      if(k >= K+1 || price > minPrice){
          return;
      }
      for(let i=0; i<flights.length; i++){
          if(src == flights[i][0]){
              dfs(flights[i][1], dst, k+1, price + flights[i][2])
          }
      }
  }
  dfs(src,dst,0,0)
  return minPrice == Infinity ? -1 : minPrice;
};

// 动态规划 dp  **

var findCheapestPrice = function(n, flights, src, dst, K) {

  let dp = Array.from(new Array(n),() => new Array(flights.length).fill(Infinity))

  for (let i = 0; i < flights.length; i++) {
    if (flights[i][0] === src) {
      dp[flights[i][1]][0] = flights[i][2];
    }
  }

  for (let k = 1; k <= K; k++) {
    for (let flight of flights) {
      if (flight[0] !== Infinity) {
        dp[flight[1]][k] = Math.min(dp[flight[1]][k], dp[flight[0]][k - 1] + flight[2]);
      }
    }
  }
  
  return dp[dst][K] === Infinity ? -1 : dp[dst][K];

};



// 贪心算法 Dijkstra
// Dijkstra  寻找源到目标的最低花费


