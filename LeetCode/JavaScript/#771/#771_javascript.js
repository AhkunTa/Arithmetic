/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */

//暴力破解 双for
var numJewelsInStones = function(J, S) {
    var rev = 0;
    for(var i=0; i<J.length; i++){
        for(var j=0;j<S.length; j++){
            if(J[i] == S[j]){
                rev++
            }
           
        }
    }
    return rev;
};

// 使用正则表达式
var numJewelsInStones = function(J, S) {
    
};