// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

//  

// 示例：

// 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

// 满足要求的三元组集合为：
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]


// 和 #1 两数之和相似


/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// dfs 递归 超时
var threeSum = function(nums) {
    let res = []
    nums.sort((a,b)=> a-b)
    let dfs =(sum, tempArray, index   )=>{
        if(sum == 0 && tempArray.length == 3){
            res.push(tempArray)
            return;
        }
        for(let i= index; i<nums.length; i++){
            if(tempArray.length >2) continue;
            if(i> index && nums[i-1] == nums[i]) continue;
            dfs(sum + nums[i] ,[...tempArray, nums[i] ], i + 1)
        }
    }
    dfs(0,[],0);
    return res;
};


// hash值
// 算法和两数之和类似
// 需要判断较多情况 不推荐 超时

var threeSum = function(nums) {
    let res = [];
    if(nums == null || nums.length < 3) return res;
    nums.sort((a,b)=> a-b);
    for(let i=0; i<nums.length-2; i++){
        let hash = {};
        if(nums[i] > 0) break;
        if(i>0 &&nums[i] == nums[i-1]) continue
        for(let j=i+1;j<nums.length; j++){
            if(j> i+2 && nums[j] == nums[j-1] && nums[j] == nums[j-2]) continue
            let diff =  0 -nums[i] - nums[j];
            if(hash[diff] !== undefined){
                res.push([nums[i],nums[j],hash[diff]])
                hash[diff] = undefined
            }
            hash[nums[j]] = nums[j];
        }
    }
    return res;
};

// 双指针

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res = [];
    nums.sort((a,b)=> a-b);
    for(let i=0; i<nums.length; i++){

        if(i>0 && nums[i] == nums[i-1]) continue;
        let left = i+1;
        let right = nums.length-1;
        while(left < right){
            let sum = nums[i] + nums[left] + nums[right];
            
            if(sum == 0){
                res.push([nums[i] , nums[left], nums[right]])
                while(left < right && nums[left] == nums[left+1]){
                    left ++;
                }
                while(left < right && nums[right] == nums[right-1]){
                    right --;
                }
                left++;
                right--;
            }else if(sum < 0){
                left++;
            }else {
                right--;
            }
        }
    }    
    return res;
};