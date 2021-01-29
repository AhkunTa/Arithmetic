// 给定一个整数类型的数组 nums，请编写一个能够返回数组 “中心索引” 的方法。

// 我们是这样定义数组 中心索引 的：数组中心索引的左侧所有元素相加的和等于右侧所有元素相加的和。

// 如果数组不存在中心索引，那么我们应该返回 -1。如果数组有多个中心索引，那么我们应该返回最靠近左边的那一个。

//

// 示例 1：

// 输入：
// nums = [1, 7, 3, 6, 5, 6]
// 输出：3
// 解释：
// 索引 3 (nums[3] = 6) 的左侧数之和 (1 + 7 + 3 = 11)，与右侧数之和 (5 + 6 = 11) 相等。
// 同时, 3 也是第一个符合要求的中心索引。
// 示例 2：

// 输入：
// nums = [1, 2, 3]
// 输出：-1
// 解释：
// 数组中不存在满足此条件的中心索引。
//

// 说明：

// nums 的长度范围为 [0, 10000]。
// 任何一个 nums[i] 将会是一个范围在 [-1000, 1000]的整数。

/**
 * @param {number[]} nums
 * @return {number}
 */
// 取左右值比较
var pivotIndex = function (nums) {
  if (nums.length < 3) return -1;
  let left = 0;
  let right = nums.reduce((arr, cur) => {
    return arr + cur;
  });
  right -= nums[0];
  // 此处判断 当中心索引为0 的时候
  // 无判断会导致测试用例  [-1,-1,-1,0,1,1] 不通过
  if (left == right) return 0;

  for (let i = 0; i < nums.length - 1; i++) {
    left += nums[i];
    right -= nums[i + 1];
    if (right == left) {
      return i + 1;
    }
  }
  return -1;
};

// 另一种方法 左边值 * 2 + 中心索引值 == 数组总和
var pivotIndex = function (nums) {
  if (nums.length < 3) return -1;
  let left = 0;
  let sum = nums.reduce((arr, cur) => {
    return arr + cur;
  });

  for (let i = 0; i < nums.length; i++) {
    left += nums[i - 1] || 0;
    if (left * 2 + nums[i] == sum) {
      return i;
    }
  }
  return -1;
};
