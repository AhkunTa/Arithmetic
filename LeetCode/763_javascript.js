// 字符串 S 由小写字母组成。我们要把这个字符串划分为尽可能多的片段，同一字母最多出现在一个片段中。返回一个表示每个字符串片段的长度的列表。

//

// 示例：

// 输入：S = "ababcbacadefegdehijhklij"
// 输出：[9,7,8]
// 解释：
// 划分结果为 "ababcbaca", "defegde", "hijhklij"。
// 每个字母最多出现在一个片段中。
// 像 "ababcbacadefegde", "hijhklij" 的划分是错误的，因为划分的片段数较少。
//

// 提示：

// S的长度在[1, 500]之间。
// S只包含小写字母 'a' 到 'z' 。
// 通过次数53,821提交次数70,267

/**
 * @param {string} S
 * @return {number[]}
 */
// 贪心
var partitionLabels = function (S) {
  // 获取每个元素的区间范围
  // 再合并区间
  let arr = [];
  for (let i = 0; i < S.length; i++) {
    arr.push([S.indexOf(S[i]), S.lastIndexOf(S[i])]);
  }
  arr.sort((a, b) => a[0] - b[0]);
  let end = arr[0][1];
  let start = arr[0][0];
  let res = [];
  for (let j = 1; j < arr.length; j++) {
    if (arr[j][0] > end) {
      res.push(end - start + 1);
      start = arr[j][0];
      end = arr[j][1];
    } else {
      end = Math.max(end, arr[j][1]);
    }
  }
  res.push(end - start + 1);
  return res;
};

// Map 方法
var partitionLabels = function (S) {
  // 获取每个元素最后一次的位置
  let map = new Map();
  for (let i = 0; i < S.length; i++) {
    map.set(S[i], i);
  }
  let res = [],
    end = 0,
    start = 0;
  for (let j = 0; j < S.length; j++) {
    end = Math.max(end, map.get(S[j]));

    if (end == j) {
      res.push(end - start + 1);
      start = j + 1;
    }
  }
  return res;
};
