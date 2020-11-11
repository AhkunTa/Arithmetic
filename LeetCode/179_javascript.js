// 给定一组非负整数 nums，重新排列它们每位数字的顺序使之组成一个最大的整数。

// 注意：输出结果可能非常大，所以你需要返回一个字符串而不是整数。

//  

// 示例 1：

// 输入：nums = [10,2]
// 输出："210"
// 示例 2：

// 输入：nums = [3,30,34,5,9]
// 输出："9534330"
// 示例 3：

// 输入：nums = [1]
// 输出："1"
// 示例 4：

// 输入：nums = [10]
// 输出："10"
//  

// 提示：

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 109



/**
 * @param {number[]} nums
 * @return {string}
 */

// 判断前后两个数组元素 a,b   a + b 是否大于 b + a  
var largestNumber = function(nums) {
    
    nums = nums.map(item => item + '')
    for(let i=0; i<nums.length; i++){
        
        for(let j=i+1; j<nums.length; j++){
            if( parseInt(nums[i] + nums[j])  < parseInt(nums[j] + nums[i])){
                [nums[i],nums[j]] = [nums[j], nums[i]];
            }
        }
    
    } 
    return nums[0] == '0' ? '0' : nums.join('')

};


// 优化解法
var largestNumber = function(nums) {
    nums = nums.sort((a, b) => {
        let S1 = `${a}${b}`;
        let S2 = `${b}${a}`;
        return S2 - S1;
    });
    return nums[0] ? nums.join('') : '0';
}

// 链接：https://leetcode-cn.com/problems/largest-number/solution/zui-da-shu-by-caoyq0521/
