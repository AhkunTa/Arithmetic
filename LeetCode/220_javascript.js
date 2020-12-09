// 在整数数组 nums 中，是否存在两个下标 i 和 j，使得 nums [i] 和 nums [j] 的差的绝对值小于等于 t ，且满足 i 和 j 的差的绝对值也小于等于 ķ 。

// 如果存在则返回 true，不存在返回 false。

//  

// 示例 1:

// 输入: nums = [1,2,3,1], k = 3, t = 0
// 输出: true
// 示例 2:

// 输入: nums = [1,0,1,1], k = 1, t = 2
// 输出: true
// 示例 3:

// 输入: nums = [1,5,9,1,5,9], k = 2, t = 3
// 输出: false


// 双重循环 暴力破解 js不超时 但不推荐
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  for(let i=0; i<nums.length-1;i++){
    for(let j=i+1; j<nums.length;j++){
        let x = Math.abs(nums[i]-nums[j])
        let n = Math.abs(i-j)
        if(x <= t && n <= k){
            return true
        }
      }
  }
  return false
};

// 桶排序
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  let getId = (num,t) =>{
      return Math.floor(num / t)
  }

  // 维护一个索引长度为k 的map表
  let map = new Map();
  // 桶的长度
  let length  = t +1;
  for(let i=0; i< nums.length; i++){
      let m = getId(nums[i], length)
      // 当map表中已存在值 返回true
      if(map.has(m)){
          return true
      }else if(map.has(m+1) && Math.abs(nums[i] -map.get(m+1)) <= t) {
          // 桶的长度为 t+1
          // 超过两个桶的话 里面的值绝对值之差一定大于 t
          return true
      }else if(map.has(m-1) && Math.abs(nums[i] -map.get(m-1)) <= t ){
          return true
      }
      map.set(m, nums[i]);
      // 维护一个索引长度为k 的map表 超过删除
      if(i >= k){
          map.delete(getId(nums[i - k],length))
      }
  }
  return false
};

// 链接：https://leetcode-cn.com/problems/contains-duplicate-iii/solution/javascript-zhi-xing-yong-shi-68-ms-zai-suo-you-jav/
