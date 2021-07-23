// 给你一个二维整数数组 ranges 和两个整数 left 和 right 。每个 ranges[i] = [starti, endi] 表示一个从 starti 到 endi 的 闭区间 。

// 如果闭区间 [left, right] 内每个整数都被 ranges 中 至少一个 区间覆盖，那么请你返回 true ，否则返回 false 。

// 已知区间 ranges[i] = [starti, endi] ，如果整数 x 满足 starti <= x <= endi ，那么我们称整数x 被覆盖了。

//

// 示例 1：

// 输入：ranges = [[1,2],[3,4],[5,6]], left = 2, right = 5
// 输出：true
// 解释：2 到 5 的每个整数都被覆盖了：
// - 2 被第一个区间覆盖。
// - 3 和 4 被第二个区间覆盖。
// - 5 被第三个区间覆盖。
// 示例 2：

// 输入：ranges = [[1,10],[10,20]], left = 21, right = 21
// 输出：false
// 解释：21 没有被任何一个区间覆盖。
//

// 提示：

// 1 <= ranges.length <= 50
// 1 <= starti <= endi <= 50
// 1 <= left <= right <= 50

/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
// 时间 Onlogn sort排序 是 Onlogn
// 空间 O1
var isCovered = function (ranges, left, right) {
  ranges.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < ranges.length; i++) {
    let start = ranges[i][0];
    let end = ranges[i][1];
    // 每次判断 连续区间长度 来更新最大的连续区间
    while (i + 1 < ranges.length && ranges[i + 1][0] - 1 <= end) {
      end = Math.max(ranges[i + 1][1], end);
      i++;
    }
    // 判断start 和end 是否在连续区间内
    if (start <= left && end >= right) {
      return true;
    }
  }
  return false;
};

// 排序优化
var isCovered = function (ranges, left, right) {
  ranges.sort((a, b) => a[0] - b[0]);
  for (let [l, r] of ranges) {
    // 如果 left 在小区间内 那么表示 [left,r] 这个区间 符合标准
    // 更新 left
    if (l <= left && left <= r) {
      left = r + 1;
    }
  }

  return left > right;
};
