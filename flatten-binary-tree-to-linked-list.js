/**
 * Source:  https://leetcode.com/problems/flatten-binary-tree-to-linked-list/
 * Tags:    [Tree,Depth-first Search]
 * Level:   Medium
 * Title:   Flatten Binary Tree to Linked List
 * Auther:  @imcoddy
 * Content: Given a binary tree, flatten it to a linked list in-place.
 *
 *
 *
 * For example,
 * Given
 *
 *          1
 *         / \
 *        2   5
 *       / \   \
 *      3   4   6
 *
 *
 *
 * The flattened tree should look like:
 *
 *    1
 *     \
 *      2
 *       \
 *        3
 *         \
 *          4
 *           \
 *            5
 *             \
 *              6
 *
 *
 * click to show hints.
 *
 * Hints:
 * If you notice carefully in the flattened tree, each node's right child points to the next node of a pre-order traversal.
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
 * @returns {void} Do not return anything, modify nodes in-place instead.
 */

/**
 * Memo: Depth-first Search and put node in a queue, then change all child nodes to root's right child
 * Runtime: 174ms
 * Rank: S
 */
var flatten = function(root) {
    function DFS(root, queue) {
        if (!root) {
            return [];
        }
        queue.push(root);
        DFS(root.left, queue);
        DFS(root.right, queue);
        return queue;
    }

    var queue = DFS(root, []);
    var p = queue.shift();
    while (queue.length > 0) {
        p.left = null;
        p.right = queue.shift();
        p = p.right;
    }
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var node = new TreeNode(1);
var root = node;

node = new TreeNode(2);
root.left = node;

node = new TreeNode(3);
root.right = node;

node = new TreeNode(4);
root.right.left = node;
node = new TreeNode(5);
root.right.right = node;

flatten(root);
console.log(root);
var p = root;
while (p) {
    console.log(p.val);
    p = p.right;
}