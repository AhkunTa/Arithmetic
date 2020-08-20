
// 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

 

// 示例：

// s = "leetcode"
// 返回 0

// s = "loveleetcode"
// 返回 2
 

// 提示：你可以假定该字符串只包含小写字母。


var firstUniqChar = function(s) {
    for(let i in s){
        if(s.indexOf(s[i]) === s.lastIndexOf(s[i])){
            return i
        }
    }
    return -1;
};


// hash去重 map
var firstUniqChar = function(s) {
    let hash = {};
    let map = new Map();
    for(let i=0; i< s.length; i++){
    	if(!hash[s[i]]){
    		hash[s[i]] = 1;
    		map.set(s[i],i);

    	}else {
    		map.delete(s[i]);
    	}
    }
    if(map.size == 0){
       return -1;
   }
   return map.values().next().value;
};
