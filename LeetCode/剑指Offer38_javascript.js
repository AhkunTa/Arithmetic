// 输入一个字符串，打印出该字符串中字符的所有排列。

//  

// 你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。

//  

// 示例:

// 输入：s = "abc"
// 输出：["abc","acb","bac","bca","cab","cba"]
//  

// 限制：

// 1 <= s 的长度 <= 8


// 此题和 47题一摸一样的解法 回溯 剪枝

/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
    let res = [];
    let sArray = s.split('').sort();
    let visited = new Array(sArray.length).fill(false);
    let dfs = (tempArray,index) => {

        if(tempArray.length == sArray.length){
            res.push(tempArray.join(''))
            return;
        }
        for(let i=0; i<sArray.length; i++){
        	// 主要就在于此处的剪枝操作  具体查看题目47 
            if(i>0 && sArray[i] == sArray[i-1] && visited[i-1] == false || visited[i]) continue;
            visited[i] = true;
            dfs( [...tempArray,sArray[i]],i+1);
            visited[i] = false
        }
    }
    dfs([],0)
    return res;
};








