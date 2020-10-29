// 给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

// candidates 中的每个数字在每个组合中只能使用一次。

// 说明：

// 所有数字（包括目标数）都是正整数。
// 解集不能包含重复的组合。 
// 示例 1:

// 输入: candidates = [10,1,2,7,6,1,5], target = 8,
// 所求解集为:
// [
//   [1, 7],
//   [1, 2, 5],
//   [2, 6],
//   [1, 1, 6]
// ]
// 示例 2:

// 输入: candidates = [2,5,2,1,2], target = 5,
// 所求解集为:
// [
//   [1,2,2],
//   [5]
// ]


// 此题考察回溯算法 
// 和#39题的区别在于 题干中的 
// 39: 无重复数组 candidates 
// 40: 每个数字在每个组合中只能使用一次




/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {

    let res = []
    // 排序 方便下面去重判断
    candidates.sort((a,b)=>{
        return a-b
    })
    let dfs = ( number, tempArray ,index)=>{
        if(number  <= 0){
        	if(number == 0){
				res.push(tempArray)
	       	}
	        return
        }
    	for(let i=index; i<candidates.length; i++){
    		// 和 39题的差别主要在这里去重判断
    		// 
            if( i > index && candidates[i-1] == candidates[i]) continue
           	// 递归过程和 39 基本一样 最后一项参数索引+1 使其不向下递归
    		dfs( number - candidates[i], [...tempArray,candidates[i]]   ,i+1)
    	}
    }
    dfs(target,[],0);
    return res

};