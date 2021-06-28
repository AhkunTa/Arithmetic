// 给你一个数组 routes ，表示一系列公交线路，其中每个 routes[i] 表示一条公交线路，第 i 辆公交车将会在上面循环行驶。

// 例如，路线 routes[0] = [1, 5, 7] 表示第 0 辆公交车会一直按序列 1 -> 5 -> 7 -> 1 -> 5 -> 7 -> 1 -> ... 这样的车站路线行驶。
// 现在从 source 车站出发（初始时不在公交车上），要前往 target 车站。 期间仅可乘坐公交车。

// 求出 最少乘坐的公交车数量 。如果不可能到达终点车站，返回 -1 。

//

// 示例 1：

// 输入：routes = [[1,2,7],[3,6,7]], source = 1, target = 6
// 输出：2
// 解释：最优策略是先乘坐第一辆公交车到达车站 7 , 然后换乘第二辆公交车到车站 6 。
// 示例 2：

// 输入：routes = [[7,12],[4,5,15],[6],[15,19],[9,12,13]], source = 15, target = 12
// 输出：-1
//

// 提示：

// 1 <= routes.length <= 500.
// 1 <= routes[i].length <= 105
// routes[i] 中的所有值 互不相同
// sum(routes[i].length) <= 105
// 0 <= routes[i][j] < 106
// 0 <= source, target < 106

/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
// 最后两个用例数据太多 用时太长没跑过  43/45
var numBusesToDestination = function (routes, source, target) {
  if (source == target) {
    return 0;
  }
  // 访问过公交站点
  let visited = {};
  // 访问过公交路线
  let map = {};
  let queue = [source];
  let step = 0;
  while (queue.length) {
    step++;
    let length = queue.length;
    for (let i = 0; i < length; i++) {
      let temp = queue.shift();
      // 访问过的节点 不在遍历
      if (!visited[temp]) {
        for (let j = 0; j < routes.length; j++) {
          // 访问过的路线也不再遍历
          if (!map[j] && routes[j].includes(temp)) {
            for (let k = 0; k < routes[j].length; k++) {
              // 无需在判断重复节点 visited已经记录了该节点
              // if(routes[j][k] == temp )break;
              if (routes[j][k] == target) {
                return step;
              }
              queue.push(routes[j][k]);
            }
            map[j] = true;
          }
        }
        visited[temp] = true;
      }
    }
  }
  return -1;
};

// 遍历线路
/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function (routes, source, target) {
  if (source == target) {
    return 0;
  }
  // 访问过公交路线
  let visited = {};
  // 每个站点对应的公交线路
  // 一个站点可能有多个公交线路
  let map = {};
  let queue = [source];
  for (let i = 0; i < routes.length; i++) {
    for (let j = 0; j < routes[i].length; j++) {
      if (map[routes[i][j]] == undefined) {
        map[routes[i][j]] = [i];
      } else {
        map[routes[i][j]].push(i);
      }
    }
  }
  let step = 0;
  while (queue.length) {
    step++;
    let length = queue.length;
    for (let i = 0; i < length; i++) {
      let temp = queue.shift();
      // 遍历公交线路
      for (let item of map[temp]) {
        // 访问过线路直接跳过
        if (!visited[item]) {
          for (let j = 0; j < routes[item].length; j++) {
            if (routes[item][j] == target) {
              return step;
            }
            // 访问过的公交线路会直接跳过 此处直接push 不需校验重复值
            queue.push(routes[item][j]);
          }
          visited[item] = true;
        }
      }
    }
  }
  return -1;
};
