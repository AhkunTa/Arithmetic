// 给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。

// 注意：

// 答案中不可以包含重复的四元组。

// 示例：

// 给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。

// 满足要求的四元组集合为：
// [
//   [-1,  0, 0, 1],
//   [-2, -1, 1, 2],
//   [-2,  0, 0, 2]
// ]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
// 题目和 16几乎一样 增加了一层循环
var fourSum = function (nums, target) {
  if (nums.length < 4) return [];
  nums.sort((a, b) => {
    return a - b;
  });
  let res = [];
  // 去重判断
  let visited = new Map();
  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = i + 1; j < nums.length - 2; j++) {
      let left = j + 1,
        right = nums.length - 1;
      while (left < right) {
        let sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum === target) {
          let arr = [nums[i], nums[j], nums[left], nums[right]];

          // 去重判断
          let mapKey = "" + nums[i] + nums[j] + nums[left] + nums[right];
          if (!visited.has(mapKey)) {
            res.push(arr);
            visited.set(mapKey, true);
          }

          left++;
          right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  return res;
};
