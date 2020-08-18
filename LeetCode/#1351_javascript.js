
// 给你一个 m * n 的矩阵 grid，矩阵中的元素无论是按行还是按列，都以非递增顺序排列。 

// 请你统计并返回 grid 中 负数 的数目。

 

// 示例 1：

// 输入：grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// 输出：8
// 解释：矩阵中共有 8 个负数。
// 示例 2：

// 输入：grid = [[3,2],[1,0]]
// 输出：0
// 示例 3：

// 输入：grid = [[1,-1],[-1,-1]]
// 输出：3
// 示例 4：

// 输入：grid = [[-1]]
// 输出：1
 

// 提示：

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 100
// -100 <= grid[i][j] <= 100


/**
 * @param {number[][]} grid
 * @return {number}
 */

// [
//     [4,3,2,-1],
//     [3,2,1,-1],
//     [1,1,-1,-2],
//     [-1,-1,-2,-3]
// ]


// 暴力解法两重循环 就不写了



// 二分
var countNegatives = function(grid) {
    // 二分法
    const m = grid.length;  // 行
    const n = grid[0].length;   // 列
    let count = 0;  // 计数
    for (let i = 0; i < m; i++){
        let row = grid[i];  // 简化二维数组为一维数组
        // 开始二分查找 
        // 根据题意，要确定负数区间的长度
        // 所以本质是取左边界，n - left 即为负数区间长度
        let left = 0;
        let right = n - 1;
        while(left <= right){
            let mid = Math.floor(left + (right - left) / 2);
            if (row[mid] < 0){  // 如果mid数为负数，说明要找的第一个负数还在左边
                right = mid - 1;
            }else if (row[mid] > 0){    // 如果mid数为不为负数，说明要找的第一个负数还在右边
                left = mid + 1;
            }else if (row[mid] === 0){
                left = mid + 1;
            }
        }
        // 最后得到第一个负数的下标left，计算负数区间长度
        count += n - left;
    }
    return count;
};


// 分治