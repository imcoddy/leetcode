/**
 * Source:  https://leetcode.com/problems/swap-nodes-in-pairs/
 * Tags:    [Linked List]
 * Level:   Medium
 * Title:   Swap Nodes in Pairs
 * Auther:  @imcoddy
 * Content: Given a linked list, swap every two adjacent nodes and return its head.
 *
 *
 *
 * For example,
 * Given 1->2->3->4, you should return the list as 2->1->4->3.
 *
 *
 *
 * Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed.
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

/**
 * Memo: Need to track one tail node before swap the following!
 * Runtime: 135ms
 * Tests: 55 test cases passed
 * Rank: A
 */
var swapPairs = function(head) {
    var p = head;
    if (!p) {
        return p;
    }

    var q = p.next;
    if (!q) {
        return p;
    }

    head = q;
    var tail = p;
    while (p) {
        q = p.next;
        if (q) {
            tail.next = q;
            var n = q.next;
            p.next = n;
            q.next = p;
        }
        tail = p;
        p = p.next;
    }
    return head;
};

function printList(head) {
    var node = head;
    var result = [];
    while (node) {
        result.push(node.val);
        node = node.next;
    }
    return result;
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var head = new ListNode(1);
var node = new ListNode(2);
head.next = node;
node.next = new ListNode(3);
node = node.next;
node.next = new ListNode(4);
node = node.next;

console.log(printList(swapPairs(head)));