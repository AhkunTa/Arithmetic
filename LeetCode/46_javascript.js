// 给定一个 没有重复 数字的序列，返回其所有可能的全排列。

// 示例:

// 输入: [1,2,3]
// 输出:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]



/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {

    let res = [];
    dfs=(tempArray) =>{
        if(tempArray.length == nums.length){
            res.push(tempArray);
            return;
        }
        for(let i=0; i<nums.length; i++){
            if(!tempArray.includes(nums[i])){
                dfs( [...tempArray,nums[i]]);
            }
        }

    }
    dfs([]);
    return res;
};


// 优化时间复杂度
var permute = function(nums) {

    let res = [];
    let visited = new Array(nums.length).fill(false)
    dfs=(tempArray) =>{
        if(tempArray.length == nums.length){
            res.push(tempArray);
            return;
        }
        for(let i=0; i<nums.length; i++){
            if(visited[i]) continue
            visited[i] = true
            dfs( [...tempArray,nums[i]]);
            visited[i] = false
        }
    }
    dfs([]);
    return res;
};
