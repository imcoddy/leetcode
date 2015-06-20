/**
 * Source:  https://leetcode.com/problems/reverse-linked-list-ii/
 * Tags:    [Linked List]
 * Level:   Medium
 * Title:   Reverse Linked List II
 * Auther:  @imcoddy
 * Content: Reverse a linked list from position m to n. Do it in-place and in one-pass.
 *
 *
 *
 * For example:
 * Given 1->2->3->4->5->NULL, m = 2 and n = 4,
 *
 *
 * return 1->4->3->2->5->NULL.
 *
 *
 * Note:
 * Given m, n satisfy the following condition:
 * 1 ≤ m ≤ n ≤ length of list.
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */

/**
 * Memo: Switch append to tail or insert
 * Complex: O(n)
 * Runtime: 136ms
 * Tests: 44 test cases passed
 * Rank: S
 * Updated: 2015-06-20
 */
var reverseBetween = function(head, m, n) {
    if (!head || !head.next || m === n) return head;
    var dummy = new ListNode(null);
    var tail = dummy;
    var p = head;
    var count = 0;

    while (p) {
        var pnext = p.next;
        if (++count >= m && count <= n) {
            p.next = tail.next;
            tail.next = p;
        } else {
            while (tail.next) tail = tail.next;
            tail.next = p;
            tail = tail.next;
            tail.next = null;
        }

        p = pnext;
    }

    return dummy.next;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}
var util = require("./util.js");
var should = require('should');
console.time('Runtime');
util.lta(reverseBetween(util.atl([1, 2, 3, 4, 5]), 2, 4)).should.eql([1, 4, 3, 2, 5]);

console.timeEnd('Runtime');