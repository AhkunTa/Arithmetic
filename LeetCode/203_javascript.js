// 删除链表中等于给定值 val 的所有节点。

// 示例:

// 输入: 1->2->6->3->4->5->6, val = 6
// 输出: 1->2->3->4->5
// 通过次数120,944提交次数258,980

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  // 非空判断
  // if(!head) return head;
  // 第一个节点为删除节点
  // if(head.val == val) head = head.next;
  let list = new ListNode(-1);
  list.next = head;
  let res = list;
  while (res) {
    if (res.next && res.next.val == val) {
      res.next = res.next.next;
    } else {
      res = res.next;
    }
  }
  return list.next;
};
