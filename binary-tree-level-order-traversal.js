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

/**
 * Memo:
 * Complex: O(n)
 * Runtime: 128ms
 * Tests: 34 test cases passed
 * Rank: A
 * Updated: 2015-10-05
 */
var levelOrder = function(root) {
    if (!root) return [];

    var nodes = [root];
    var result = [];
    var count = 1;
    while (nodes.length) {
        var new_count = 0;
        var array = [];
        for (var i = 0; i < count; i++) {
            var node = nodes.shift();
            array.push(node.val);
            if (node.left) {
                new_count++;
                nodes.push(node.left);
            }
            if (node.right) {
                new_count++;
                nodes.push(node.right);
            }
        }
        result.push(array);
        count = new_count;
    }
    return result;
};

/**
 * Memo: Use inorder to traverse the root recursively, record current depth and push current node.val to result of that level accordingly.
 * Complex: O(n)
 * Runtime: 146ms
 * Tests: 34 test cases passed
 * Rank: A
 */
var levelOrder = function(root) {
    var result = [];

    var traverse = function(root, depth) {
        if (!root) return;
        if (!result[depth]) result[depth] = [];
        result[depth].push(root.val);
        traverse(root.left, depth + 1);
        traverse(root.right, depth + 1);
    };

    traverse(root, 0);
    return result;
};

/**
 * Memo: Inorder traversal and push nodes value to that level accordingly.
 * Complex: O(n)
 * Runtime: 120ms
 * Tests: 34 test cases passed
 * Rank: S
 * Updated: 2015-10-05
 */
function levelOrder(root) {
    var result = [];

    function traverse(root, depth, result) {
        if (!root) return;
        if (!result[depth]) result[depth] = [];
        result[depth].push(root.val);
        traverse(root.left, depth + 1, result);
        traverse(root.right, depth + 1, result);
    }

    traverse(root, 0, result);
    return result;
}

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