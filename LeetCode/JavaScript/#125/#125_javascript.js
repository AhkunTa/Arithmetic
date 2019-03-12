// 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

// 说明：本题中，我们将空字符串定义为有效的回文串。

// 示例 1:

// 输入: "A man, a plan, a canal: Panama"
// 输出: true
// 示例 2:

// 输入: "race a car"
// 输出: false

/**
 * @param {string} s
 * @return {boolean}
 */


//    let s = '1213123sd_ 1_ 1_ wasdw_,,../sdsdd0s00';
//    let str1 = s.replace(/_/g,'')
//    console.log(str1)
//    let str2 = str1.match(/\w/g);
//    console.log(str2.join(''))

// 首先 进行字符串替换只保留数字和英文 在进行判断




//循环
var isPalindrome = function(s) {
	let str = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
	if (str == '') {
		return true;
	} else {
		str = str.split('');
		for (let i = 0; i < str.length; i++) {
			if (str[i] !== str[str.length - i - 1]) {
				return false;
			}
		}
		return true;
	}
};

// 反转字符串
var isPalindrome = function(s) {
	let str = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
	if (str == '') {
		return true;
	}
	let reverseStr = str.split('').reverse().join('')

	if(str == reverseStr) {
		return true;
	}else{
		return false;
	}
};