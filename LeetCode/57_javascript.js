// 给出一个无重叠的 ，按照区间起始端点排序的区间列表。

// 在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。

//

// 示例 1：

// 输入：intervals = [[1,3],[6,9]], newInterval = [2,5]
// 输出：[[1,5],[6,9]]
// 示例 2：

// 输入：intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// 输出：[[1,2],[3,10],[12,16]]
// 解释：这是因为新的区间 [4,8] 与 [3,5],[6,7],[8,10] 重叠。

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
// 同 56题
var insert = function (intervals, newInterval) {
  intervals.push(newInterval);

  intervals.sort((a, b) => a[0] - b[0]);
  let res = [intervals[0]];
  // let right =
  for (let i = 0; i < intervals.length; i++) {
    let head = intervals[i][0];
    let tail = intervals[i][1];

    if (head <= res[res.length - 1][1]) {
      res[res.length - 1][1] = Math.max(res[res.length - 1][1], tail);
    } else {
      res.push(intervals[i]);
    }
  }
  return res;
};

// 使用双指针
var insert = function (intervals, newInterval) {
  intervals.push(newInterval);
  // 排序
  intervals.sort((a, b) => a[0] - b[0]);
  let res = [];
  let left, right;
  for (let i = 0; i < intervals.length; i++) {
    let j = i + 1;
    right = intervals[i][1];
    left = intervals[i][0];
    while (j < intervals.length && intervals[j][0] <= right) {
      right = Math.max(intervals[j][1], right);
      j++;
    }
    res.push([left, right]);
    // 当while循环不满足时 j多加了1 此处减去
    i = j - 1;
  }
  return res;
};
