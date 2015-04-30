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