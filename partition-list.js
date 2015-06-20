/**
 * Source:  https://leetcode.com/problems/partition-list/
 * Tags:    [Linked List,Two Pointers]
 * Level:   Medium
 * Title:   Partition List
 * Auther:  @imcoddy
 * Content: Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.
 *
 *
 * You should preserve the original relative order of the nodes in each of the two partitions.
 *
 *
 * For example,
 * Given 1->4->3->2->5->2 and x = 3,
 * return 1->2->2->4->3->5.
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
 * @param {number} x
 * @return {ListNode}
 */

/**
 * Memo: Create two lists and append elements accordingly, then list the first list to the second one.
 * Complex: O(n)
 * Runtime: 148ms
 * Tests: 166 test cases passed
 * Rank: S
 * Updated: 2015-06-20
 */
var partition = function(head, x) {
    var dummy1 = new ListNode(null);
    var dummy2 = new ListNode(null);
    var tail1 = dummy1;
    var tail2 = dummy2;
    var p = head;
    while (p) {
        var q = p.next;
        if (p.val < x) {
            p.next = tail1.next;
            tail1.next = p;
            tail1 = tail1.next;
        } else {
            p.next = tail2.next;
            tail2.next = p;
            tail2 = tail2.next;
        }
        p = q;
    }

    tail1.next = dummy2.next;

    return dummy1.next;
};

/**
 * Memo: A bit improve than the above.
 * Complex: O(n)
 * Runtime: 153ms
 * Tests: 166 test cases passed
 * Rank: S
 * Updated: 2015-06-20
 */
var partition = function(head, x) {
    var dummy1 = new ListNode(null);
    var dummy2 = new ListNode(null);
    var tails = [dummy1, dummy2];
    while (head) {
        var q = head.next;
        var i = head.val < x ? 0 : 1;
        tails[i] = tails[i].next = head;
        head.next = null;
        head = q;
    }

    tails[0].next = dummy2.next;
    return dummy1.next;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var util = require("./util.js");
var should = require('should');
console.time('Runtime');
util.lta(partition(util.atl([1, 4, 3, 2, 5, 2]), 3)).should.eql([1, 2, 2, 4, 3, 5]);

console.timeEnd('Runtime');