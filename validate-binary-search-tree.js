/**
 * Source:  https://leetcode.com/problems/validate-binary-search-tree/
 * Tags:    [Tree,Depth-first Search]
 * Level:   Medium
 * Title:   Validate Binary Search Tree
 * Auther:  @imcoddy
 * Content: Given a binary tree, determine if it is a valid binary search tree (BST).
 *
 *
 *
 * Assume a BST is defined as follows:
 *
 * The left subtree of a node contains only nodes with keys less than the node's key.
 * The right subtree of a node contains only nodes with keys greater than the node's key.
 * Both the left and right subtrees must also be binary search trees.
 *
 *
 *
 * confused what "{1,#,2,3}" means? > read more on how binary tree is serialized on OJ.
 *
 * OJ's Binary Tree Serialization:
 *
 * The serialization of a binary tree follows a level order traversal, where '#' signifies a path terminator where no node exists below.
 *
 *
 * Here's an example:
 *
 *    1
 *   / \
 *  2   3
 *     /
 *    4
 *     \
 *      5
 *
 * The above binary tree is serialized as "{1,2,3,#,#,4,#,#,5}".
 */
var util = require('./util.js');
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */

/**
 * Memo: need to pass the current min and max as parameters so both left and right trees can fit in range.
 * Runtime: 151ms
 * Tests: 74 test cases passed
 * Rank: S
 */
var isValidBST = function(root) {
    function checkBST(root, min, max) {
        if (!root) return true;
        if (max <= root.val || root.val <= min) return false;
        return checkBST(root.left, min, root.val) && checkBST(root.right, root.val, max);
    }

    return checkBST(root, 0 - Number.MAX_VALUE, Number.MAX_VALUE);
};

var isValidBST = function(root) {
    function checkBST(root, min, max) {
        if (!root) return true;
        if (root.val >= max || root.val <= min) return false; //according to definition, no equal is allowed.
        return checkBST(root.left, min, root.val) && checkBST(root.right, root.val, max);
    }
    return checkBST(root, -Number.MAX_VALUE, Number.MAX_VALUE);
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

console.log(isValidBST(new TreeNode(0)));

var node = new TreeNode(2);
var root = node;
console.log(isValidBST(root));

node = new TreeNode(2);
root.left = node;
console.log(isValidBST(root));

node = new TreeNode(1);
root.left = node;
console.log(isValidBST(root));

node = new TreeNode(3);
root.right = node;
console.log(isValidBST(root));

node = new TreeNode(6);
root.left.right = node;
console.log(isValidBST(root));