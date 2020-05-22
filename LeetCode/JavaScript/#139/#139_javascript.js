// 给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。

// 说明：

// 拆分时可以重复使用字典中的单词。
// 你可以假设字典中没有重复的单词。
// 示例 1：

// 输入: s = "leetcode", wordDict = ["leet", "code"]
// 输出: true
// 解释: 返回 true 因为 "leetcode" 可以被拆分成 "leet code"。
// 示例 2：

// 输入: s = "applepenapple", wordDict = ["apple", "pen"]
// 输出: true
// 解释: 返回 true 因为 "applepenapple" 可以被拆分成 "apple pen apple"。
//      注意你可以重复使用字典中的单词。
// 示例 3：

// 输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
// 输出: false




/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */



// 动态规划
//  dp[i]表示从下标0开始长度为i的的字符串是否满足要求
//  i 是当前字符串分割的长度 把s 拆分成 s1 s2
//  j 将已经分割的字符串再拆分  s1' s2'
//  对每一个dp[i] 都检查 每一项 dp[j] 是否为true 以及 s2' 是否为在字典中 即 wordDict.includes(s.substring(j,i))


var wordBreak = function(s, wordDict) {
	
    let dp = new Array(s.length + 1).fill(false);
    dp[0] = true;
    for(let i=1 ; i< s.length+1; i++) {
        for(let j=0; j< i; j++ ) {
        	// 双重循环 
        	// 第一重循环当前字符串列表
        	// 第二重循环循环被分割的数据

            if(dp[j] && wordDict.includes(s.substring(j,i))){
                dp[i] = true;
                break;
            }
        }
    }
    return dp[s.length];
};