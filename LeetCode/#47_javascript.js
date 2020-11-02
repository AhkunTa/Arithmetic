// 给定一个可包含重复数字的序列，返回所有不重复的全排列。

// 示例:

// 输入: [1,1,2]
// 输出:
// [
//   [1,1,2],
//   [1,2,1],
//   [2,1,1]
// ]



/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 同46题类似 

var permuteUnique = function(nums) {
    let res = [];
    let visited = new Array(nums.length).fill(false);
    dfs=(tempArray,index) =>{
        if(tempArray.length == nums.length){
            res.push(tempArray);
            return;
        }
        for(let i=0; i<nums.length; i++){
        	// 主要在于这里的剪枝操作
        	// i>0 && nums[i] == nums[i-1]&& visited[i-1]
        	// i>0 && nums[i] == nums[i-1] 为去重两个元素相同选项
        	// 加
            if(i>0 && nums[i] == nums[i-1]&& visited[i-1] || visited[i]) continue;
            visited[i] = true;
            dfs( [...tempArray,nums[i]]);
            visited[i] = false;
        }
    }
    nums.sort((a,b) => a-b);
    dfs([]);
    return res;
};