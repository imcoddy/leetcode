/**
 * Source:  https://leetcode.com/problems/reverse-nodes-in-k-group/
 * Tags:    [Linked List]
 * Level:   Hard
 * Title:   Reverse Nodes in k-Group
 * Auther:  @imcoddy
 * Content: Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.
 *
 *
 *
 * If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.
 *
 * You may not alter the values in the nodes, only nodes itself may be changed.
 *
 * Only constant memory is allowed.
 *
 *
 * For example,
 * Given this linked list: 1->2->3->4->5
 *
 *
 *
 * For k = 2, you should return: 2->1->4->3->5
 *
 *
 *
 * For k = 3, you should return: 3->2->1->4->5
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
 * @param {number} k
 * @return {ListNode}
 */

/**
 * Memo: Track a list with k nodes, reverse this short list and append it to result.
 * Complex: O(n)
 * Runtime: 168ms
 * Tests: 81 test cases passed
 * Rank: S
 * Updated: 2015-06-20
 */
var reverseKGroup = function(head, k) {
    if (!head || k === 1) return head;

    var dummy = new ListNode(null);
    var tail = dummy;
    while (head) {
        var start = head;
        var count = 0;
        while (head && ++count < k) head = head.next;

        if (head && count === k) {
            var next = head.next;
            head.next = null; // break from here
            tail.next = reverseList(start);
            tail = start; // as it has been reversed
            head = next;
        } else {
            tail.next = start;
            break;
        }
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

var util = require("./util.js");
var should = require('should');
console.time('Runtime');
util.lta(reverseKGroup(util.atl([1, 2, 3, 4, 5]), 2)).should.eql([2, 1, 4, 3, 5]);
util.lta(reverseKGroup(util.atl([1, 2, 3, 4, 5]), 3)).should.eql([3, 2, 1, 4, 5]);
util.lta(reverseKGroup(util.atl([1, 2, 3, 4, 5, 6]), 3)).should.eql([3, 2, 1, 6, 5, 4]);

console.timeEnd('Runtime');