

// 给定一个非负整数数组 A， A 中一半整数是奇数，一半整数是偶数。

// 对数组进行排序，以便当 A[i] 为奇数时，i 也是奇数；当 A[i] 为偶数时， i 也是偶数。

// 你可以返回任何满足上述条件的数组作为答案。

 

// 示例：

// 输入：[4,2,5,7]
// 输出：[4,5,2,7]
// 解释：[4,7,2,5]，[2,5,4,7]，[2,7,4,5] 也会被接受。
 



/**
 * @param {number[]} A
 * @return {number[]}
 */

// 双指针

// 时间 O(n)
// 空间 O(n)
var sortArrayByParityII = function(A) {

    let oddIndex= 1;evenIndex = 0
    let result = [];
    for(let i=0; i<A.length; i++){

        if(A[i] % 2 == 0){
            result[evenIndex] = A[i];
            evenIndex +=2;
        }else {
            result[oddIndex] = A[i];
            oddIndex +=2;
        }
    }
    return result;
};

// 不开辟额外空间
var sortArrayByParityII = function(A) {

    let odd = 1;
        // 通过偶数下标来遍历
        for (let even = 0; even < A.length; even += 2) {
            // 1.如果为偶数，则进入下一次循环，检查下一个偶数下标的值是否为偶数
            // 2.如果非偶数，就用odd找到一个奇数下标的值为偶数来交换
            if (A[even] % 2 != 0) {
                // 偶数位出现不为偶数，说明奇数位肯定能找到偶数
                // 2.1 跳过奇数，找到一个奇数位为偶数值的下标
                while (A[odd] % 2 == 1) {
                    odd += 2;
                }
                // 2.2 奇数位找到偶数了，将偶数位的奇数和奇数位的偶数的值交换
                let tmp = A[even];
                A[even] = A[odd];
                A[odd] = tmp;
                // 奇数下标后移
                odd += 2;
            }
        }
        return A;
}

