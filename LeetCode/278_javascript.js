// 你是产品经理，目前正在带领一个团队开发新的产品。不幸的是，你的产品的最新版本没有通过质量检测。由于每个版本都是基于之前的版本开发的，所以错误的版本之后的所有版本都是错的。

// 假设你有 n 个版本 [1, 2, ..., n]，你想找出导致之后所有版本出错的第一个错误的版本。

// 你可以通过调用 bool isBadVersion(version) 接口来判断版本号 version 是否在单元测试中出错。实现一个函数来查找第一个错误的版本。你应该尽量减少对调用 API 的次数。

// 示例:

// 给定 n = 5，并且 version = 4 是第一个错误的版本。

// 调用 isBadVersion(3) -> false
// 调用 isBadVersion(5) -> true
// 调用 isBadVersion(4) -> true

// 所以，4 是第一个错误的版本。 


// 暴力破解  超时

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        for(let i=1; i<=n; i++){
        	if(isBadVersion(i)){
        		return i
        	}
        }
    };
};

// 二分查找

// 1 2 3 4 5 6 7 8 9 10
// f f f f f t t t t t

// mid = 5 left = 6 right = 10

// mid = 8 left = 5 right = 7;

// mid= 6 left = 5 right=6

// mid = 6 left= 5 right =

var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
    	let left = 1,right = n;

        while(left < right){
        	let mid = Math.floor((left + right) /2);
        	if(isBadVersion(mid)){
        		right = mid;
        	}else {
        		left = mid+1;
        	}
        }
        return left;
    };
};
