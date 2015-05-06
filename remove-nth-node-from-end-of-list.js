/**
 * Source:  https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 * Tags:    [Linked List,Two Pointers]
 * Level:   Easy
 * Title:   Remove Nth Node From End of List
 * Auther:  @imcoddy
 * Content: Given a linked list, remove the nth node from the end of list and return its head.
 *
 *
 * For example,
 *
 *
 *    Given linked list: 1->2->3->4->5, and n = 2.
 *
 *    After removing the second node from the end, the linked list becomes 1->2->3->5.
 *
 *
 *
 * Note:
 * Given n will always be valid.
 * Try to do this in one pass.
 */
 var util = require('./util.js');
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

 /**
 * Memo: Set two pointers as fast and slow, keep slow is n nodes slower than fast, and keep moving two pointers till fast reaches the end.
 * Runtime: 150ms
 * Tests: 207 test cases passed
 * Rank: S
 */
var removeNthFromEnd = function(head, n) {
    var dummy = new ListNode(null);
    dummy.next = head;
    var fast = dummy;
    var slow = dummy;

    while (fast.next) {
        fast = fast.next;
        if (n-- <= 0) {
            slow = slow.next;
        }
    }
    slow.next = slow.next.next;
    return dummy.next;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}
var list = util.arrayToLinkList([1,2,3,4,5]);
console.log(util.linkListToString(removeNthFromEnd(list, 2)));

list = util.arrayToLinkList([1]);
console.log(util.linkListToString(removeNthFromEnd(list, 1)));

list = util.arrayToLinkList([1,2,3,4,5]);
console.log(util.linkListToString(removeNthFromEnd(list, 1)));
