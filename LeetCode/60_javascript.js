// 给出集合 [1,2,3,...,n]，其所有元素共有 n! 种排列。

// 按大小顺序列出所有排列情况，并一一标记，当 n = 3 时, 所有排列如下：

// "123"
// "132"
// "213"
// "231"
// "312"
// "321"
// 给定 n 和 k，返回第 k 个排列。

//  

// 示例 1：

// 输入：n = 3, k = 3
// 输出："213"
// 示例 2：

// 输入：n = 4, k = 9
// 输出："2314"
// 示例 3：

// 输入：n = 3, k = 1
// 输出："123"
//  

// 提示：

// 1 <= n <= 9
// 1 <= k <= n!


/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
// 传统回溯方法 计算出全排列的组合 然后返回第k个数
// 回溯算法返回的排列数组 就是从小到大排列好的
// 结果超时
var getPermutation = function(n, k) {

    let res = [];
    let visited = new Array(n).fill(false);

    dfs = (tempArray) =>{

        if(tempArray.length == n){
            res.push(tempArray.join(''));
            return;
        }

        for(let i=0; i<n; i++){

            if( visited[i] == true ) continue;
            visited[i] = true;
            dfs(  [...tempArray, i+1]);
            visited[i] = false;
        }
    }

    dfs([],0);
    // res.sort((a,b) => a-b);
    return res[k-1]
};


// 回溯优化 剪枝
// js 提交通过
var getPermutation = function(n, k) {
    let visited = new Array(n).fill(false);
    let resString = '';
    let count= 0;
    dfs = (tempArray) =>{
        if(tempArray.length == n){
        	count ++
        	// 因为递归方法是从小到大排列的
        	// 所以count == k 就是需要的数字
        	if( count == k ){
        		resString = tempArray.join('');
        	}
            return;
        }
        for(let i=0; i<n; i++){
            // 找到值 后续递归直接return 
            // 加上这一行代码效率能提升一倍
            if(resString) return;

            if( visited[i] == true ) continue;
            visited[i] = true;
            dfs(  [...tempArray, i+1]);
            visited[i] = false;
        }
    }
    dfs([],0);
    return resString;
};


// 数学 找规律方法

const getPermutation = (n, k) => { // 以 n=4 k=10 为例
  const nums = [];
  let factorial = 1;               // 阶乘  

  for (let i = 1; i <= n; i++) {
    nums.push(i);                  // [1, 2, 3, 4]
    factorial = factorial * i;     // 4!   24
  }

  k--;     // nums中数字们的索引是从0开始，k要先减去1
  let resStr = '';

  while (nums.length > 0) {              // 选了一个数字就删掉，直到为空
    factorial = factorial / nums.length; //  3! .. 2! .. 1!
    const index = k / factorial | 0;     // 当前选择的数字的索引
    resStr += nums[index];               // 加上当前选的数字
    nums.splice(index, 1);               // nums删去选的这个数字
    k = k % factorial;                   // 更新 k，
  }
  return resStr;
};

// 链接：https://leetcode-cn.com/problems/permutation-sequence/solution/shou-hua-tu-jie-jing-dian-de-dfshui-su-shu-xue-gui/






