/**
 * Source:  https://leetcode.com/problems/minimum-depth-of-binary-tree/
 * Tags:    [Tree,Depth-first Search]
 * Level:   Easy
 * Title:   Minimum Depth of Binary Tree
 * Auther:  @imcoddy
 * Content: Given a binary tree, find its minimum depth.
 *
 * The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
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
 * Memo: Depth-first Search
 * Runtime: 168ms
 * Rank: B
 */
var minDepth = function(root) {
    function DFS(root, level, queue) {
        if (!root) {
            return [];
        }
        if (!root.left && !root.right) {
            queue.push(level);
        }
        DFS(root.left, level + 1, queue);
        DFS(root.right, level + 1, queue);
        return queue;
    }

    var levels = DFS(root, 1, []);
    if (levels.length <= 0) {
        return 0;
    }
    var min = Number.MAX_VALUE;
    for (var i = 0; i < levels.length; i++) {
        if (levels[i] < min) {
            min = levels[i];
        }
    }
    return min;
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

console.log(minDepth(root));