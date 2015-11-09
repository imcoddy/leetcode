/**
 * Source:  https://leetcode.com/problems/binary-search-tree-iterator/
 * Tags:    [Tree,Stack,Design]
 * Level:   Medium
 * Title:   Binary Search Tree Iterator
 * Auther:  @imcoddy
 * Content: Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.
 *
 * Calling next() will return the next smallest number in the BST.
 *
 * Note: next() and hasNext() should run in average O(1) time and uses O(h) memory, where h is the height of the tree.
 *
 * Credits:Special thanks to @ts for adding this problem and creating all test cases.
 *
 *
 *                   Subscribe to see which companies asked this question
 *
 *
 *
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
 *                      (M) Binary Tree Inorder Traversal
 *
 *                      (M) Flatten 2D Vector
 *
 *                      (M) Zigzag Iterator
 *
 *                      (M) Peeking Iterator
 *
 *                      (M) Inorder Successor in BST
 */

/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @constructor
 * @param {TreeNode} root - root of the binary search tree
 */
var BSTIterator = function(root) {

};


/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function() {

};

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function() {

};

/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
*/
