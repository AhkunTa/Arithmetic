// 给定一个可能包含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。

// 说明：解集不能包含重复的子集。

// 示例:

// 输入: [1,2,2]
// 输出:
// [
//   [2],
//   [1],
//   [1,2,2],
//   [2,2],
//   [1,2],
//   []
// ]


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 具体参考 47 一样的题型
var subsetsWithDup = function(nums) {
    let res = [];
    let visit = new Array(nums.length).fill(false);
    nums.sort((a,b) => a-b);
    dfs=(tempArray,index) =>{
        res.push(tempArray);
        if(tempArray.length == nums.length){
            return;
        }

        for(let i=index; i<nums.length; i++){
            if(i>0 && nums[i] == nums[i-1] && visit[i-1] == false || visit[i]) continue;
            visit[i] = true;
            dfs( [...tempArray,nums[i]],i+1);
            visit[i] = false;
        }
    }

    dfs([],0);
    return res;
};
