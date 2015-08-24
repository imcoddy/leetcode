/**
 * Source:  https://leetcode.com/problems/delete-node-in-a-linked-list/
 * Tags:    [Linked List]
 * Level:   Easy
 * Title:   Delete Node in a Linked List
 * Auther:  @imcoddy
 * Content: Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.
 *
 *
 *
 * Supposed the linked list is 1 -> 2 -> 3 -> 4 and you are given the third node with value 3, the linked list should become 1 -> 2 -> 4 after calling your function.
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *                   Show Similar Problems
 *
 *
 *                      (E) Remove Linked List Elements
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

/**
 * Memo: Since the node won't be the last one, simply copy its next node's value and link it to its next as well
 * Complex: O(1)
 * Runtime: 148ms
 * Tests: 83 test cases passed
 * Rank: S
 * Updated: 2015--
 */
var deleteNode = function(node) {
  if (node.next) {
    node.val = node.next.val;
    node.next = node.next.next;
  }
};