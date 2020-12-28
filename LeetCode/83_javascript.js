// 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

// 示例 1:

// 输入: 1->1->2
// 输出: 1->2
// 示例 2:

// 输入: 1->1->2->3->3
// 输出: 1->2->3

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 链表简单知识，题目中写明是排序链表
var deleteDuplicates = function (head) {
  if (head == null) return head;
  let current = head;
  while (current.next != null) {
    if (current.val == current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
};

var deleteDuplicates = function (head) {
  let list = new ListNode(null);
  list.next = head;
  while (list) {
    if (list.next && list.val == list.next.val) {
      // 主要在于此处判断
      list.next = list.next.next;
    } else {
      list = list.next;
    }
  }
  return head;
};
