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

/**
 * Memo: Find out length of the linked list first and search the length - n th element and delete it.
 * Complex: O(n)
 * Runtime: 152ms
 * Tests: 207 test cases passed
 * Rank: A
 * Updated: 2015-06-16
 */
var removeNthFromEnd = function(head, n) {
    var count = 0;
    var p = head;
    while (p) {
        p = p.next;
        count++;
    }

    count = count - n;
    if (count === 0) { // remove the first element
        return head.next;
    }

    if (count > 0) {
        p = head;
        while (count > 1) {
            p = p.next;
            count--;
        }
        p.next = p.next.next;
    }
    //count < 0 is invalid, since the n will always be valid so ignore this case
    return head;
};


/**
 * Memo: Same solution as above using dummy head.
 * Complex: O(n)
 * Runtime: 180ms
 * Tests: 207 test cases passed
 * Rank: B
 * Updated: 2015-06-16
 */
var removeNthFromEnd = function(head, n) {
    var p = head;
    var count = 0;
    while (p) {
        p = p.next;
        count++;
    }

    var dummy = new ListNode(null);
    dummy.next = head;
    count = count - n;
    p = dummy;
    while (count > 0) {
        p = p.next;
        count--;
    }
    p.next = p.next.next;
    return dummy.next;
};

/**
 * Memo: Use fast and slow pointers and keep n nodes between them. When fast reaches the end, slow will be the element to remove its next node (if exists).
 * Complex: O(n)
 * Runtime: 148ms
 * Tests: 207 test cases passed
 * Rank: S
 * Updated: 2015-06-16
 */
var removeNthFromEnd = function(head, n) {
    var dummy = new ListNode(null);
    dummy.next = head;
    var fast = dummy;
    var slow = dummy;
    while (fast) {
        fast = fast.next;
        if (n-- < 0) slow = slow.next;
    }
    if (slow.next) slow.next = slow.next.next;
    return dummy.next;
};


/**
 * Memo: Use fast and slow pointers and keep n nodes between them. When fast reaches the end, slow will be the element to remove its next node (if exists).
 * Complex: O(n)
 * Runtime: 148ms
 * Tests: 207 test cases passed
 * Rank: S
 * Updated: 2015-08-20
 */
var removeNthFromEnd = function(head, n) {
    var dummy = new ListNode(null);
    dummy.next = head;
    var fast = dummy;
    var slow = dummy;
    while (fast = fast.next)
        if (--n < 0) slow = slow.next;
    if (slow.next) slow.next = slow.next.next;
    return dummy.next;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var should = require('should');
console.time('Runtime');
util.lta(removeNthFromEnd(util.atl([1]), 1)).should.eql([]);
util.lta(removeNthFromEnd(util.atl([1, 2]), 1)).should.eql([1]);
util.lta(removeNthFromEnd(util.atl([1, 2]), 2)).should.eql([2]);
util.lta(removeNthFromEnd(util.atl([1, 2, 3, 4, 5]), 2)).should.eql([1, 2, 3, 5]);
util.lta(removeNthFromEnd(util.atl([1, 2, 3, 4, 5]), 1)).should.eql([1, 2, 3, 4]);

console.timeEnd('Runtime');