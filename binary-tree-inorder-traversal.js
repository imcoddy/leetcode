/**
 * Source:  https://leetcode.com/problems/binary-tree-inorder-traversal/
 * Tags:    [Tree,Hash Table,Stack]
 * Level:   Medium
 * Title:   Binary Tree Inorder Traversal
 * Auther:  @imcoddy
 * Content: Given a binary tree, return the inorder traversal of its nodes' values.
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
 * return [1,3,2].
 *
 *
 * Note: Recursive solution is trivial, could you do it iteratively?
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
 * Memo:
 * Runtime: 137ms
 * Rank: S
 */
var inorderTraversal = function(root) {
    function traversal(root, result) {
        if (!root) {
            return;
        }

        traversal(root.left, result);
        result.push(root.val);
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
console.log(inorderTraversal(root));