// 题目 链接：https://leetcode-cn.com/problems/intersection-of-two-linked-lists
// 建议看原题链接
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let list1 = headA;
  let list2 = headB;
  // 申明两个链表的拷贝
  // 依次循环链表 list1的长度循环完 将headb赋值给list1  list2 一样
  // list1的长度+ list2的长度 == list2 + list1 如两者存在交集 最后必存在 list1 == list2
  while (list1 !== list2) {
    list1 = list1 == null ? headB : list1.next;
    list2 = list2 == null ? headA : list2.next;
  }
  return list1;
};
