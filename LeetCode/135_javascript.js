// 老师想给孩子们分发糖果，有 N 个孩子站成了一条直线，老师会根据每个孩子的表现，预先给他们评分。

// 你需要按照以下要求，帮助老师给这些孩子分发糖果：

// 每个孩子至少分配到 1 个糖果。
// 评分更高的孩子必须比他两侧的邻位孩子获得更多的糖果。
// 那么这样下来，老师至少需要准备多少颗糖果呢？

//

// 示例 1：

// 输入：[1,0,2]
// 输出：5
// 解释：你可以分别给这三个孩子分发 2、1、2 颗糖果。
// 示例 2：

// 输入：[1,2,2]
// 输出：4
// 解释：你可以分别给这三个孩子分发 1、2、1 颗糖果。
//      第三个孩子只得到 1 颗糖果，这已满足上述两个条件。

/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  // 先所有孩子赋值1个糖果
  let arr = new Array(ratings.length).fill(1);
  // 循环判断后一个孩子是否比前一个孩子分高 若分高 则糖果数为前一个孩子的分数加一
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      arr[i] = arr[i - 1] + 1;
    }
  }

  // 反向循环判断前一个孩子是否比后一个孩子分高 若分高 则糖果数为后一个孩子的分数加一
  for (let j = ratings.length - 2; j >= 0; j--) {
    if (ratings[j] > ratings[j + 1]) {
      arr[j] = Math.max(arr[j], arr[j + 1] + 1);
    }
  }

  let res = arr.reduce((acc, cur) => acc + cur);

  return res;
};
