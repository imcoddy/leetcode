/**
 * Source:  https://leetcode.com/problems/count-complete-tree-nodes/
 * Tags:    [Tree,Binary Search]
 * Level:   Medium
 * Title:   Count Complete Tree Nodes
 * Auther:  @imcoddy
 * Content: Given a complete binary tree, count the number of nodes.
 *
 * Definition of a complete binary tree from Wikipedia:
 * In a complete binary tree every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
/**
 * Memo: Since this is a complete tree, if root.right could already be a perfect tree already. in this case, calculate its nodes directly as nodes = 2^height - 1.
 * Complex: O(logn*logn)
 * Runtime: 380ms
 * Tests: 19 test cases passed
 * Rank: S
 */
var countNodes = function(root) {
    function count(root) {
        if (!root) return 0;
        var left = 1;
        var right = 1;
        var node = root.left;
        while (node) {
            node = node.left;
            left++;
        }

        var node = root.right;
        while (node) {
            node = node.right;
            right++;
        }

        return right === left ? Math.pow(2, right) - 1 : count(root.left) + count(root.right) + 1;
    }
    return count(root);
};

/**
 * Memo: A bit improve of the solution above.
 * Complex: O(logn*logn)
 * Runtime: 365ms
 * Tests: 19 test cases passed
 * Rank: S
 * Updated: 2015-06-09
 */
var countNodes = function(root) {
    function count(root) {
        if (!root) return 0;
        var heightL = 1;
        var heightR = 1;
        var nodeL = root.left;
        var nodeR = root.right;
        while (nodeR) {
            nodeL = nodeL.left;
            nodeR = nodeR.right;
            heightL++;
            heightR++;
        }

        return nodeL === null ? Math.pow(2, heightR) - 1 : count(root.left) + count(root.right) + 1;
    }
    return count(root);
};


var util = require("./util.js");
var should = require('should');
console.time('Runtime');
countNodes(util.arrayToTree([])).should.equal(0);
countNodes(util.arrayToTree([1])).should.equal(1);
countNodes(util.arrayToTree([1, 2])).should.equal(2);
countNodes(util.arrayToTree([1, 2, 3])).should.equal(3);
countNodes(util.arrayToTree([1, 2, 3, 4])).should.equal(4);
countNodes(util.arrayToTree([1, 2, 3, 4, 5])).should.equal(5);
countNodes(util.arrayToTree([1, 2, 3, 4, 5, 6, 7])).should.equal(7);
countNodes(util.arrayToTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).should.equal(10);

console.timeEnd('Runtime');