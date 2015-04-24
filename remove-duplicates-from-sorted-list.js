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

/**
 * @param {ListNode} head
 * @return {ListNode}
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
