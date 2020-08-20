// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

// 示例 1:

// 输入: s = "anagram", t = "nagaram"
// 输出: true
// 示例 2:

// 输入: s = "rat", t = "car"
// 输出: false

// 字母异同位只是字母数量长度一样
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    
    return s.split('').sort().join('') === t.split('').sort().join('');
};


var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    for(let item of s){
    	if(t.indexOf(item) > -1){
    		s = s.replace(item,'')
    	}
    }
    return s === ''
};