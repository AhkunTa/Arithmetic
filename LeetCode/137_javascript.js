// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现了三次。找出那个只出现了一次的元素。

// 说明：

// 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

// 示例 1:

// 输入: [2,2,3,2]
// 输出: 3
// 示例 2:

// 输入: [0,1,0,1,0,1,99]
// 输出: 99

// 利用 其他元素都出现三次

/**
 * @param {number[]} nums
 * @return {number}
 */
// 简单的hash去重 但会有额外空间
// 题目需要不使用额外空间
// 不推荐
var singleNumber = function (nums) {
  let map = new Map();

  nums.forEach(item => {
    if (map.get(item)) {
      map.set(item, map.get(item) + 1);
    } else {
      map.set(item, 1);
    }
  });

  for (let [key, value] of map.entries()) {
    if (value === 1) {
      return key;
    }
  }
};

// 一生之敌位运算
var singleNumber = function (nums) {
  let a = 0,
    b = 0;
  for (let i = 0; i < nums.length; i++) {
    b = (b ^ nums[i]) & ~a;
    a = (a ^ nums[i]) & ~b;
  }
  return b;
};
// 0 ^ x = x,
// x ^ x = 0；
// x & ~x = 0,
// x & ~0 =x;
// -那么就是很好解释上面的代码了。一开始a = 0, b = 0;
// x第一次出现后，a = (a ^ x) & ~b的结果为 a = x, b = (b ^ x) & ~a的结果为此时因为a = x了，所以b = 0。
// x第二次出现：a = (a ^ x) & ~b, a = (x ^ x) & ~0, a = 0; b = (b ^ x) & ~a 化简， b = (0 ^ x) & ~0 ,b = x;
// x第三次出现：a = (a ^ x) & ~b， a = (0 ^ x) & ~x ,a = 0; b = (b ^ x) & ~a 化简， b = (x ^ x) & ~0 , b = 0;所以出现三次同一个数，a和b最终都变回了0.
// 只出现一次的数，按照上面x第一次出现的规律可知a = x, b = 0;因此最后返回a.
// https://leetcode-cn.com/problems/single-number-ii/solution/single-number-ii-mo-ni-san-jin-zhi-fa-by-jin407891/
