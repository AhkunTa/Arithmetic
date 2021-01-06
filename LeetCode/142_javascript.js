// 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

// 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意，pos 仅仅是用于标识环的情况，并不会作为参数传递到函数中。

// 说明：不允许修改给定的链表。

// 进阶：

// 你是否可以使用 O(1) 空间解决此题？
//

// 示例 1：

// 输入：head = [3,2,0,-4], pos = 1
// 输出：返回索引为 1 的链表节点
// 解释：链表中有一个环，其尾部连接到第二个节点。
// 示例 2：

// 输入：head = [1,2], pos = 0
// 输出：返回索引为 0 的链表节点
// 解释：链表中有一个环，其尾部连接到第一个节点。
// 示例 3：

// 输入：head = [1], pos = -1
// 输出：返回 null
// 解释：链表中没有环。
//

// 提示：

// 链表中节点的数目范围在范围 [0, 104] 内
// -105 <= Node.val <= 105
// pos 的值为 -1 或者链表中的一个有效索引

// 图片链接：https://leetcode-cn.com/problems/linked-list-cycle-ii

// 哈希表 但空间复杂度为 O(n)
var detectCycle = function (head) {
  let map = new Map();
  while (head) {
    if (!map.get(head)) {
      map.set(head, true);
    } else {
      return head;
    }
    head = head.next;
  }
  return null;
};

// 双指针
// 空间复杂度 O(1)
// 设 指针从头节点到第一个入环节点的距离为a 环的长度为 b
// 快指针走了 二倍的慢指针步数 f = 2s
// 快指针比满指针多走了n个环的长度 f = s + nb
// 所以 s = nb 即 慢指针走的步数为 n个环的长度

// 获取入环的第一个节点
// 当前所有走到环口的距离 k = a + nb
// 而目前慢指针走了 nb步 只需要再走a步 慢指针会走到第一个入环节点

var detectCycle = function (head) {
  if (!head) return null;
  let p1 = head;
  let p2 = head;
  let isCycle = false;
  while (p2.next && p2.next.next) {
    p1 = p1.next;
    p2 = p2.next.next;
    if (p1 == p2) {
      // 快慢指针相遇 表示有环
      isCycle = true;
      break;
    }
  }

  if (isCycle) {
    let p3 = head;
    while (p3 !== p1) {
      p3 = p3.next;
      p1 = p1.next;
    }
    return p3;
  } else {
    return null;
  }
};
