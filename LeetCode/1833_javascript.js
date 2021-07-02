// 夏日炎炎，小男孩 Tony 想买一些雪糕消消暑。

// 商店中新到 n 支雪糕，用长度为 n 的数组 costs 表示雪糕的定价，其中 costs[i] 表示第 i 支雪糕的现金价格。Tony 一共有 coins 现金可以用于消费，他想要买尽可能多的雪糕。

// 给你价格数组 costs 和现金量 coins ，请你计算并返回 Tony 用 coins 现金能够买到的雪糕的 最大数量 。

// 注意：Tony 可以按任意顺序购买雪糕。

//

// 示例 1：

// 输入：costs = [1,3,2,4,1], coins = 7
// 输出：4
// 解释：Tony 可以买下标为 0、1、2、4 的雪糕，总价为 1 + 3 + 2 + 1 = 7
// 示例 2：

// 输入：costs = [10,6,8,7,7,8], coins = 5
// 输出：0
// 解释：Tony 没有足够的钱买任何一支雪糕。
// 示例 3：

// 输入：costs = [1,6,3,1,2,5], coins = 20
// 输出：6
// 解释：Tony 可以买下所有的雪糕，总价为 1 + 6 + 3 + 1 + 2 + 5 = 18 。
//

// 提示：

// costs.length == n
// 1 <= n <= 105
// 1 <= costs[i] <= 105
// 1 <= coins <= 108
/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
  // 以下三种排序全都超时
  // 冒泡
  // for(let i=0; i<costs.length-1; i++){
  //   for(let j=i+1; j<costs.length; j++){
  //     if(costs[i] >costs[j]){
  //       [costs[i],costs[j]] = [costs[j],costs[i]]
  //     }
  //   }
  // }
  // 插入
  // for(let i=0; i<costs.length; i++){
  //   let minIndex = i;
  //   for(let j=i+1; j<costs.length; j++){
  //     if(costs[minIndex] >costs[j]){
  //       minIndex = j;
  //     }
  //   }
  //   [costs[i],costs[minIndex]] = [costs[minIndex],costs[i]]
  // }
  // 快排
  // function quickSort(arr) {
  //   if (arr.length <= 1) {
  //     return arr;
  //   }
  //   let middle = arr.splice(Math.floor(arr.length / 2), 1)[0];
  //   let left = [];
  //   let right = [];
  //   while (arr.length) {
  //     let item = arr.shift();
  //     if (item < middle) {
  //       left.push(item);
  //     } else {
  //       right.push(item);
  //     }
  //   }
  //   return quickSort(left).concat(middle, quickSort(right));
  // }
  // costs = quickSort(costs);

  let res = 0;
  let value = 0;
  for (let i = 0; i < costs.length; i++) {
    value += costs[i];
    if (value <= coins) {
      res++;
    } else {
      break;
    }
  }
  return res;
};

// 计数排序
var maxIceCream = function (costs, coins) {
  let tempArr = new Array(10000).fill(0);
  for (let cost of costs) {
    tempArr[cost]++;
  }
  let count = 0;
  for (let i = 1; i <= 100000; i++) {
    if (coins >= i) {
      let curCount = Math.min(tempArr[i], Math.floor(coins / i));
      count += curCount;
      coins -= i * curCount;
    } else {
      break;
    }
  }
  return count;
};
