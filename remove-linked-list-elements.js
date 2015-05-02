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