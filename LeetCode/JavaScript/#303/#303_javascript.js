// 给定一个整数数组  nums，求出数组从索引 i 到 j  (i ≤ j) 范围内元素的总和，包含 i,  j 两点。

// 示例：

// 给定 nums = [-2, 0, 3, -5, 2, -1]，求和函数为 sumRange()

// sumRange(0, 2) -> 1
// sumRange(2, 5) -> -1
// sumRange(0, 5) -> -3
// 说明:

// 你可以假设数组不可变。
// 会多次调用 sumRange 方法。

// 法一 暴力破解 
// 时间 O(n)
// 空间 O(1)

/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums;
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    let sum = 0;
    for(let k = i; k <= j; k++){
        sum += this.nums[k];
    }
    return sum
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */




// 法2 动态规划
// 时间 O(1)
// 空间 O(n)


// 在new 对象的时候 把数组从0位一直到N位每一位之前的和求出
// 当计算i 至 j的和时，只需要把 用 j前面(包含 j )的和 减去 i前面(不包含 i )的和即可

var NumArray = function(nums) {
    this.sum =Array(nums.length + 1)
    this.sum[0] = 0 
    for(let i=0; i<nums.length; i++){
    	// 计算所有前面多少项和 存入sum中 
        this.sum[i+1] = this.sum[i] + nums[i];
    }
};

NumArray.prototype.sumRange = function(i, j) {
	// 因为第一位为0  所以之后 sum[j+1] 为前 j项和  sum[i]为前n-1项和 
	// 直接返回i(包含) 到 j(包含)项的和
    return this.sum[j+1] - this.sum[i];
};


