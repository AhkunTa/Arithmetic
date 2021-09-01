// 输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。

// 例如，一个链表有 6 个节点，从头节点开始，它们的值依次是 1、2、3、4、5、6。这个链表的倒数第 3 个节点是值为 4 的节点。

//

// 示例：

// 给定一个链表: 1->2->3->4->5, 和 k = 2.

// 返回链表 4->5.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// 2021.09.02 每日一题
var getKthFromEnd = function (head, k) {
  let length = 0;
  let copy = head;
  // 计算链表长度
  while (copy) {
    length++;
    copy = copy.next;
  }
  // 然后再计算走几步
  if (length >= k) {
    let len = length - k;
    while (len--) {
      head = head.next;
    }
    return head;
  } else {
    return null;
  }
};

// 快慢指针
var getKthFromEnd = function (head, k) {
  let fast = (slow = head);
  // 快指针走k步
  // 然后 快慢一起走
  // 走到底慢指针的值就是要取的值
  while (k-- && fast) {
    fast = fast.next;
  }

  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }
  return slow;
};
