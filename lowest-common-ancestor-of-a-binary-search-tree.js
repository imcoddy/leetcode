/**
 * Source:  https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
 * Tags:    [Tree]
 * Level:   Easy
 * Title:   Lowest Common Ancestor of a Binary Search Tree
 * Auther:  @imcoddy
 * Content: Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.
 *
 *
 *
 * According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).”
 *
 *
 *
 *         _______6______
 *        /              \
 *     ___2__          ___8__
 *    /      \        /      \
 *    0      _4       7       9
 *          /  \
 *          3   5
 *
 *
 *
 * For example, the lowest common ancestor (LCA) of nodes 2 and 8 is 6. Another example is LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *                   Show Similar Problems
 *
 *
 *                      (M) Lowest Common Ancestor of a Binary Tree
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
/**
 * Memo: Since it is a BST, if (root-p)*(root-q) > 0, means both p and q are on the same subtree.
 * Another way is to find root to node path and compare the path later
 * Complex: O(logn)
 * Runtime: 180ms
 * Tests: 27 test cases passed
 * Rank: S
 * Updated: 2015-10-29
 */
var lowestCommonAncestor = function(root, p, q) {
    while ((root.val - p.val) * (root.val - q.val) > 0) {
        console.log(root.val, p.val, q.val);
        root = root.val > p.val ? root.left : root.right;
    }
    return root;
};

var util = require("./util.js");
var tree = util.arrayToTree([4, 2, 6, 1, 3, 5, 7]);
console.log(tree);

console.log(lowestCommonAncestor(tree, tree.left.left, tree.right.right));
//console.log(lowestCommonAncestor(tree,tree.right.right, tree.right.right));