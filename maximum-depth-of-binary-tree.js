/**
 * Source:  https://leetcode.com/problems/maximum-depth-of-binary-tree/
 * Tags:    [Tree,Depth-first Search]
 * Level:   Easy
 * Updated: 2015-04-24
 * Title:   Maximum Depth of Binary Tree
 * Auther:  @imcoddy
 * Content: Given a binary tree, find its maximum depth.
 *
 * The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 */

/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @returns {number}
 */

/**
 * Memo:
 * Complex: O(logn)
 * Runtime: 140ms
 * Tests: 38 test cases passed
 * Rank: A
 */
var maxDepth = function(root) {
    return root ? Math.max(maxDepth(root.left), maxDepth(root.right)) + 1 : 0;
};

/**
 * Memo:
 * Complex: O(logn)
 * Runtime: 160ms
 * Tests: 38 test cases passed
 * Rank: B
 */
var maxDepth = function(root) {
    if (!root) {
        return 0;
    }
    var left = maxDepth(root.left);
    var right = maxDepth(root.right);
    return Math.max(left, right) + 1;
};