/**
 * Source:  https://leetcode.com/problems/binary-tree-level-order-traversal-ii/
 * Tags:    [Tree,Breadth-first Search]
 * Level:   Easy
 * Title:   Binary Tree Level Order Traversal II
 * Auther:  @imcoddy
 * Content: Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).
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
 * return its bottom-up level order traversal as:
 *
 * [
 *   [15,7],
 *   [9,20],
 *   [3]
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
 * Runtime: 134ms
 * Rank: S
 */
var levelOrderBottom = function(root) {
    if (!root) {
        return [];
    }

    var current_nodes = [root];
    var result = [
        [root.val]
    ];
    var current_count = 1;

    while (current_nodes.length > 0) {
        var next_nodes = [];
        var node;
        for (var i = 0; i < current_count; i++) {
            node = current_nodes.shift();
            if (node.left) next_nodes.push(node.left);
            if (node.right) next_nodes.push(node.right);
        }
        current_nodes = next_nodes;
        current_count = next_nodes.length;
        if (current_count) {
            var tmp = [];
            for (var i = 0; i < current_count; i++) {
                tmp.push(current_nodes[i].val);
            }
            result.unshift(tmp);
        }
    }

    return result;
};

/**
 * Memo: Level traversal
 * Complex: O(n)
 * Runtime: 140ms
 * Tests: 34 test cases passed
 * Rank: A
 */
var levelOrderBottom = function(root) {
    if (!root) return [];

    var nodes = [root]; // queue of nodes to traverse
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
        result.unshift(array);
        count = new_count;
    }
    return result;
};

/**
 * Memo: Inorder traversal and push nodes value to that level accordingly.
 * Complex: O(n)
 * Runtime: 140ms
 * Tests: 34 test cases passed
 * Rank: S
 * Updated: 2015-10-05
 */
function levelOrderBottom(root) {
    var result = [];

    function traverse(root, depth, result) {
        if (!root) return;
        if (!result[depth]) result[depth] = [];
        result[depth].push(root.val);
        traverse(root.left, depth + 1, result);
        traverse(root.right, depth + 1, result);
    }

    traverse(root, 0, result);
    return result.reverse();
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var util = require("./util.js");
var should = require('should');
console.time('Runtime');
levelOrderBottom(util.arrayToTree([1])).should.eql([
    [1]
]);


levelOrderBottom(util.arrayToTree([1, 2, 3, 4])).should.eql([
    [4],
    [2, 3],
    [1]
]);

levelOrderBottom(util.arrayToTree([3, 9, 20, '#', '#', 15, 7])).should.eql([
    [15, 7],
    [9, 20],
    [3]
])

console.timeEnd('Runtime');