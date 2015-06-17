/**
 * Source:  https://leetcode.com/problems/insertion-sort-list/
 * Tags:    [Linked List,Sort]
 * Level:   Medium
 * Title:   Insertion Sort List
 * Auther:  @imcoddy
 * Content: Sort a linked list using insertion sort.
 */
var util = require("./util.js");

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
 * Memo: Simply search each node and append it to list.
 * Complex: O(n^2)
 * Runtime: 235ms
 * Tests: 21 test cases passed
 * Rank: B
 */
var insertionSortList = function(head) {
    var dummy = new ListNode(null);
    var tail = dummy;
    var p = head;

    while (p) {
        tail = dummy;
        while (tail && tail.next && p.val > tail.next.val) {
            tail = tail.next;
        }
        var q = p.next;
        p.next = tail.next;
        tail.next = p;
        p = q;
    }

    return dummy.next;
};

/**
 * Memo: The link list might contain some sub sorted list, so it will be faster to search the sub sorted list then append it as a whole.
 * Complex: O(n^2)
 * Runtime: 176ms
 * Tests: 21 test cases passed
 * Rank: A
 */
var insertionSortList = function(head) {
    var dummy = new ListNode(null);
    var pointer = dummy;
    var start = head;

    while (start) {
        pointer = dummy;
        while (pointer && pointer.next && start.val > pointer.next.val) {
            pointer = pointer.next;
        }
        var next_val = Number.MAX_VALUE;
        if (pointer && pointer.next) {
            next_val = pointer.next.val;
        }

        var end = start;
        var end_next = end.next;
        while (end_next && end_next.val > end.val && end_next.val < next_val) {
            end = end_next;
            end_next = end.next;
        }

        end.next = pointer.next;
        pointer.next = start;
        start = end_next;
    }
    return dummy.next;
};

/**
 * Memo: Create a new list using dummy head, and simply append each node to that list.
 * Complex: O(n^2)
 * Runtime: 232ms
 * Tests: 21 test cases passed
 * Rank: B
 */
var insertionSortList = function(head) {
    var dummy = new ListNode(null);
    var p = head;
    while (p) {
        var tail = dummy;
        while (tail.next && tail.next.val < p.val) {
            tail = tail.next;
        }
        var q = p.next;
        p.next = tail.next;
        tail.next = p;
        p = q;
    }
    return dummy.next;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var should = require('should');
console.time('Runtime');

console.timeEnd('Runtime');
util.lta(insertionSortList(util.atl([]))).should.eql([]);
util.lta(insertionSortList(util.atl([1]))).should.eql([1]);
util.lta(insertionSortList(util.atl([1, 1, 2, 2, 4]))).should.eql([1, 1, 2, 2, 4]);
util.lta(insertionSortList(util.atl([1, 3, 2, 5, 4]))).should.eql([1, 2, 3, 4, 5]);
util.lta(insertionSortList(util.atl([1, 20, 3, 2, 5, 4, 6, 7, 8]))).should.eql([1, 2, 3, 4, 5, 6, 7, 8, 20]);