/**
 * Source:  https://leetcode.com/problems/unique-binary-search-trees-ii/
 * Tags:    [Tree,Dynamic Programming]
 * Level:   Medium
 * Title:   Unique Binary Search Trees II
 * Auther:  @imcoddy
 * Content: Given n, generate all structurally unique BST's (binary search trees) that store values 1...n.
 *
 *
 * For example,
 * Given n = 3, your program should return all 5 unique BST's shown below.
 *
 *
 *    1         3     3      2      1
 *     \       /     /      / \      \
 *      3     2     1      1   3      2
 *     /     /       \                 \
 *    2     1         2                 3
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
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */

/**
 * Memo: Recursive solution
 * Complex: O(nlogn)
 * Runtime: 172ms
 * Tests: 9 test cases passed
 * Rank: S
 * Updated: 2015-06-06
 */
var generateTrees = function(n) {
    /**
     * Create all BST with value from start to end
     */
    function generate(start, end) {
        if (start > end) return [null];
        var result = [];
        for (var i = start; i <= end; i++) {
            var leftSubTrees = generate(start, i - 1);
            var rightSubTrees = generate(i + 1, end);

            for (var j = 0; j < leftSubTrees.length; j++)
                for (var k = 0; k < rightSubTrees.length; k++) {
                    var root = new TreeNode(i);
                    root.left = leftSubTrees[j];
                    root.right = rightSubTrees[k];
                    result.push(root);
                }
        }

        return result;
    }

    return generate(1, n);
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

console.log(generateTrees(4));