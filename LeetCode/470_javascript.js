// 已有方法 rand7 可生成 1 到 7 范围内的均匀随机整数，试写一个方法 rand10 生成 1 到 10 范围内的均匀随机整数。

// 不要使用系统的 Math.random() 方法。

//

// 示例 1:

// 输入: 1
// 输出: [7]
// 示例 2:

// 输入: 2
// 输出: [8,4]
// 示例 3:

// 输入: 3
// 输出: [8,1,10]
//

// 提示:

// rand7 已定义。
// 传入参数: n 表示 rand10 的调用次数。
//

// 进阶:

// rand7()调用次数的 期望值 是多少 ?
// 你能否尽量少调用 rand7() ?

/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
//  公式 (randomX -1 ) * X + randomX 可以求得 所有概率等概率出现

// (rand7() - 1) * 7 + rand7(); 可以求的 1-49 内的数字都是等概率的
var rand10 = function () {
  let num = (rand7() - 1) * 7 + rand7();

  while (num > 40) {
    num = (rand7() - 1) * 7 + rand7();
  }
  return (num % 10) + 1;
};
