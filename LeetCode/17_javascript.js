// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

        2 : ['a','b','c'],
        3 : ['d','e','f'],
        4 : ['g','h','i'],
        5 : ['j','k','l'],
        6 : ['m','n','o'],
        7 : ['p','q','r','s'],
        8 : ['t','u','v'],
        9 : ['w','x','y','z']

// 示例:

// 输入："23"
// 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].


/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits == '') return []
    let res = [];
    let hash = {
        2 : ['a','b','c'],
        3 : ['d','e','f'],
        4 : ['g','h','i'],
        5 : ['j','k','l'],
        6 : ['m','n','o'],
        7 : ['p','q','r','s'],
        8 : ['t','u','v'],
        9 : ['w','x','y','z']
    }

    dfs = (tempArray,index) =>{

        if(tempArray.length == digits.length){
            res.push(tempArray.join(''));
            return;
        }
        let hashArray = hash[digits[index]]
        for(let i=0; i< hashArray.length; i++ ){
            dfs([...tempArray,hashArray[i]],index + 1);
        }
    }
    dfs([],0)
    return res;
};
