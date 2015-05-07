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
