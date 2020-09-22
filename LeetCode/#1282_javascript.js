// 有 n 位用户参加活动，他们的 ID 从 0 到 n - 1，每位用户都 恰好 属于某一用户组。给你一个长度为 n 的数组 groupSizes，其中包含每位用户所处的用户组的大小，请你返回用户分组情况（存在的用户组以及每个组中用户的 ID）。

// 你可以任何顺序返回解决方案，ID 的顺序也不受限制。此外，题目给出的数据保证至少存在一种解决方案。

//  

// 示例 1：

// 输入：groupSizes = [3,3,3,3,3,1,3]
// 输出：[[5],[0,1,2],[3,4,6]]
// 解释： 
// 其他可能的解决方案有 [[2,1,6],[5],[0,4,3]] 和 [[5],[0,6,2],[4,3,1]]。
// 示例 2：

// 输入：groupSizes = [2,1,3,3,3,2]
// 输出：[[1],[0,5],[2,3,4]]
//  

// 提示：

// groupSizes.length == n
// 1 <= n <= 500
// 1 <= groupSizes[i] <= n




// 输入：groupSizes = [2,1,3,3,3,2]
// 输出：[[1],[0,5],[2,3,4]]

// 数组的索引对应的是用户的 ID，用上面的代码来举例。例如用户 0 所在组大小为 2，
// 也就是说这个组有 2 个人。然后索引 5，也就是用户 5 所在的用户组也是 2。说明用户 0 和用户 5 是在一个组。
// 索引 1，也就是用户 1 所在的组为 1，只有它自己。用户 2 3 4 为一组，因为组大小为 3，有 3 个人。
// 这样就能看出来有 3 个组了，所以答案是 [[1],[0,5],[2,3,4]]。

/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */


 // [2,1,3,3,3,2]
var groupThePeople = function(groupSizes) {
    let res = [];
    let hash = {};
    for(let i=0; i<groupSizes.length; i++){
    	// 转换hash
    	// {
    	// 	2：[0,5],
    	// 	1: [2],
    	// 	3: [2,3,4]
    	// }

        if(!hash[groupSizes[i]]){
            hash[groupSizes[i]] = [];
        }
        hash[groupSizes[i]].push(i)
        // 判断数组长度等于 key值
        if(hash[groupSizes[i]].length == groupSizes[i]){
        	// res数组内push 当前数组
            res.push(hash[groupSizes[i]]);
            // 再将当前数组置空
            hash[groupSizes[i]] = []
        }
    }
    return res
};
