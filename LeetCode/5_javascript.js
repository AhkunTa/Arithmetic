// 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

// 示例 1：

// 输入: "babad"
// 输出: "bab"
// 注意: "aba" 也是一个有效答案。
// 示例 2：

// 输入: "cbbd"
// 输出: "bb"


// 方法1 暴力破解 三重循环
// 超出时长  (╰_╯)

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let newStr,outputStr = '',maxLength = 0;
    if(s.length == 1)
        return s
    for(let i=0;i<s.length;i++){
        for(let j=i+1;j<=s.length;j++){
            newStr = s.substring(i,j);
            newStr = isPalindromic(newStr) === false ? '' : newStr;
            if(newStr.length > maxLength){
                maxLength = newStr.length;
                outputStr = newStr;
            }
        }
    }
    return outputStr;
};

 function isPalindromic(str){
        for(let i=0;i < str.length/2;i++){
            if(str[i]!=str[str.length-i-1]){
                return false;
            }
        }
 }


// 以上算法优化一下 但还是超出时长

var longestPalindrome = function(s) {
    let newStr,revStr,outputStr = '',maxLength = 0;
    if(s.length == 1)
        return s
    for(let i=0;i<s.length;i++){
        for(let j=i+1;j<=s.length;j++){
            newStr = s.substring(i,j);
            revStr = newStr.split('').reverse().join('');
            if(newStr == revStr && newStr.length > maxLength){
                maxLength = newStr.length;
                outputStr = newStr;
            }
        }
    }
    return outputStr;
};

// 法2 动态规划

// https://leetcode-cn.com/problems/longest-palindromic-substring/solution/guan-fang-ti-jie-dong-tai-gui-hua-dai-ma-shi-xian-/
var longestPalindrome3 = function(s) {
    let dp = [];
    for (let i = 0; i < s.length; i ++) {
        dp[i] = [];
    };
    let max = -1;
    let str = ''
    //这样可以遍历出所有子串, 以不同子串的开头为基准, 遍历所有子串
    for (let k = 0; k < s.length; k ++) {
        //采用不同的间隔依次遍历
        //这里i 是子串的开始索引, j是 子串的结束索引, k + 1其实就是 子串的长度
        for (let i = 0; i + k < s.length ; i ++) {
            let j = i + k;
            if ( k == 0 ) {
                dp[i][j] = true;
            } else if ( k <= 2 ) {
                if ( s[i] == s[j] ) {
                    dp[i][j] = true;
                } else {
                    dp[i][j] = false;
                }
            } else {
                dp[i][j] = ( dp[i + 1][j - 1] && s[i] == s[j] ) ? true : false;
            }
            if ( j - i > max && dp[i][j]) {
                max = j - i;
                str = s.substring(i, j + 1);
            }
        };
    };
    return str;
}

// 优化以上代码
var longestPalindrome = function(s) {
	// 创建二维数组
    let dp=Array.from(new Array(s.length),()=>new Array(s.length).fill(0));
    let output='';
    // k 为s中截取的长度 
    for(let k=0; k<s.length; k++){
    	// i 为头部索引 j 为尾部索引
        for(let i=0; i+k <s.length; i++){
        	// j 等于 头部索引加s截取长度
            let j = i + k;
            // 判断 
            // 1  k+1 即截取的长度 为0时 s[i] 等于 s[j]
            // 2  s[i] == s[j] && dp[i+1][j-1] 为状态转移方程
            dp[i][j] = s[i] == s[j] && (k < 2 || dp[i+1][j-1])
            if(dp[i][j] && k + 1 > output.length){
                output = s.substring(i,j+1);
            }
        }
    }
    return output;
};



// 法3 中心扩散
// 思路：
// 回文串一定是对称的
// 每次选择一个中心，进行中心向两边扩展比较左右字符是否相等
// 中心点的选取有两种
// aba，中心点是b
// aa，中心点是两个a之间
// 所以共有两种组合可能
// left：i，right：i
// left：i，right：i+1

var longestPalindrome = function(s) {
    if(!s || s.length < 2){
        return s
    }

    let start = 0;
    let end = 0;
    let lent = s.length;
    
    //输入中心点  找出回文串的最长长度   此函数为该方法主要函数
    let getCenterLentF = (left,right) => {
        while(left >= 0 && right < lent && s[left] == s[right]){
            left--;
            right++;

        }
        return (right - 1) - (left + 1) + 1
    }

    for(let i = 0; i < lent ; i++){
        //type1  类型1 最长回文串以（自己）为中心  aba
        let lent1 = getCenterLentF(i,i);
        //type2  类型2 最长回文串以（自己  和 下一个 -> 即两者相同）为中心   baab
        let lent2 = getCenterLentF(i,i + 1);

        let maxLent = Math.max(lent1,lent2);
        let  lastMax = end - start;
        if(maxLent > lastMax){
        	//如果以当前下表为回文串中心得到的最长长度 比 上一个长度还长
            //则回文串的起始下表为当前i值的左边 再减回文串长度的一半 
            // 若回文串长度为单数 刚好以i中心 长度则为  左：(maxLent - 1) / 2   右：(maxLent - 1) / 2 
            // 若回文串长度为偶数 以 i 和 i + 1 为中心  左：(maxLent - 2) / 2   右：maxLent / 2；
            if(maxLent % 2 != 0 ){
                start = i - (maxLent - 1) / 2;
                end = i + (maxLent - 1) / 2;
            }else{
                start = i - (maxLent - 2) / 2;
                end = i + maxLent / 2;
            }
            // => start = i - ((maxLent - 1) >> 1);
            // => end = i + (maxLent >> 1);
        }
    }

    return s.substring(start,end + 1 )

};


// 法4 Manacher算法
// 没看懂


// 链接：https://leetcode-cn.com/problems/longest-palindromic-substring/solution/5-zui-chang-hui-wen-zi-chuan-by-alexer-660/

var longestPalindrome = function(s) {
    if(!s || s.length < 2){
        return s;
    }
    var s_f = '#'+s.split('').join('#')+'#';
    let c = 0,R = 0;
    var len = s.length;
    var t_len = s_f.length;
    var maxLen = 0;
    var maxIndex = 0;
    var originIndex = 0;
    var p = new Array(t_len);
    p[0] = 0;
    for(var i = 1;i<t_len-1;i++){
        var j = 2*c-i;
        if(i<R){
            p[i] = Math.min(p[j],R-i)
        }else{
            p[i] = 0;
        }
        var left = i-p[i]-1;
        var right = i+p[i]+1;
        while(left>=0 && right<t_len && s_f[left]==s_f[right]){
            left--;
            right++;
            p[i]++;
        }
        if(i+p[i]>R){
            c = i;
            R = i+p[i];
        }
        if(p[i]>maxLen){
            maxLen = p[i];
            maxIndex = i;
            originIndex = parseInt((i-p[i])/2)
        }
    } 
    return s.substring(originIndex,originIndex + maxLen);
};




