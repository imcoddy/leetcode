/**
 * Source:  https://leetcode.com/problems/sum-root-to-leaf-numbers/
 * Tags:    [Tree,Depth-first Search]
 * Level:   Medium
 * Title:   Sum Root to Leaf Numbers
 * Auther:  @imcoddy
 * Content: Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number.
 * An example is the root-to-leaf path 1->2->3 which represents the number 123.
 *
 * Find the total sum of all root-to-leaf numbers.
 *
 * For example,
 *
 *     1
 *    / \
 *   2   3
 *
 *
 *
 * The root-to-leaf path 1->2 represents the number 12.
 * The root-to-leaf path 1->3 represents the number 13.
 *
 *
 * Return the sum = 12 + 13 = 25.
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
 * Runtime: 136ms
 * Rank: S
 */
var sumNumbers = function(root) {
    function DFS(root, sumOfPath) {
        if (!root) return 0; //return 0 when node doesn't exists
        sumOfPath = 10 * sumOfPath + root.val; // sum of current path (till this node)
        if (!root.left && !root.right) return sumOfPath; //return on leaf node
        return DFS(root.left, sumOfPath) + DFS(root.right, sumOfPath); //keep on calculating
    }
    return DFS(root, 0);
};

/**
 * Memo: Recusive solution from top to bottom
 * Complex: O(n)
 * Runtime: 120ms
 * Tests: 109 test cases passed
 * Rank: S
 */
var sumNumbers = function(root) {
    function traverse(root, sumOfPath) {
        if (!root) return 0;
        sumOfPath = 10 * sumOfPath + root.val;
        return (!root.left && !root.right) ? sumOfPath : traverse(root.left, sumOfPath) + traverse(root.right, sumOfPath);
    }
    return traverse(root, 0);
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
root.left = node;

console.log(sumNumbers(root));

node = new TreeNode(4);
root.left.left = node;

console.log(sumNumbers(root));