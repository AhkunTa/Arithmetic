// 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

// 示例：

// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// 全部转化成字符串 比较
var addTwoNumbers = function (l1, l2) {
  // 递归获取值
  let getValue = (l, array) => {
    if (l) {
      return getValue(l.next, [...array, l.val]);
    } else {
      return array;
    }
  };
  let num1 = getValue(l1, []).reverse().join("");
  let num2 = getValue(l2, []).reverse().join("");
  // 防止 测试用例超过最大安全数导致自动转换为 科学计数法
  let number = BigInt(num1) + BigInt(num2);

  let numberStr = number.toString();
  let res = new ListNode(numberStr[0]);
  for (let i = 1; i < numberStr.length; i++) {
    res = new ListNode(numberStr[i], res);
  }
  return res;
};

// 模拟链表操作
