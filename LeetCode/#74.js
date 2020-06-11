// 编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：

// 每行中的整数从左到右按升序排列。
// 每行的第一个整数大于前一行的最后一个整数。
// 示例 1:

// 输入:
// matrix = [
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ]
// target = 3
// 输出: true
// 示例 2:

// 输入:
// matrix = [
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ]
// target = 13
// 输出: false



// 经典二分法

// 二分法  关键在于理解

// matrix[indexRow][indexColumn] = matrix[index / column][index % column]
var searchMatrix = function(matrix, target) {
    if(matrix.length == 0) return false;
    let row = matrix.length;
    let column = matrix[0].length;
    let left = 0, right = row * column - 1,index,indexRow,indexColumn;
    while(left <= right){
        index = Math.floor((left + right) /2);
        indexRow = Math.floor(index / column);
        indexColumn = index % column;
        if(target == matrix[indexRow][indexColumn]){
            return true;
        }
        if(target <  matrix[indexRow][indexColumn]){
            right = index - 1;
        }else  {
            left = index + 1;
        }
    }
    return false
};

