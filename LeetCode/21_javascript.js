// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

//

// 示例：

// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4

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

var mergeTwoLists = function (l1, l2) {
  let res = new ListNode();
  // 设置res的浅拷贝
  let resCopy = res;
  // 当有一条链表的next为null时 跳出循环
  // 此时另一条可能还存在值
  while (l1 && l2) {
    if (l1.val > l2.val) {
      res.next = l2;
      res = res.next;
      l2 = l2.next;
    } else {
      res.next = l1;
      res = res.next;
      l1 = l1.next;
    }
  }
  // 所以判断 加上另一条非null的值
  if (l1 == null) {
    res.next = l2;
  } else {
    res.next = l1;
  }
  // 此时res 在循环中已经改变 返回res的拷贝
  return resCopy.next;
};

// 递归
var mergeTwoLists = function (l1, l2) {
  if (l1 == null) {
    return l2;
  }
  if (l2 == null) {
    return l1;
  }
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};
