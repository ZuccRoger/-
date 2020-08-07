/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
 */

// @lc code=start
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
var removeNthFromEnd = function (head, n) {
    //双链表遍历法
    let dummy = new ListNode()
    dummy.next = head
    let n1 = dummy
    let n2 = dummy
    for (let i = 0; i <= n; i++) {
        n2 = n2.next
    }
    while (n2 !== null) {
        n1 = n1.next
        n2 = n2.next
    }
    n1.next = n1.next.next
    return dummy.next
};
// @lc code=end