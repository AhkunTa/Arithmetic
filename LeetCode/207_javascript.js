
// 你这个学期必须选修 numCourse 门课程，记为 0 到 numCourse-1 。

// 在选修某些课程之前需要一些先修课程。 例如，想要学习课程 0 ，你需要先完成课程 1 ，我们用一个匹配来表示他们：[0,1]

// 给定课程总量以及它们的先决条件，请你判断是否可能完成所有课程的学习？

 

// 示例 1:

// 输入: 2, [[1,0]] 
// 输出: true
// 解释: 总共有 2 门课程。学习课程 1 之前，你需要完成课程 0。所以这是可能的。
// 示例 2:

// 输入: 2, [[1,0],[0,1]]
// 输出: false
// 解释: 总共有 2 门课程。学习课程 1 之前，你需要先完成​课程 0；并且学习课程 0 之前，你还应先完成课程 1。这是不可能的。
 

// 提示：

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {

  let map = {};
  let tempArr = new Array(numCourses).fill(0);

  for(let i=0; i<prerequisites.length; i++){
      tempArr[prerequisites[i][0]] ++
      if(map[prerequisites[i][1]]){
          map[prerequisites[i][1]].push(prerequisites[i][0])
      }else {
          map[prerequisites[i][1]] = [prerequisites[i][0]]
      }
  }
  let queue = [];

  for(let i=0; i<tempArr.length;i++){
      if(tempArr[i] == 0){
          queue.push(i)
      }
  }
  let count = 0;
  while(queue.length){
      // 推出一个能修的课程
      let temp = queue.shift();
      // 修掉的课程数++
      count ++;
      // 获取这个课程的父级课程
      let mapArr = map[temp];
      if(mapArr && mapArr.length){
          for(let i = 0; i < mapArr.length; i++){
              // 所有父级课程所需的子选修课程数量-1
              tempArr[mapArr[i]] --;
              // =0 时表示父级课程可以选修 push进数组
              if(tempArr[mapArr[i]] == 0){
                  queue.push(mapArr[i])
              }
          }
      }
  }
  return count == numCourses
};
