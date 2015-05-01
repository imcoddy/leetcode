/**
 * Source:  https://leetcode.com/problems/path-sum-ii/
 * Tags:    [Tree,Depth-first Search]
 * Level:   Medium
 * Title:   Path Sum II
 * Auther:  @imcoddy
 * Content: Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.
 *
 *
 * For example:
 * Given the below binary tree and sum = 22,
 *
 *               5
 *              / \
 *             4   8
 *            /   / \
 *           11  13  4
 *          /  \    / \
 *         7    2  5   1
 *
 *
 *
 * return
 *
 * [
 *    [5,4,11,2],
 *    [5,8,4,5]
 * ]
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
 * @param {number} sum
 * @returns {number[][]}
 */

/**
 * Memo: check when sum of root-to-leaf path is what we want or not. using a level to record current path index.
 * Runtime: 161ms
 * Rank: S
 */
var pathSum = function(root, sum) {
    var result = [];
    var path = [];

    function hasPathSum(root, sum, level) {
        if (!root) return;

        path[level] = root.val;
        level++;

        if (!root.left && !root.right) { // check leaf
            if (sum === root.val) {
                var tmp = [];
                for (var i = 0; i < level; i++) {
                    tmp.push(path[i]);
                }
                result.push(tmp);
            }
        } else { // continue DFS
            hasPathSum(root.left, sum - root.val, level);
            hasPathSum(root.right, sum - root.val, level);
        }
    }

    hasPathSum(root, sum, 0);
    return result;
};


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var node = new TreeNode(1);
var root = node;

node = new TreeNode(6);
root.left = node;

node = new TreeNode(2);
root.right = node;

node = new TreeNode(4);
root.right.left = node;
node = new TreeNode(4);
root.right.right = node;

console.log(pathSum(root, 7));