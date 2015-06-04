/**
 * Source:  https://leetcode.com/problems/binary-tree-right-side-view/
 * Tags:    [Tree,Depth-first Search,Breadth-first Search]
 * Level:   Medium
 * Title:   Binary Tree Right Side View
 * Auther:  @imcoddy
 * Content: Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.
 *
 *
 * For example:
 * Given the following binary tree,
 *
 *    1
 *
 *
 * You should return [1, 3, 4].
 *
 *
 * Credits:Special thanks to @amrsaqr for adding this problem and creating all test cases.
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
 * Memo: Breadth-first Search
 * Runtime: 149ms
 * Rank: A
 */
var rightSideView = function(root) {
    if (!root) {
        return [];
    }

    var queue = [root];
    var result = [];
    var level_count = 1;

    while (queue.length) {
        var next_level_count = 0;
        var node;
        for (var i = 0; i < level_count; i++) {
            node = queue.shift();
            if (node.left) {
                next_level_count++;
                queue.push(node.left);
            }
            if (node.right) {
                next_level_count++;
                queue.push(node.right);
            }
        }
        level_count = next_level_count;
        result.push(node.val);
    }
    return result;
};

/**
 * Memo: Use BFS to do a level traversal. Save each level in a queue, and add last element of that level into result.
 * Complex: O(n)
 * Runtime: 156ms
 * Tests: 210 test cases passed
 * Rank: A
 */
var rightSideView = function(root) {
    if (!root) return [];
    var result = [];
    var queue = [root];
    var count = 1;
    do {
        var new_count = 0;
        for (var i = 0; i < count; i++) {
            var node = queue.shift();
            if (node.left) {
                queue.push(node.left);
                new_count++;
            }
            if (node.right) {
                queue.push(node.right);
                new_count++;
            }
        }
        count = new_count;
        result.push(node.val);
    } while (queue.length);

    return result;
};


/**
 * Memo: Recursive solution. Traverse right child first, and only add to result if it is the first child of that level.
 * Complex: O(n)
 * Runtime: 164ms
 * Tests: 210 test cases passed
 * Rank: A
 */
var rightSideView = function(root) {
    var deepest = 0;
    var result = [];

    function traverse(root, level) {
        if (!root) return;
        if (level >= deepest) {
            deepest++;
            result.push(root.val);
        }
        level++;
        traverse(root.right, level);
        traverse(root.left, level);
    }

    traverse(root, 0);
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
root.left = node;

node = new TreeNode(4);
root.left.left = node;
console.log(rightSideView(root));