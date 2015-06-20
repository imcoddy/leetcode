/**
 * Source:  https://leetcode.com/problems/linked-list-cycle-ii/
 * Tags:    [Linked List,Two Pointers]
 * Level:   Medium
 * Title:   Linked List Cycle II
 * Auther:  @imcoddy
 * Content: Given a linked list, return the node where the cycle begins. If there is no cycle, return null.
 *
 *
 *
 * Follow up:
 * Can you solve it without using extra space?
 */

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

/**
 * Memo: Mark val to NaN to indicate that this node has been visited.
 * * The original list will be modified. and will fail if origianl list contains val of NaN
 * Complex: O(n)
 * Runtime: 140ms
 * Tests: 16 test cases passed
 * Rank: S
 * Updated: 2015-06-20
 */
var detectCycle = function(head) {
    while (head) {
        if (isNaN(head.val)) {
            return head;
        } else {
            head.val = NaN;
            head = head.next;
        }
    }
    return null;
};


//TODO add solution that doesn't change the orignal list