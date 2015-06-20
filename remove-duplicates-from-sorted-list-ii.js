/**
 * Source:  https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/
 * Tags:    [Linked List]
 * Level:   Medium
 * Title:   Remove Duplicates from Sorted List II
 * Auther:  @imcoddy
 * Content: Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.
 *
 *
 * For example,
 * Given 1->2->3->3->4->4->5, return 1->2->5.
 * Given 1->1->1->2->3, return 2->3.
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
 * Memo: find the non-duplicate node and append it to tail, note that need to set tail to null as the rest might need to be deleted
 * Runtime: 151ms
 * Tests: 166 test cases passed
 * Rank: S
 */

var deleteDuplicates = function(head) {
    if (!head) return null;

    var dummy = new ListNode(null);
    var tail = dummy;
    var p = head;
    var duplicate = false;

    while (p) {
        while (p.next && p.val === p.next.val) {
            p = p.next;
            duplicate = true;
        }

        if (!duplicate) {
            tail.next = p;
            tail = tail.next;
        }
        p = p.next;
        duplicate = false;
    }

    tail.next = null;
    return dummy.next;
};


/**
 * Memo: Check if the element is duplicated or not. If not, append it to the list.
 * Complex: O(n)
 * Runtime: 164ms
 * Tests: 166 test cases passed
 * Rank: A
 * Updated: 2015-06-20
 */
var deleteDuplicates = function(head) {
    if (!head || !head.next) return head;

    var dummy = new ListNode(null);
    var tail = dummy;
    var p = head;

    while (p) {
        var start = p;
        while (p && p.next && p.next.val === p.val) {
            p = p.next;
        }
        var next = p.next;
        if (start === p) {
            tail.next = p;
            tail = tail.next;
            tail.next = null;
        }
        p = next;
    }

    return dummy.next;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

console.log(util.linkListToString(deleteDuplicates(util.arrayToLinkList([1, 1, 2, 2, 2]))));
console.log(util.linkListToString(deleteDuplicates(util.arrayToLinkList([1, 2, 2, 2]))));
console.log(util.linkListToString(deleteDuplicates(util.arrayToLinkList([1, 1, 1, 3, 3, 5]))));
console.log(util.linkListToString(deleteDuplicates(util.arrayToLinkList([1, 1, 1, 3, 5]))));
console.log(util.linkListToString(deleteDuplicates(util.arrayToLinkList([0, 1, 1, 1, 3, 5]))));
console.log(util.linkListToString(deleteDuplicates(util.arrayToLinkList([]))));
console.log(util.linkListToString(deleteDuplicates(util.arrayToLinkList([1]))));