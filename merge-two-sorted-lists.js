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


/**
 * Memo: Compare each head and move the smaller one to new list.
 * Complex: O(m+n)
 * Runtime: 160ms
 * Tests: 208 test cases passed
 * Rank: B
 * Updated: 2015-06-16
 */
var mergeTwoLists = function(l1, l2) {
    var dummy = new ListNode(null);
    var tail = dummy;
    var p1 = l1;
    var p2 = l2;

    while (p1 && p2) {
        if (p1.val < p2.val) {
            tail.next = p1;
            p1 = p1.next;
        } else {
            tail.next = p2;
            p2 = p2.next;
        }
        tail = tail.next;
    }
    tail.next = p1 ? p1 : p2;

    return dummy.next;
};

/**
 * Memo: Use small and large pointer to record current headers, and append small one to tail, and switch small.next to large if it is not null.
 * Complex: O(m+n)
 * Runtime: 160ms
 * Tests: 208 test cases passed
 * Rank: S
 * Updated: 2015-06-16
 */
var mergeTwoLists = function(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;

    var dummy = new ListNode(null);
    var tail = dummy;
    var small = l1.val <= l2.val ? l1 : l2;
    var large = l1.val <= l2.val ? l2 : l1;

    while (small && large) {
        tail.next = small;
        while (small.next && small.next.val <= large.val) {
            small = small.next;
        }
        var smallnext = small.next;
        tail = small;
        tail.next = large;
        if (small.next) {
            large = smallnext;
            small = tail.next;
        }
    }
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

l1 = util.arrayToLinkList([12, 24, 36, 48, 60]);
l2 = util.arrayToLinkList([1, 3, 5, 7, 9]);
console.log(util.linkListToString(mergeTwoLists(l1, l2)));

l1 = util.arrayToLinkList([1, 3, 5, 7, 9, 11, 13, 25]);
l2 = util.arrayToLinkList([12, 24, 36, 48, 60]);
console.log(util.linkListToString(mergeTwoLists(l1, l2)));