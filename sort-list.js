/**
 * Source:  https://leetcode.com/problems/sort-list/
 * Tags:    [Linked List,Sort]
 * Level:   Medium
 * Title:   Sort List
 * Auther:  @imcoddy
 * Content: Sort a linked list in O(n log n) time using constant space complexity.
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
 * Memo: Use fast and slow pointer to get the middle node, break it into two lists and use merge sort recursively
 * Complex: O(nlogn)
 * Runtime: 224ms
 * Tests: 15 test cases passed
 * Rank: S
 * Updated: 2015-06-20
 */
var sortList = function(head) {
    if (!head || !head.next) return head;
    var fast = head.next.next;
    var slow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    var head1 = sortList(slow.next);
    slow.next = null;
    var head2 = sortList(head);
    return mergeList(head1, head2);
};

var mergeList = function(h1, h2) {
    var dummy = new ListNode(null);
    var tail = dummy;
    while (h1 && h2) {
        if (h1.val <= h2.val) {
            tail = tail.next = h1;
            h1 = h1.next;
        } else {
            tail = tail.next = h2;
            h2 = h2.next;
        }
    }
    tail.next = h1 ? h1 : h2;
    return dummy.next;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var util = require("./util.js");
var should = require('should');
console.time('Runtime');
util.lta(mergeList(util.atl([1, 3, 5, 8, 9]), util.atl([2, 4, 6, 7, 10]))).should.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
util.lta(sortList(util.atl([1, 3, 5, 8, 9, 2, 4, 6, 7, 10]))).should.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.timeEnd('Runtime');