/**
 * Source:  https://leetcode.com/problems/reorder-list/
 * Tags:    [Linked List]
 * Level:   Medium
 * Title:   Reorder List
 * Auther:  @imcoddy
 * Content: Given a singly linked list L: L0→L1→…→Ln-1→Ln,
 * reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…
 *
 *
 * You must do this in-place without altering the nodes' values.
 *
 *
 * For example,
 * Given {1,2,3,4}, reorder it to {1,4,2,3}.
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
/**
 * Memo: put each node in an array and link head to tail till the middle
 * Complex: O(n)
 * Runtime: 212ms
 * Tests: 13 test cases passed
 * Rank: S
 */
var reorderList = function(head) {
    var array = [];
    var p = head;
    while (p) {
        array.push(p);
        var q = p;
        p = p.next;
        q.next = null;
    }

    var start = 0;
    var end = array.length - 1;
    while (end > start + 1) {
        array[start++].next = array[end];
        array[end--].next = array[start];
    }
    if (start < end) {
        array[start].next = array[end];
    }

    return head;
};

console.log(util.linkListToString(reorderList(util.arrayToLinkList())));
console.log(util.linkListToString(reorderList(util.arrayToLinkList([]))));
console.log(util.linkListToString(reorderList(util.arrayToLinkList([1]))));
console.log(util.linkListToString(reorderList(util.arrayToLinkList([1, 2]))));
console.log(util.linkListToString(reorderList(util.arrayToLinkList([1, 2, 3, 4]))));
console.log(util.linkListToString(reorderList(util.arrayToLinkList([1, 2, 3, 4, 5]))));
console.log(util.linkListToString(reorderList(util.arrayToLinkList([1, 2, 3, 4, 5, 6]))));
console.log(util.linkListToString(reorderList(util.arrayToLinkList([1, 2, 3, 4, 5, 6, 7]))));