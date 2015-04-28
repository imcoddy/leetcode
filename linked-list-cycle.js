/**
 * Source:  https://leetcode.com/problems/linked-list-cycle/
 * Tags:    [Linked List,Two Pointers]
 * Level:   Medium
 * Title:   Linked List Cycle
 * Auther:  @imcoddy
 * Content: Given a linked list, determine if it has a cycle in it.
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
 * @return {boolean}
 */

/**
 * Memo: Create a fast pointer and slow pointer, and see if the fast one can catch up with the slow one when fast is not null.
 * Runtime: 150ms
 * Rank: A
 */
var hasCycle = function(head) {
    if (!head) {
        return false;
    }

    var slow = head;
    var fast = head.next;

    while (fast && fast !== slow) {
        slow = slow.next;
        fast = fast.next;
        if (!fast) {
            return false;
        }
        if (fast === slow) {
            return true;
        }

        fast = fast.next;
        if (!fast) {
            return false;
        }
        if (fast === slow) {
            return true;
        }
    }
    return fast !== null;
};