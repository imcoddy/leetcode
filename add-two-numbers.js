/**
 * Source:  https://leetcode.com/problems/add-two-numbers/
 * Tags:    [Linked List,Math]
 * Level:   Medium
 * Title:   Add Two Numbers
 * Auther:  @imcoddy
 * Content: You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
 *
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

/**
 * Memo: Iterate both list and add l2 to l1 until one is finished.
 * Complex: O(n)
 * Runtime: 288ms
 * Tests: 1555 test cases passed
 * Rank: S
 * Updated: 2015-06-20
 */
var addTwoNumbers = function(l1, l2) {
    var dummy = new ListNode(0);
    dummy.next = l1;
    var tail = dummy;

    while (l1 && l2) {
        l1.val = l1.val + l2.val + (tail.val >= 10 ? 1 : 0);
        tail.val %= 10;
        tail = l1;
        l1 = l1.next;
        l2 = l2.next;
    }
    if (!l1) tail.next = l2; //append to l2 if l2 is longer

    while (tail && tail.val >= 10) {
        tail.val %= 10;
        if (tail.next) {
            tail.next.val += 1;
            tail = tail.next;
        } else {
            tail.next = new ListNode(1);
        }
    }

    return dummy.next;
};


/**
 * Memo: Iterate both list and add l2 to l1 until one is finished.
 * Complex: O(max(m, n))
 * Runtime: 288ms
 * Tests: 1555 test cases passed
 * Rank: S
 * Updated: 2015-08-30
 */
var addTwoNumbers = function(l1, l2) {
    var dummy = new ListNode(null);
    dummy.next = l1;
    var tail = dummy;

    while (l1 && l2) {
        l1.val = l1.val + l2.val;
        tail = l1;
        l1 = l1.next;
        l2 = l2.next;
    }

    if (!l1) tail.next = l2; //append to l2 if l2 is longer

    tail = dummy.next;
    while (tail) {
        if (tail.val > 9) {
            tail.val %= 10;
            if (tail.next) {
                tail.next.val += 1;
            } else {
                tail.next = new ListNode(1);
            }
        }
        tail = tail.next;
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
util.lta(addTwoNumbers(util.atl([2, 4, 3]), util.atl([5, 6, 4]))).should.eql([7, 0, 8]);
util.lta(addTwoNumbers(util.atl([2, 4, 3]), util.atl([5, 6, 4, 1, 2]))).should.eql([7, 0, 8, 1, 2]);
(util.lta(addTwoNumbers(util.atl([1]), util.atl([9, 9, 9]))).should.eql([0, 0, 0, 1]));
(util.lta(addTwoNumbers(util.atl([1]), util.atl([9]))).should.eql([0, 1]));
console.timeEnd('Runtime');