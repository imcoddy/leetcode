/**
 * Source:  https://leetcode.com/problems/rotate-list/
 * Tags:    [Linked List,Two Pointers]
 * Level:   Medium
 * Title:   Rotate List
 * Auther:  @imcoddy
 * Content: Given a list, rotate the list to the right by k places, where k is non-negative.
 *
 * For example:
 * Given 1->2->3->4->5->NULL and k = 2,
 * return 4->5->1->2->3->NULL.
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
 * @param {number} k
 * @return {ListNode}
 */


/**
 * Memo: Calculate link list length and move accordingly
 * Complex: O(n^2)
 * Runtime: 182ms
 * Tests: 230 test cases passed
 * Rank: B
 */
var rotateRight = function(head, k) {
    if (!head || !head.next) {
        return head;
    }

    var dummy = new ListNode(null);
    var p = head;
    var count = 0;
    while (p) {
        p = p.next;
        count++;
    }

    var break_at = count - (k % count);
    if (break_at === count) {
        return head;
    }

    p = head;
    while (--break_at > 0) {
        p = p.next;
    }
    dummy.next = p.next;
    p.next = null;

    p = dummy;
    while (p.next) {
        p = p.next;
    }
    p.next = head;
    return dummy.next;
};

/**
 * Memo: Note that the k could probably larger than length of the link list
 * Complex: O(n^2)
 * Runtime: ms
 * Tests: 230 test cases passed
 * Rank: S
 */
var rotateRight = function(head, k) {
    if (!head || !head.next) {
        return head;
    }

    var dummy = new ListNode(null);
    dummy.next = head;
    var p = head;
    var q = head;

    var count = -k;
    while (p.next) {
        p = p.next;
        count++;
        if (count > 0) {
            q = q.next;
        }
    }

    var length = count + k + 1;
    if (k % length === 0) {
        return head; // no need to move as it turns a full round
    }

    if (k < length) {
        p.next = dummy.next;
        dummy.next = q.next;
        q.next = null;
    } else {
        var break_at = length - (k % length);
        p = head;
        while (--break_at > 0) {
            p = p.next;
        }
        dummy.next = p.next;
        p.next = null;

        p = dummy;
        while (p.next) {
            p = p.next;
        }
        p.next = head;
    }

    return dummy.next;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

//console.log(util.linkListToString(rotateRight(util.arrayToLinkList([]), 0)));
//console.log(util.linkListToString(rotateRight(util.arrayToLinkList([1]), 10)));
console.log(util.linkListToString(rotateRight(util.arrayToLinkList([1, 2]), 2)));
console.log(util.linkListToString(rotateRight(util.arrayToLinkList([1, 2]), 3)));
console.log(util.linkListToString(rotateRight(util.arrayToLinkList([1, 2, 3, 4, 5]), 1)));
console.log(util.linkListToString(rotateRight(util.arrayToLinkList([1, 2, 3, 4, 5]), 2)));
console.log(util.linkListToString(rotateRight(util.arrayToLinkList([1, 2, 3, 4, 5]), 4)));
console.log(util.linkListToString(rotateRight(util.arrayToLinkList([1, 2, 3, 4, 5]), 5)));
console.log(util.linkListToString(rotateRight(util.arrayToLinkList([1, 2, 3, 4, 5]), 6)));
console.log(util.linkListToString(rotateRight(util.arrayToLinkList([1, 2, 3, 4, 5]), 9)));
