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
 * Memo: Recursive Solution
 * TODO add iter solution
 * Runtime: 141ms
 * Rank: A
 */
var preorderTraversal = function(root) {
    function traversal(root, array) {
        if (!root) {
            return;
        }

        array.push(root.val);
        traversal(root.left, array);
        traversal(root.right, array);
    }

    var array = [];
    traversal(root, array);
    return array;
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