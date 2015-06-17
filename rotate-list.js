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
 * Complex: O(n)
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
 * Complex: O(n)
 * Runtime: 168ms
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

/**
 * Memo: Keep track of head and tail, then find the node to separate and relink the list as needed.
 * Complex: O(n)
 * Runtime: 192ms
 * Tests: 230 test cases passed
 * Rank: S
 * Updated: 2015-06-18
 */
var rotateRight = function(head, k) {
    if (!head || !head.next) return head;

    var dummy = new ListNode(null);
    dummy.next = head;
    var p = head;
    var count = 0;
    var tail;
    while (p) {
        tail = p;
        p = p.next;
        count++;
    }

    k = count - (k % count);
    if (k > 0) {
        p = dummy.next;
        while (--k) p = p.next;

        tail.next = dummy.next;
        dummy.next = p.next;
        p.next = null;
    }
    return dummy.next;

};

/**
 * Memo: Using two pointers to keep fast and slow has k elements in the middle, then relink the list as needed. Note that k might be a lot larger than the length of the list, so need to check that before relinking.
 * Ref: // Source:  https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 * Complex: O(n)
 * Runtime: 157ms
 * Tests: 230 test cases passed
 * Rank: S
 * Updated: 2015-06-18
 */
var rotateRight = function(head, k) {
    if (!head || !head.next) return head;

    var dummy = new ListNode(null);
    dummy.next = head;
    var fast = head;
    var slow = head;
    var tail;
    var count = 0;
    var move = k;
    while (fast) {
        count++;
        tail = fast;
        fast = fast.next;
        if (move-- < 0) slow = slow.next;
    }

    if (move === 0) return dummy.next;

    if (move > 0) {
        move = count - (k % count);
        while (--move) slow = slow.next;
    }
    tail.next = dummy.next;
    dummy.next = slow.next;
    slow.next = null;
    return dummy.next;
};


/**
 * Memo: Make the list into a circle if we need to rotate, then rotate to the needed location and break the circle.
 * Complex: O(n)
 * Runtime: 168ms
 * Tests: 230 test cases passed
 * Rank: S
 * Updated: 2015-06-18
 */
var rotateRight = function(head, k) {
    if (!head || !head.next) return head;

    var length = 1;
    var tail = head;
    while (tail.next) {
        length++;
        tail = tail.next;
    }

    var newHead = head;
    if (k %= length) {
        tail.next = head; // make a full circle
        for (var i = 0; i < length - k; i++) tail = tail.next; // move to the node before breaking point
        newHead = tail.next;
        tail.next = null; // break the circle
    }
    return newHead;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var should = require('should');
console.time('Runtime');
util.lta(rotateRight(util.atl([1]), 10)).should.eql([1]);
util.lta(rotateRight(util.atl([1, 2]), 2)).should.eql([1, 2]);
util.lta(rotateRight(util.atl([1, 2]), 3)).should.eql([2, 1]);
util.lta(rotateRight(util.atl([1, 2, 3, 4, 5]), 1)).should.eql([5, 1, 2, 3, 4]);
util.lta(rotateRight(util.atl([1, 2, 3, 4, 5]), 2)).should.eql([4, 5, 1, 2, 3]);
util.lta(rotateRight(util.atl([1, 2, 3, 4, 5]), 3)).should.eql([3, 4, 5, 1, 2]);
util.lta(rotateRight(util.atl([1, 2, 3, 4, 5]), 4)).should.eql([2, 3, 4, 5, 1]);
util.lta(rotateRight(util.atl([1, 2, 3, 4, 5]), 5)).should.eql([1, 2, 3, 4, 5]);
util.lta(rotateRight(util.atl([1, 2, 3, 4, 5]), 9)).should.eql([2, 3, 4, 5, 1]);
util.lta(rotateRight(util.atl([1, 2, 3, 4, 5]), 11)).should.eql([5, 1, 2, 3, 4]);
util.lta(rotateRight(util.atl([1, 2, 3, 4, 5]), 19)).should.eql([2, 3, 4, 5, 1]);

console.timeEnd('Runtime');
console.log(util.linkListToString(rotateRight(util.arrayToLinkList([]), 0)));