// 在二维空间中有许多球形的气球。对于每个气球，提供的输入是水平方向上，气球直径的开始和结束坐标。由于它是水平的，所以y坐标并不重要，因此只要知道开始和结束的x坐标就足够了。开始坐标总是小于结束坐标。平面内最多存在104个气球。

// 一支弓箭可以沿着x轴从不同点完全垂直地射出。在坐标x处射出一支箭，若有一个气球的直径的开始和结束坐标为 xstart，xend， 且满足  xstart ≤ x ≤ xend，则该气球会被引爆。可以射出的弓箭的数量没有限制。 弓箭一旦被射出之后，可以无限地前进。我们想找到使得所有气球全部被引爆，所需的弓箭的最小数量。

// Example:

// 输入:
// [[10,16], [2,8], [1,6], [7,12]]

// 输出:
// 2

// 解释:
// 对于该样例，我们可以在x = 6（射爆[2,8],[1,6]两个气球）和 x = 11（射爆另外两个气球）。


// 输入一个数值 x在 输入的数组内部 可以有 最大的值


/**
 * @param {number[][]} points
 * @return {number}
 */

// point[i] = [a,b]

// 题目意思就是 查询最大的不重叠空间

/**
 * @param {number[][]} points
 * @return {number}
 */

var findMinArrowShots = function(points) {
    if(points.length == 0) return 0
    // 排序 用点的终点排序
    points.sort((a,b)=> a[1]-b[1]);
	
    let end = points[0][1];
    let count = 1;
    for(let i=0; i<points.length; i++){
	//若当前点的起点小于射击点，则代表当前一定包含射击点，可一箭射穿。
	//若大于，则必须要重新射一直箭，并且把该点的终点作为区间判断依据

        if(points[i][0] >end){
            count++;
            end = points[i][1]
        }
    }
    return count
};

// 图形题解
//https://leetcode-cn.com/problems/minimum-number-of-arrows-to-burst-balloons/solution/yong-zui-shao-shu-liang-de-jian-yin-bao-qi-qiu-b-2/