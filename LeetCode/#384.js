//  打乱一个没有重复元素的数组。

// 示例:

// // 以数字集合 1, 2 和 3 初始化数组。
// int[] nums = {1,2,3};
// Solution solution = new Solution(nums);

// // 打乱数组 [1,2,3] 并返回结果。任何 [1,2,3]的排列返回的概率应该相同。
// solution.shuffle();

// // 重设数组到它的初始状态[1,2,3]。
// solution.reset();

// // 随机返回数组[1,2,3]打乱后的结果。
// solution.shuffle();


  /**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.nums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  let arr =  [...this.nums];
  let i = arr.length-1;
  while(i >= 0){

      let radomIndex = Math.floor((i+1) * Math.random());
      // arr[radomIndex] 和 arr[i] 互换
      let temp = arr[radomIndex];
      arr[radomIndex] = arr[i]；
      arr[i] = temp;
      i--；
  }

  return arr;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */





  // 洗牌算法
  // cards=['A',2,3,4,5,6,7,8,9,10,'J','Q','K']
  function shuffle(cards) {
    for(let i = cards.length-1; i >= 0; i--) {
      var randomIndex =  Math.floor(i * Math.random())
      // 从 index 为 51 开始， 51 * Math.random() 的范围是 (0, 51)
      // Math.floor 之后的整数范围是 [0, 50] 
      // 我们将 cards[51] 和 前面的随机索引位置的值交换
      // 然后到 50个的时候，和 前面 [0, 49] 中索引取一个随机的 然后交换值
      // 这样下去，交换位置之后 索引为51 和 50 的值就不会变动了
      const temp = cards[randomIndex]
      cards[randomIndex] = cards[i]
      cards[i] = temp
    }
    return cards
  }