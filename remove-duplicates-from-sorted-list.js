/**
 * Source:  https://leetcode.com/problems/remove-duplicates-from-sorted-list/
 * Tags:    [Linked List]
 * Level:   Easy
 * Updated: 2015-04-24
 * Title:   Remove Duplicates from Sorted List
 * Auther:  @imcoddy
 * Content: Given a sorted linked list, delete all duplicates such that each element appear only once.
 *
 *
 * For example,
 * Given 1->1->2, return 1->2.
 * Given 1->1->2->3->3, return 1->2->3.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

var util = require("./util.js");

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/**
 * Memo:
 * Complex: O(n)
 * Runtime: 158ms
 * Tests: 164 test cases passed
 * Rank: S
 */
var deleteDuplicates = function(head) {
    var node = head;
    while (node) {
        var next = node.next;
        while (next && node.val === next.val) {
            node.next = next.next;
            next = null;
            next = node.next;
        }
        node = node.next;
    }
    return head;
};

/**
 * Memo: Use dummy head to solve
 * Complex: O(n)
 * Runtime: 147ms
 * Tests: 164 test cases passed
 * Rank: S
 */

var deleteDuplicatesDummy = function(head) {
    var dummy = new ListNode(null);
    var tail = dummy;
    tail.next = head;

    while (tail) {
        while (tail.next && tail.next.val === tail.val) {
            tail.next = tail.next.next; // remove next node if val is the same
        }
        tail = tail.next; // move tail to last node
    }
    return dummy.next;
};

/**
 * Memo: Remove next element if it is the same as current one.
 * Complex: O(n)
 * Runtime: 168ms
 * Tests: 164 test cases passed
 * Rank: A
 * Updated: 2015-06-16
 */
var deleteDuplicates = function(head) {
    var tail = head;
    while (tail) {
        while (tail.next && tail.next.val === tail.val) {
            tail.next = tail.next.next;
        }
        tail = tail.next;
    }
    return head;
};

/**
 * Memo: Keep moving next node until it reaches either null or different value.
 * Complex: O(n)
 * Runtime: 168ms
 * Tests: 164 test cases passed
 * Rank: S
 * Updated: 2015-06-17
 */
var deleteDuplicates = function(head) {
    var node = head;
    while (node) {
        var next = node.next;
        while (next && next.val === node.val) {
            next = next.next;
        }
        node.next = next;
        node = node.next;
    }
    return head;
};

var deleteDuplicates = function(head) {
    var tail = head;
    while (tail) {
        while (tail.next && tail.next.val === tail.val) tail.next = tail.next.next;
        tail = tail.next;
    }
    return head;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var should = require('should');
console.time('Runtime');
util.lta(deleteDuplicates(util.atl([1, 2, 3, 4]))).should.eql([1, 2, 3, 4]);
util.lta(deleteDuplicates(util.atl([1, 1, 2, 2, 3, 3, 4]))).should.eql([1, 2, 3, 4]);

console.timeEnd('Runtime');