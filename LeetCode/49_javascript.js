// 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。

// 示例:

// 输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
// 输出:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// 说明：

// 所有输入均为小写字母。
// 不考虑答案输出的顺序。

//

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = new Map();
  let newStr = [],
    res = [];
  // 将数组字符串序列化为同样的值
  // newStr  =  ['aet','aet','ant','aet','ant','abt' ]
  for (let i = 0; i < strs.length; i++) {
    newStr[i] = strs[i].split("").sort().join("");
  }

  // 获取map表 获取的map表类似这样
  // {
  //   'aet' : ["ate","eat","tea"],
  //   'ant' : ["nat","tan"],
  //   'abt' : ["bat"],
  // }
  for (let j = 0; j < newStr.length; j++) {
    if (!map.get(newStr[j])) {
      map.set(newStr[j], [strs[j]]);
    } else {
      map.set(newStr[j], [...map.get(newStr[j]), strs[j]]);
    }
  }
  // 将map表的value返回
  map.forEach((value, key) => {
    res.push(value);
  });
  return res;

  // 返回map表也可以简化为

  // return Array.from(map.values)
};
