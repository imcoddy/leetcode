/**
 * Source:  https://leetcode.com/problems/merge-k-sorted-lists/
 * Tags:    [Divide and Conquer,Linked List,Heap]
 * Level:   Hard
 * Title:   Merge k Sorted Lists
 * Auther:  @imcoddy
 * Content: Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

/**
 * Memo: use heads to track head of each link list, find min among heads and append that node to link list till every head is handled.
 * Runtime: 504ms
 * Tests: 130 test cases passed
 * Rank: D
 */
var mergeKLists = function(lists) {
    var dummy = new ListNode(null);
    var tail = dummy;
    var heads = [];

    for (var i = 0; i < lists.length; i++) {
        if (lists[i]) {
            heads.push(lists[i]);
        }
    }

    if (heads.length === 0) {
        return null;
    }

    while (heads.length > 1) {
        var index = 0;
        for (var i = 1; i < heads.length; i++) {
            if (heads[index].val > heads[i].val) {
                index = i;
            }
        }

        tail.next = heads[index];
        // remove this list when finished, otherwise move this list to next node
        heads[index].next ? heads[index] = heads[index].next : heads.splice(index, 1);

        tail = tail.next;
    }

    tail.next = heads[0];
    return dummy.next;
};

/**
 * Memo: Treat lists as a queue and pop two lists and merge them, then append the new list until there is only one list left.
 * Complex: O(kn^2)
 * Runtime: 212ms
 * Tests: 130 test cases passed
 * Rank: S
 * Updated: 2015-06-20
 */
var mergeKLists = function(lists) {
    var mergeTwoLists = function(h1, h2) {
        var dummy = new ListNode(null);
        var tail = dummy;
        while (h1 && h2) {
            if (h1.val <= h2.val) {
                tail = tail.next = h1;
                h1 = h1.next;
            } else {
                tail = tail.next = h2;
                h2 = h2.next;
            }
        }
        tail.next = h1 ? h1 : h2;
        return dummy.next;
    };

    if (!lists || lists.length === 0) return null;
    while (lists.length > 1) lists.push(mergeTwoLists(lists.shift(), lists.shift()));
    return lists[0];
};


/**
 * Memo: Improve the above by moving several nodes at one time while merging, which could reduce linking
 * Complex: O(k*n^2)
 * Runtime: 204ms
 * Tests: 130 test cases passed
 * Rank: S
 * Updated: 2015-06-20
 */
var mergeKLists = function(lists) {
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

    if (!lists || lists.length === 0) return null;
    while (lists.length > 1) lists.push(mergeTwoLists(lists.shift(), lists.shift()));
    return lists[0];
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

console.log((mergeKLists([])));
console.log(util.linkListToString(mergeKLists([
    util.arrayToLinkList([]),
    util.arrayToLinkList([])
])));
var l1 = util.arrayToLinkList([1, 3, 5, 7, 9]);
var l2 = util.arrayToLinkList([2, 4, 6, 8, 10]);
var l3 = util.arrayToLinkList([2, 4]);
console.log(util.linkListToString(mergeKLists([l1, l2, l3])));