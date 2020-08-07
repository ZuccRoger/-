/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let dummyA = headA
    let dummyB = headB
    while (dummyA !== dummyB) {
        if (dummyA === null) {
            dummyA = headB
        } else {
            dummyA = dummyA.next
        }
        if (dummyB === null) {
            dummyB = headA
        } else {
            dummyB = dummyB.next
        }
    }
    return dummyA
};
// @lc code=end