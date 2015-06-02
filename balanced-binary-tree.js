/**
 * Source:  https://leetcode.com/problems/balanced-binary-tree/
 * Tags:    [Tree,Depth-first Search]
 * Level:   Easy
 * Title:   Balanced Binary Tree
 * Auther:  @imcoddy
 * Content: Given a binary tree, determine if it is height-balanced.
 *
 *
 *
 * For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
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
 * @returns {number[][]}
 */

/**
 * Memo: Kinda werid to see the result is true when root is null.
 * Runtime: 161ms
 * Rank: S
 */
var isBalanced = function(root) {
    if (!root) {
        return true;
    }

    if (isBalanced(root.left) && isBalanced(root.right)) {
        var dLeft = getDepth(root.left);
        var dRight = getDepth(root.right);
        return Math.abs(dLeft - dRight) <= 1;
    } else {
        return false;
    }
};

/**
 * Memo: Recusive solution
 * Complex: O(nlogn)
 * Runtime: 180ms
 * Tests: 226 test cases passed
 * Rank: B
 */
var isBalanced = function(root) {
    if (!root) return true;
    if (isBalanced(root.left) && isBalanced(root.right)) {
        return Math.abs(getDepth(root.left) - getDepth(root.right)) <= 1;
    } else {
        return false;
    }
};


var getDepth = function(root) {
    return root ? Math.max(getDepth(root.left), getDepth(root.right)) + 1 : 0;
};


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var node = new TreeNode(1);
var root = node;

node = new TreeNode(2);
root.right = node;

node = new TreeNode(3);
root.right.left = node;

console.log(isBalanced(root));