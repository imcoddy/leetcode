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


/**
 * Memo: Traverse the list and put nodes in an array, then turn it into problem of sortedArrayToBST
 * Complex: O(nlogn)
 * Runtime: 192ms
 * Tests: 32 test cases passed
 * Rank: S
 */
var sortedListToBST = function(head) {
    var sortedArrayToBST = function(num) {
        function convert(start, end) {
            var root = null;
            if (start <= end) {
                var mid = ~~((start + end) / 2);
                if (typeof num[mid] !== 'undefined') {
                    root = new TreeNode(num[mid]);
                    root.left = convert(start, mid - 1);
                    root.right = convert(mid + 1, end);
                }
            }
            return root;
        }

        return convert(0, num.length);
    };


    if (!head) return null;

    var nodes = [];
    var p = head;
    while (p) {
        nodes.push(p.val);
        p = p.next;
    }

    return sortedArrayToBST(nodes);
};

/**
 * Memo: Use fast and slow pointers to find element mid, use it as root and break it into two lists (by using prev pointer), then solve it recusively.
 * Complex: O(nlogn)
 * Runtime: 164ms
 * Tests: 32 test cases passed
 * Rank: S
 */
var sortedListToBST = function(head) {
    if (!head) return null;
    if (!head.next) return new TreeNode(head.val); //Need to return new TreeNode here

    var fast = head;
    var slow = head;
    var prev = head;

    while (fast) {
        fast = fast.next;
        if (fast) {
            prev = slow;
            slow = slow.next;
            fast = fast.next;
        }
    }
    prev.next = null; // break original list into two lists
    var root = new TreeNode(slow.val);
    root.left = sortedListToBST(head);
    root.right = sortedListToBST(slow.next);
    return root;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
console.log(sortedListToBST(util.arrayToLinkList([0])));
console.log('------------------------------------');
console.log(sortedListToBST(util.arrayToLinkList([0, 1])));
console.log('------------------------------------');
console.log(sortedListToBST(util.arrayToLinkList([0, 1, 2])));
console.log('------------------------------------');
console.log(sortedListToBST(util.arrayToLinkList([0, 1, 2, 3])));
console.log('------------------------------------');
console.log(sortedListToBST(util.arrayToLinkList([0, 1, 2, 3, 4, 5, 6, 7, 8])));
console.log('------------------------------------');
console.log(sortedListToBST(util.arrayToLinkList([-84, -83, -63, -55, -45, -41, -39, -19, -16, -12, -11, 18, 22, 28, 30, 64, 77, 94])));