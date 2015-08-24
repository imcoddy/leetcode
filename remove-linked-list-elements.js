/**
 * Source:  https://leetcode.com/problems/remove-linked-list-elements/
 * Tags:    [Linked List]
 * Level:   Easy
 * Title:   Remove Linked List Elements
 * Auther:  @imcoddy
 * Content: Remove all elements from a linked list of integers that have value val.
 *
 * Example
 * Given: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6,  val = 6
 * Return: 1 --> 2 --> 3 --> 4 --> 5
 *
 *
 * Credits:Special thanks to @mithmatt for adding this problem and creating all test cases.
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
 * @param {number} val
 * @return {ListNode}
 */

/**
 * Explanation: Many traps in here.
 * 1. Head could be needed to delete
 * 2. Dont move the pointer until next doesn't need to delete
 * Runtime: 177ms
 * Rank: S
 */
var removeElements = function(head, val) {
    // remove when head is element of val
    while (head && head.val === val) {
        head = head.next;
    }

    var p = head;
    while (p) {
        while (p.next && p.next.val === val) {
            var d = p.next;
            p.next = d.next;
            d = null;
        }
        p = p.next;
    }
    return head;
};


/**
 * Memo: Use prev and p to search if p.val is equal to val, if so, delete p and keep searching till the end.
 * Complex: O(n)
 * Runtime: 204ms
 * Tests: 63 test cases passed
 * Rank: B
 * Updated: 2015-06-16
 */
var removeElements = function(head, val) {
    var dummy = new ListNode(null);
    dummy.next = head;
    var prev = dummy;
    var p = dummy.next;
    while (p) {
        if (p.val === val) {
            prev.next = p.next;
        } else {
            prev = p;
        }
        p = p.next;
    }
    return dummy.next;
};

/**
 * Memo: Improve from above solution by keep moving if p.next equal val, works better if continous elements need to be removed.
 * Complex: O(n)
 * Runtime: 168ms
 * Tests: 63 test cases passed
 * Rank: S
 * Updated: 2015-06-16
 */
var removeElements = function(head, val) {
    var dummy = new ListNode(null);
    dummy.next = head;
    var prev = dummy;
    var p = dummy.next;
    while (p) {
        while (p && p.val === val) p = p.next;
        prev.next = p;
        if (p) {
            prev = prev.next;
            p = p.next;
        }
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
util.lta(removeElements(util.atl([1, 2, 3, 4, 5]), 2)).should.eql([1, 3, 4, 5]);
util.lta(removeElements(util.atl([1, 2, 3, 2, 4, 5, 2, 2]), 2)).should.eql([1, 3, 4, 5]);
util.lta(removeElements(util.atl([1, 1, 1, 1]), 1)).should.eql([]);
util.lta(removeElements(util.atl([1, 2, 1, 2]), 2)).should.eql([1, 1]);
util.lta(removeElements(util.atl([1, 2, 3, 4, 5]), 2)).should.eql([1, 3, 4, 5]);

console.timeEnd('Runtime');