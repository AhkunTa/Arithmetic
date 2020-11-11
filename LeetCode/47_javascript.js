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
    dfs=(tempArray) =>{
        if(tempArray.length == nums.length){
            res.push(tempArray);
            return;
        }
        for(let i=0; i<nums.length; i++){
        	// 主要在于这里的剪枝操作
        	// i>0 && nums[i] == nums[i-1]&& visited[i-1]
        	// i>0 && nums[i] == nums[i-1] 为去重两个元素相同选项
            if(i>0 && nums[i] == nums[i-1]&& visited[i-1] == false || visited[i]) continue;
            visited[i] = true;
            dfs( [...tempArray,nums[i]]);
            visited[i] = false;
        }
    }
    nums.sort((a,b) => a-b);
    dfs([]);
    return res;
};

// 法一 i > 0 && nums[i] == nums[i-1] && visited[i-1] == false || visited[i]
// 法二 i > 0 && nums[i] == nums[i-1] && visited[i-1] == true || visited[i]

// 唯一的区别是这里 visited[i-1] == true 和 visited[i-1] == false
// 当在前后两个数是相同的情况下(排序后的数组)  
// 1. visited[i-1] == false 代表相同层级的前一条分支(回溯过后的分支) 
// visited[i-1] 为true 但之后回溯过后 又将其改为false 所以前面分支以及递归过了 直接跳过

// 2. visited[i-1] == true 代表下层分支 中
// 比如 visited = [false,false,false]  nums = [1,1,1]
// 第一次循环之后,三条分支分别为  [true,false,false]                  [false,true,false]                 [false,false,true]
//                      1                2             3             1          2        3             1         2         3
// 所以下层的分支     [t,f,f]         [t,t,f]       [  t,f,t]   |   [t,t,f]   [f,t,f]   [f,t,t]    |  [t,f,t]   [f,t,t]   [f,f,t]
//             visited[i] = true   visited[i-1] == true                        x                                           x
// 						x            x     
// 										      [t,f,t]   [t,t,t]    [t,f,t]	   
//											   x  visited[i-1] == true x
// 														  x
// 综上  visited[i-1] == false 效率更高

// https://leetcode-cn.com/problems/permutations-ii/solution/47-quan-pai-lie-iiche-di-li-jie-pai-lie-zhong-de-q/