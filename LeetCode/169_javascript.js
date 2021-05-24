// 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。

//

// 示例 1：

// 输入：[3,2,3]
// 输出：3
// 示例 2：

// 输入：[2,2,1,1,1,2,2]
// 输出：2
//

// 进阶：

// 尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。

// 1 哈希 获取每个元素出现次数 在循环其次数取出大于 n/2的值 就是多数元素的值
// 时间 On  空间 On
var majorityElement = function (nums) {
  let hash = {};
  nums.forEach(element => {
    hash[element] = hash[element] ? hash[element] + 1 : 1;
  });

  let res = Object.entries(hash).find(ele => {
    return ele[1] > nums.length / 2;
  });
  return res[0][0];
};

// 2 一定存在多数元素 那么排序后的值（不管从小到大还是从大到小排序）中间值一定数多数元素
// 时间 Onlogn 空间O1
var majorityElement = function (nums) {
  nums.sort((a, b) => a - b);
  return nums[Math.floor(nums.length / 2)];
};

// 3 Boyer-Moore 投票算法
// 候选人(cand_num)初始化为nums[0]，票数count初始化为1。
// 当遇到与cand_num相同的数，则票数count = count + 1，否则票数count = count - 1。
// 当票数count为0时，更换候选人，并将票数count重置为1。
// 遍历完数组后，cand_num即为最终答案。

// 投票法是遇到相同的则票数 + 1，遇到不同的则票数 - 1。
// 且“多数元素”的个数> ⌊ n/2 ⌋，其余元素的个数总和<= ⌊ n/2 ⌋。
// 因此“多数元素”的个数 - 其余元素的个数总和 的结果 肯定 >= 1。
// 这就相当于每个“多数元素”和其他元素 两两相互抵消，抵消到最后肯定还剩余至少1个“多数元素”。
// 无论数组是1 2 1 2 1，亦或是1 2 2 1 1，总能得到正确的候选人。
// 链接：https://leetcode-cn.com/problems/majority-element/solution/3chong-fang-fa-by-gfu-2/

var majorityElement = function (nums) {
  let cardNum = nums[0],
    count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (cardNum == nums[i]) {
      count++;
    } else if (--count == 0) {
      cardNum = nums[i];
      count = 1;
    }
  }
  return cardNum;
};
