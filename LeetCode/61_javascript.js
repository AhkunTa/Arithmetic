// 给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。

// 示例 1:

// 输入: 1->2->3->4->5->NULL, k = 2
// 输出: 4->5->1->2->3->NULL
// 解释:
// 向右旋转 1 步: 5->1->2->3->4->NULL
// 向右旋转 2 步: 4->5->1->2->3->NULL
// 示例 2:

// 输入: 0->1->2->NULL, k = 4
// 输出: 2->0->1->NULL
// 解释:
// 向右旋转 1 步: 2->0->1->NULL
// 向右旋转 2 步: 1->2->0->NULL
// 向右旋转 3 步: 0->1->2->NULL
// 向右旋转 4 步: 2->0->1->NULL

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  // 先转换成环形
  // 在断开
  if (!head) return null;
  let list = head;
  // 获取链表的长度
  let length = 1;
  while (list.next) {
    length++;
    list = list.next;
  }

  list.next = head;
  let temp = head;
  // 循环长度 获取该断的点 因为k会远大于length 所以 k%length
  for (let i = 1; i < length - (k % length); i++) {
    temp = temp.next;
  }
  // 获取返回头节点
  let newHead = temp.next;
  // 然后将尾节点断掉
  temp.next = null;
  return newHead;
};
