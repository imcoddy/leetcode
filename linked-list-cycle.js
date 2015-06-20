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

/**
 * Memo: Imporeve from above version. Return directly when there is only one node and link to itself.
 * Complex: O(n)
 * Runtime: 124ms
 * Tests: 16 test cases passed
 * Rank: S
 * Updated: 2015-06-20
 */
var hasCycle = function(head) {
    if (!head || !head.next) return false;
    if (head.next === head) return true;

    var slow = head;
    var fast = head.next;
    while (fast && fast !== slow) {
        slow = slow.next;
        fast = fast.next;

        if (!fast) return false;
        if (fast === slow) return true;
        fast = fast.next;
        if (!fast) return false;
        if (fast === slow) return true;
    }
    return false;
};

/**
 * Memo: Imporeve from above version. Return directly when there is only one node and link to itself.
 * Complex: O(n)
 * Runtime: 124ms
 * Tests: 16 test cases passed
 * Rank: S
 * Updated: 2015-06-20
 */
var hasCycle = function(head) {
    if (!head || !head.next) return false;
    if (head.next === head) return true;

    var slow = head;
    var fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (fast === slow) return true;
    }
    return false;
};


/**
 * Memo: Mark val to NaN to indicate that this node has been visited.
 * * The original list will be modified. and will fail if origianl list contains val of NaN
 * Complex: O(n)
 * Runtime: 140ms
 * Tests: 16 test cases passed
 * Rank: S
 * Updated: 2015-06-20
 */
var hasCycle = function(head) {
    while (head) {
        if (isNaN(head.val)) {
            return true;
        } else {
            head.val = NaN;
            head = head.next;
        }
    }
    return false;
};