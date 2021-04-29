// 给定一位研究者论文被引用次数的数组（被引用次数是非负整数）。编写一个方法，计算出研究者的 h 指数。

// h 指数的定义：h 代表“高引用次数”（high citations），一名科研人员的 h 指数是指他（她）的 （N 篇论文中）总共有 h 篇论文分别被引用了至少 h 次。且其余的 N - h 篇论文每篇被引用次数 不超过 h 次。

// 例如：某人的 h 指数是 20，这表示他已发表的论文中，每篇被引用了至少 20 次的论文总共有 20 篇。

//

// 示例：

// 输入：citations = [3,0,6,1,5]
// 输出：3
// 解释：给定数组表示研究者总共有 5 篇论文，每篇论文相应的被引用了 3, 0, 6, 1, 5 次。
//      由于研究者有 3 篇论文每篇 至少 被引用了 3 次，其余两篇论文每篇被引用 不多于 3 次，所以她的 h 指数是 3。
//

// 提示：如果 h 有多种可能的值，h 指数是其中最大的那个。

// 排序题 将值从大到小 排序 匹配 citations[i] 的值 >= i+1

/**
 * @param {number[]} citations
 * @return {number}
 */

// sort方法排序 最简单的一种方法
var hIndex = function (citations) {
  let h = 0;
  citations.sort((a, b) => b - a);
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= i + 1) {
      h++;
    } else {
      break;
    }
  }
  return h;
};

var hIndex = function (citations) {
  let h = 0;
  // 冒泡
  for (let i = 0; i < citations.length - 1; i++) {
    for (let j = i + 1; j < citations.length; j++) {
      if (citations[i] < citations[j]) {
        [citations[i], citations[j]] = [citations[j], citations[i]];
      }
    }
  }

  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= i + 1) {
      h++;
    } else {
      break;
    }
  }
  return h;
};

// 快速

function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = arr.splice(Math.floor(arr.length / 2), 1)[0];

  let left = [];
  let right = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > mid) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(mid, quickSort(right));
}
quickSort(arr);

// 选择
for (let i = 0; i < citations.length - 1; i++) {
  let maxIndex = i;
  for (let j = i + 1; j < citations.length; j++) {
    if (citations[j] > citations[maxIndex]) {
      maxIndex = j;
    }
  }
  [citations[i], citations[maxIndex]] = [citations[maxIndex], citations[i]];
}

// 归并
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  function merge(left, right) {
    let res = [];
    while (left.length > 0 && right.length > 0) {
      if (left[0] > right[0]) {
        res.push(left.shift(left[0]));
      } else {
        res.push(right.shift(right[0]));
      }
    }
    while (left.length) {
      res.push(left.shift(left[0]));
    }
    while (right.length) {
      res.push(right.shift(right[0]));
    }
    return res;
  }
  return merge(mergeSort(left), mergeSort(right));
}
