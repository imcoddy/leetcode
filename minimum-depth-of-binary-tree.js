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
 * Memo: Once reach a leaf, add current level to an array, then find minimum in the array
 * Runtime: 152ms
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

/**
 * Memo: Return 0 if root is null, otherwise use min to record the shortest root-to-leaf level
 * Complex: O()
 * Runtime: 144ms
 * Tests: 41 test cases passed
 * Rank: A
 */
var minDepth = function(root) {
    if (!root) {
        return 0;
    }

    var min = Number.MAX_VALUE;
    var dfs = function(root, level) {
        if (!root) {
            return;
        }
        if (root.left === null && root.right === null) {
            if (level < min) {
                min = level;
            }
            return;
        }
        dfs(root.left, level + 1);
        dfs(root.right, level + 1);
    };

    dfs(root, 1);
    return min;
};


/**
 * Memo: The naming might be a bit ugly, but this minDepth function could just be used to find depth of a tree.
 * If left or right is null, it means the result will be the non-empty depth plus 1, while the other is zero.
 * If both left and right exists, find the minimum of the two then plus 1
 * Complex: O(n)
 * Runtime: 144ms
 * Tests: 41 test cases passed
 * Rank: S
 */
var minDepth = function(root) {
    if (!root) return 0;
    if (root.left === null || root.right === null)
        return Math.max(minDepth(root.left), minDepth(root.right)) + 1;

    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
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