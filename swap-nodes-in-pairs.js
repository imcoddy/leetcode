/**
 * Source:  https://leetcode.com/problems/swap-nodes-in-pairs/
 * Tags:    [Linked List]
 * Level:   Medium
 * Title:   Swap Nodes in Pairs
 * Auther:  @imcoddy
 * Content: Given a linked list, swap every two adjacent nodes and return its head.
 *
 *
 *
 * For example,
 * Given 1->2->3->4, you should return the list as 2->1->4->3.
 *
 *
 *
 * Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed.
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
 * Memo: Need to track one tail node before swap the following!
 * Runtime: 135ms
 * Tests: 55 test cases passed
 * Rank: A
 */
var swapPairs = function(head) {
    var p = head;
    if (!p) {
        return p;
    }

    var q = p.next;
    if (!q) {
        return p;
    }

    head = q;
    var tail = p;
    while (p) {
        q = p.next;
        if (q) {
            tail.next = q;
            var n = q.next;
            p.next = n;
            q.next = p;
        }
        tail = p;
        p = p.next;
    }
    return head;
};


/**
 * Memo: Append two swapped nodes to a new list, and move pointer at two in one loop
 * Complex: O(n)
 * Runtime: 140ms
 * Tests: 55 test cases passed
 * Rank: S
 * Updated: 2015-06-20
 */
var swapPairs = function(head) {
    if (!head || !head.next) return head;

    var dummy = new ListNode(null);
    var tail = dummy;
    var p = head;
    while (p && p.next) {
        var next = p.next.next;
        tail = tail.next = p.next;
        tail = tail.next = p;
        p = next;
    }
    tail.next = p ? p : null;

    return dummy.next;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var util = require("./util.js");
var should = require('should');
console.time('Runtime');
(util.lta(swapPairs(util.atl([1, 2, 3, 4, 5]))).should.eql([2, 1, 4, 3, 5]));
(util.lta(swapPairs(util.atl([1, 2, 3, 4]))).should.eql([2, 1, 4, 3]));

console.timeEnd('Runtime');