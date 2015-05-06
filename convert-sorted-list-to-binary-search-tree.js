/**
 * Source:  https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/
 * Tags:    [Depth-first Search,Linked List]
 * Level:   Medium
 * Title:   Convert Sorted List to Binary Search Tree
 * Auther:  @imcoddy
 * Content: Given a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
var util = require('./util.js');
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
/**
 * Memo: put all nodes in an array then use BS to connect each nodes from root to leaf.
 * Runtime: 200ms
 * Tests: 32 test cases passed
 * Rank: B
 */
//TODO use DFS to solve this problem
var sortedListToBST = function(head) {
    if (!head) return null;

    var nodes = [];
    var p = head;
    while (p) {
        var node = new TreeNode(p.val);
        nodes.push(node);
        p = p.next;
    }

    function connectNodes(start, end) {
        if (start >= end) {
            return;
        }

        var mid = ~~((start + end) / 2);
        var left = ~~((start + mid) / 2);
        var right = ~~((mid + 1 + end) / 2);
        if (mid > left) {
            nodes[mid].left = nodes[left];
        }
        if (mid < right && !nodes[right].left) {
            nodes[mid].right = nodes[right];
        }
        connectNodes(start, mid);
        connectNodes(mid + 1, end);
    }

    connectNodes(0, nodes.length - 1);
    return nodes[~~((nodes.length - 1) / 2)];
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
console.log(sortedListToBST(util.arrayToLinkList([1, 2, 3, 4, 5, 6, 7, 8, 9])));
console.log(sortedListToBST(util.arrayToLinkList([-84, -83, -63, -55, -45, -41, -39, -19, -16, -12, -11, 18, 22, 28, 30, 64, 77, 94])));
