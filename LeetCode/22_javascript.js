// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

//  

// 示例：

// 输入：n = 3
// 输出：[
//        "((()))",
//        "(()())",
//        "(())()",
//        "()(())",
//        "()()()"
//      ]

     


/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {

    let res = [];
    let dfs = (tempArray,left, right) =>{

        if(left ==0 && right ==0){
            res.push(tempArray.join(''));
            return;
        }

        if(left > 0){
            dfs([...tempArray, '('],left-1 ,right);
        }

        if(right > left){
            dfs([...tempArray, ')'],left ,right-1);
        }
    }


    dfs([],n,n);
    return res;
};