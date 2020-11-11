// 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

// 示例：

// 给定一个链表: 1->2->3->4->5, 和 n = 2.

// 当删除了倒数第二个节点后，链表变为 1->2->3->5.
// 说明：

// 给定的 n 保证是有效的。


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */


// 双指针

// 时间 O(n)
// 空间 O(1)
var removeNthFromEnd = function(head, n) {
    let listNode = new ListNode(0);
    listNode.next = head;
    let fast = listNode,slow = listNode;
    while(n--){
        fast = fast.next;
    }

    while(fast && fast.next){
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;
    return listNode.next;
};