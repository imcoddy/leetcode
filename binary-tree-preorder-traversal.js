/**
 * Source:  https://leetcode.com/problems/binary-tree-preorder-traversal/
 * Tags:    [Tree,Stack]
 * Level:   Medium
 * Title:   Binary Tree Preorder Traversal
 * Auther:  @imcoddy
 * Content: Given a binary tree, return the preorder traversal of its nodes' values.
 *
 *
 * For example:
 * Given binary tree {1,#,2,3},
 *
 *    1
 *     \
 *      2
 *     /
 *    3
 *
 *
 *
 * return [1,2,3].
 *
 *
 * Note: Recursive solution is trivial, could you do it iteratively?
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
 * @returns {number[]}
 */


/**
 * Memo: Iterative Solution
 * Runtime: 139ms
 * Rank: A
 */
var preorderTraversal2 = function(root) {
    if (!root) {
        return [];
    }

    var stack = [];
    var result = [];

    stack.push(root);
    while (stack.length) {
        var node = stack.pop();
        result.push(node.val);
        if (node.right) {
            stack.push(node.right);
        }
        if (node.left) {
            stack.push(node.left);
        }
    }
    return result;
};

/**
 * Memo: Recursive Solution
 * Runtime: 141ms
 * Rank: A
 */
var preorderTraversal = function(root) {
    function traversal(root, result) {
        if (!root) {
            return;
        }

        result.push(root.val);
        traversal(root.left, result);
        traversal(root.right, result);
    }

    var result = [];
    traversal(root, result);
    return result;
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
console.log(preorderTraversal(root));