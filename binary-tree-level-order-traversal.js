/**
 * Source:  https://leetcode.com/problems/binary-tree-level-order-traversal/
 * Tags:    [Tree,Breadth-first Search]
 * Level:   Easy
 * Title:   Binary Tree Level Order Traversal
 * Auther:  @imcoddy
 * Content: Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).
 *
 *
 * For example:
 * Given binary tree {3,9,20,#,#,15,7},
 *
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 *
 *
 *
 * return its level order traversal as:
 *
 * [
 *   [3],
 *   [9,20],
 *   [15,7]
 * ]
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
 * Memo:
 * Runtime: 146ms
 * Rank: S
 */

var levelOrder = function(root) {
    if (!root) {
        return [];
    }

    var current_nodes = [root];
    var result = [
        [root.val]
    ];
    var current_count = 1;

    while (current_nodes.length > 0) {
        var next_count = 0;
        var next_nodes = [];
        var node;
        for (var i = 0; i < current_count; i++) {
            node = current_nodes.shift();
            if (node.left) {
                next_count++;
                next_nodes.push(node.left);
            }
            if (node.right) {
                next_count++;
                next_nodes.push(node.right);
            }
        }
        current_count = next_count;
        current_nodes = next_nodes;
        if (current_nodes.length) {
            var tmp = [];
            for (var i = 0; i < current_nodes.length; i++) {
                tmp.push(current_nodes[i].val);
            }
            result.push(tmp);
        }
    }
    return result;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var node = new TreeNode(1);
var root = node;

console.log(levelOrder(root));

node = new TreeNode(2);
root.right = node;

node = new TreeNode(3);
root.left = node;

node = new TreeNode(4);
root.left.left = node;
console.log(levelOrder(root));