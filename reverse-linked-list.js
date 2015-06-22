/**
 * Source:  https://leetcode.com/problems/reverse-linked-list/
 * Tags:    [Linked List]
 * Level:   Easy
 * Title:   Reverse Linked List
 * Auther:  @imcoddy
 * Content: Reverse a singly linked list.
 *
 * click to show more hints.
 *
 * Hint:
 * A linked list can be reversed either iteratively or recursively. Could you implement both?
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
var util = require('./util.js');

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//TODO add recursive solution

/**
 * Memo:
 * Runtime: 122ms
 * Tests: 27 test cases passed
 * Rank: NA
 */
var reverseList = function(head) {
    var dummy = new ListNode(null);
    var p = head;
    while (p) {
        var q = p.next;
        p.next = dummy.next;
        dummy.next = p;
        p = q;
    }
    return dummy.next;
};

/**
 * Memo:
 * Complex: O(n)
 * Runtime: 128ms
 * Tests: 27 test cases passed
 * Rank: S
 * Updated: 2015-06-15
 */
var reverseList = function(head) {
    var dummy = new ListNode(null);
    var p = head;
    while (p) {
        var q = p.next;
        p.next = dummy.next;
        dummy.next = p;
        p = q;
    }
    return dummy.next;
};

var reverseList = function(head) {
    var dummy = new ListNode(null);
    while (head) {
        var next = head.next;
        head.next = dummy.next;
        dummy.next = head;
        head = next;
    }
    return dummy.next;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var should = require('should');
console.time('Runtime');

var list = util.arrayToLinkList([1, 2, 3, 4, 5]);
util.linkListToArray(reverseList(list)).should.containDeepOrdered([5, 4, 3, 2, 1]);

list = util.arrayToLinkList([]);
util.linkListToArray(reverseList(list)).should.containDeepOrdered([]);

list = util.arrayToLinkList([1]);
util.linkListToArray(reverseList(list)).should.containDeepOrdered([1]);
console.timeEnd('Runtime');