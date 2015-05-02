/**
 * Source:  https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
 * Tags:    [Tree,Breadth-first Search,Stack]
 * Level:   Medium
 * Title:   Binary Tree Zigzag Level Order Traversal
 * Auther:  @imcoddy
 * Content: Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).
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
 * return its zigzag level order traversal as:
 *
 * [
 *   [3],
 *   [20,9],
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
 * Runtime: 160ms
 * Tests: 33 test cases passed
 * Rank: A
 */
var zigzagLevelOrder = function(root) {
    if (!root) {
        return [];
    }

    var current_nodes = [root];
    var result = [
        [root.val]
    ];
    var current_count = 1;
    var current_level = 1;

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
            var reverse = current_level % 2 !== 0;
            var tmp = [];
            for (var i = 0; i < current_nodes.length; i++) {
                if (reverse) {
                    tmp.unshift(current_nodes[i].val);
                } else {
                    tmp.push(current_nodes[i].val);
                }
            }
            result.push(tmp);
            current_level++;
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

console.log(zigzagLevelOrder(root));

node = new TreeNode(2);
root.right = node;
node = new TreeNode(3);
root.left = node;
node = new TreeNode(4);
root.left.left = node;
node = new TreeNode(5);
root.left.right = node;

console.log(zigzagLevelOrder(root));