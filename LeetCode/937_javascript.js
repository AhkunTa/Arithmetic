// 我们有一个由平面上的点组成的列表 points。需要从中找出 K 个距离原点 (0, 0) 最近的点。

// （这里，平面上两点之间的距离是欧几里德距离。）

// 你可以按任何顺序返回答案。除了点坐标的顺序之外，答案确保是唯一的。

//  

// 示例 1：

// 输入：points = [[1,3],[-2,2]], K = 1
// 输出：[[-2,2]]
// 解释： 
// (1, 3) 和原点之间的距离为 sqrt(10)，
// (-2, 2) 和原点之间的距离为 sqrt(8)，
// 由于 sqrt(8) < sqrt(10)，(-2, 2) 离原点更近。
// 我们只需要距离原点最近的 K = 1 个点，所以答案就是 [[-2,2]]。
// 示例 2：

// 输入：points = [[3,3],[5,-1],[-2,4]], K = 2
// 输出：[[3,3],[-2,4]]
// （答案 [[-2,4],[3,3]] 也会被接受。）
//  

// 提示：

// 1 <= K <= points.length <= 10000
// -10000 < points[i][0] < 10000
// -10000 < points[i][1] < 10000

/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
// points: [[1,3],[-2,2]]
// K:      1

var kClosest = function(points, K) {

    let distanceObj = {};
    for(let i=0; i<points.length; i++){
        let distance = Math.pow(points[i][0],2) + Math.pow(points[i][1],2)
        distanceObj[i] = distance;
    }

    // distanceObj { 0: 10, 1: 8 }
    let res = [];

    let sortKey = Object.keys(distanceObj).sort((a,b)=>{
        return distanceObj[a] - distanceObj[b]
    })
    // 排序后得到的值 sortKey [1,0 ]

    sortKey.slice(0,K).forEach( index=>{
        res.push(points[index])
    })
    return res;
};