/**
 * Source:  https://leetcode.com/problems/binary-tree-postorder-traversal/
 * Tags:    [Tree,Stack]
 * Level:   Hard
 * Title:   Binary Tree Postorder Traversal
 * Auther:  @imcoddy
 * Content: Given a binary tree, return the postorder traversal of its nodes' values.
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
 * return [3,2,1].
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

//TODO Add iterative solution
var postorderTraversal = function(root) {

    function recursiveTraversal(root, result) {
        if (!root) {
            return [];
        }
        recursiveTraversal(root.left, result);
        recursiveTraversal(root.right, result);
        result.push(root.val);
        return result;
    }

    return recursiveTraversal(root, []);
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

console.log(postorderTraversal(root));
