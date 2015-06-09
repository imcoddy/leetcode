/**
 * Source:  https://leetcode.com/problems/invert-binary-tree/
 * Tags:    [Tree]
 * Level:   Easy
 * Title:   Invert Binary Tree
 * Auther:  @imcoddy
 * Content: Invert a binary tree.
 *      4
 *    /   \
 *   2     7
 *  / \   / \
 * 1   3 6   9
 *
 * to
 *      4
 *    /   \
 *   7     2
 *  / \   / \
 * 9   6 3   1
 *
 * Trivia:
 * This problem was inspired by this original tweet by Max Howell:
 * Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so fuck off.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

/**
 * Memo: Recursive solution by swap left and right children
 * Complex: O(n)
 * Runtime: 124ms
 * Tests: 68 test cases passed
 * Rank: S
 * Updated: 2015-06-15
 */
var invertTree = function(root) {
    if (root === null) return null;
    var left = invertTree(root.right);
    root.right = invertTree(root.left);
    root.left = left;
    return root;
};