/**
 * Source:  https://leetcode.com/problems/path-sum/
 * Tags:    [Tree,Depth-first Search]
 * Level:   Easy
 * Updated: 2015-04-24
 * Title:   Path Sum
 * Auther:  @imcoddy
 * Content: Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.
 *
 *
 * For example:
 * Given the below binary tree and sum = 22,
 *
 *               5
 *              / \
 *             4   8
 *            /   / \
 *           11  13  4
 *          /  \      \
 *         7    2      1
 *
 *
 *
 * return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.
 */

/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * This one is a bit tricky, as it includes test case like ({}, 0)
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if (!root) return false;

    if (!root.left && !root.right) { // check leaf
        return sum === root.val;
    } else { // continue DFS
        return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
    }
};

/**
 * Memo:
 * Complex: O(n)
 * Runtime: 164ms
 * Tests: 114 test cases passed
 * Rank: A
 */
var hasPathSum = function(root, sum) {
    return root ? (!root.left && !root.right) ? sum === root.val : (hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)) : false;
};