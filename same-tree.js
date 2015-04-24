/**
 * Source:  https://leetcode.com/problems/same-tree/
 * Tags:    [Tree,Depth-first Search]
 * Level:   Easy
 * Updated: 2015-04-24
 * Title:   Same Tree
 * Auther:  @imcoddy
 * Content: Given two binary trees, write a function to check if they are equal or not.
 *
 *
 * Two binary trees are considered equal if they are structurally identical and the nodes have the same value.
 */

/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @returns {boolean}
 */
var isSameTree = function(p, q) {
    if ((p && !q) || (!p && q)) {
        return false;
    }
    if (!p && !q) {
        return true;
    }

    if (p.val !== q.val) {
        return false;
    }else{
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
};
