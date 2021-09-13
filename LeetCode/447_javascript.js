// 给定平面上 n 对 互不相同 的点 points ，其中 points[i] = [xi, yi] 。回旋镖 是由点 (i, j, k) 表示的元组 ，其中 i 和 j 之间的距离和 i 和 k 之间的距离相等（需要考虑元组的顺序）。

// 返回平面上所有回旋镖的数量。

// 示例 1：

// 输入：points = [[0,0],[1,0],[2,0]]
// 输出：2
// 解释：两个回旋镖为 [[1,0],[0,0],[2,0]] 和 [[1,0],[2,0],[0,0]]
// 示例 2：

// 输入：points = [[1,1],[2,2],[3,3]]
// 输出：2
// 示例 3：

// 输入：points = [[1,1]]
// 输出：0

// 提示：

// n == points.length
// 1 <= n <= 500
// points[i].length == 2
// -104 <= xi, yi <= 104
// 所有点都 互不相同

// 2021.09.13 每日一题
/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function (points) {
  if (points.length < 3) return 0;
  let n = points.length;
  let res = 0;
  for (let i = 0; i < n; i++) {
    let hash = {};
    for (let j = 0; j < n; j++) {
      if (i != j) {
        let x = (points[i][0] - points[j][0]) ** 2;
        let y = (points[i][1] - points[j][1]) ** 2;
        let distance = x + y;
        // 使用hash记录 距离point[i]点相同的距离的点的个数
        // 只要相同的点的个数>=2 就可以形成回旋镖
        if (hash[distance]) {
          hash[distance] += 1;
        } else {
          hash[distance] = 1;
        }
      }
    }
    //  遍历hash值的value
    for (let value of Object.values(hash)) {
      if (value >= 2) {
        res += value * (value - 1);
      }
    }
  }
  return res;
};
