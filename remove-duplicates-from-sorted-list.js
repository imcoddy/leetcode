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

function ListNode(val) {
  this.val = val;
  this.next = null;
}

console.log(deleteDuplicates(util.arrayToLinkList([1,1,1,2,2,3])));
