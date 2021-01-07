// 升序排列的整数数组 nums 在预先未知的某个点上进行了旋转（例如， [0,1,2,4,5,6,7] 经旋转后可能变为 [4,5,6,7,0,1,2] ）。

// 请你在数组中搜索 target ，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。

//

// 示例 1：

// 输入：nums = [4,5,6,7,0,1,2], target = 0
// 输出：4
// 示例 2：

// 输入：nums = [4,5,6,7,0,1,2], target = 3
// 输出：-1
// 示例 3：

// 输入：nums = [1], target = 0
// 输出：-1
//

// 提示：

// 1 <= nums.length <= 5000
// -10^4 <= nums[i] <= 10^4
// nums 中的每个值都 独一无二
// nums 肯定会在某个点上旋转
// -10^4 <= target <= 10^4

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 二分法 indexOf偷鸡就不说了
// 本题 主要在于旋转的数组 内判断

var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let middle = Math.floor(left + (right - left) / 2);
    if (nums[middle] == target) {
      return middle;
    }
    // middle < right 表示middle在右段 middle之后为递增的列表
    // 判断当前 target 位置
    // 1 target <= nums[right] 表示 target在右段 若不是则在右段
    // 2 target > nums[middle] 表示 target还在middle右边 所以 left = middle + 1;

    // middle > right 表示middle在左段 同上类似
    if (nums[middle] < nums[right]) {
      if (nums[middle] < target && target <= nums[right]) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    } else {
      if (nums[middle] > target && target >= nums[left]) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }
  }
  return -1;
};
