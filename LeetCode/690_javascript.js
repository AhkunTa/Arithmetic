// 给定一个保存员工信息的数据结构，它包含了员工唯一的id，重要度 和 直系下属的id。

// 比如，员工1是员工2的领导，员工2是员工3的领导。他们相应的重要度为15, 10, 5。那么员工1的数据结构是[1, 15, [2]]，员工2的数据结构是[2, 10, [3]]，员工3的数据结构是[3, 5, []]。注意虽然员工3也是员工1的一个下属，但是由于并不是直系下属，因此没有体现在员工1的数据结构中。

// 现在输入一个公司的所有员工信息，以及单个员工id，返回这个员工和他所有下属的重要度之和。

// 示例 1:

// 输入: [[1, 5, [2, 3]], [2, 3, []], [3, 3, []]], 1
// 输出: 11
// 解释:
// 员工1自身的重要度是5，他有两个直系下属2和3，而且2和3的重要度均为3。因此员工1的总重要度是 5 + 3 + 3 = 11。
// 注意:

// 一个员工最多有一个直系领导，但是可以有多个直系下属
// 员工数量不超过2000。


/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */

// dfs 深度优先搜索
// 题目中的输入变量为Array  [[1, 5, [2, 3]], [2, 3, []], [3, 3, []]]
// 但其实是 如下格式
// [
//   {
//     id: 1,
//     importance: 5,
//     subordinates: [2, 3],
//   },
//   {
//     id: 2,
//     importance: 3,
//     subordinates: [],
//   },
//   {
//     id: 3,
//     importance: 3,
//     subordinates: [],
//   },
// ];


 var GetImportance = function(employees, id) {
    
  let res = 0;
  
  let dfs = (idArray, importantNum) =>{
      // 重要度相加
      res = res + importantNum;
      if(idArray == []){
          return;
      }
      // 遍历employees 列表
      for(let i=0; i<employees.length; i++){
          // 如果直属下属 存在列表内 继续遍历
          if(idArray.includes(employees[i].id)){
              dfs( employees[i].subordinates,employees[i].importance)
          }
      }
  }
  dfs([id],0)
  return res;
};


// 广度优先搜索
var GetImportance = function(employees, id) {
    
  let res = 0;
  
  let map = new Map();

  employees.forEach(element => {
    map.set(element.id,element)
  });
  let arr = [id];

  while(arr.length > 0){

    let id = arr.shift()
    let idObj = map.get(id);
    res= res + idObj.importance ; 
    for(let i = 0; i < idObj.subordinates.length; i++){
      arr.push(idObj.subordinates[i])
    }
  }


  return res;
};