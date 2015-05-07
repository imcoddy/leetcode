/**
 * Source:  https://leetcode.com/problems/merge-two-sorted-lists/
 * Tags:    [Linked List]
 * Level:   Easy
 * Title:   Merge Two Sorted Lists
 * Auther:  @imcoddy
 * Content: Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
 */

var util = require('./util.js');
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
 * Memo:
 * Runtime: 176ms
 * Tests: 208 test cases passed
 * Rank: A
 */
var mergeTwoLists = function(l1, l2) {
    var dummy = new ListNode(null);
    var tail = dummy;
    var p1 = l1;
    var p2 = l2;

    while (p1 && p2) {
        if (p1.val > p2.val) {
            tail.next = p2;
            p2 = p2.next;
        } else {
            tail.next = p1;
            p1 = p1.next;
        }
        tail = tail.next;
    }

    // link the rest to tail.next when one link list is done
    tail.next = p1 ? p1 : p2;
    return dummy.next;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var l1 = util.arrayToLinkList([1, 3, 5, 7, 9]);
var l2 = util.arrayToLinkList([2, 4, 6, 8, 10]);
console.log(util.linkListToString(mergeTwoLists(l1, l2)));

l1 = util.arrayToLinkList([1, 3, 5, 7, 9]);
l2 = util.arrayToLinkList([12, 24, 36, 48, 60]);
console.log(util.linkListToString(mergeTwoLists(l1, l2)));
