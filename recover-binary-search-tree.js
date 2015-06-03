/**
 * Source:  https://leetcode.com/problems/recover-binary-search-tree/
 * Tags:    [Tree,Depth-first Search]
 * Level:   Hard
 * Title:   Recover Binary Search Tree
 * Auther:  @imcoddy
 * Content: Two elements of a binary search tree (BST) are swapped by mistake.
 *
 * Recover the tree without changing its structure.
 *
 *
 * Note:
 * A solution using O(n) space is pretty straight forward. Could you devise a constant space solution?
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
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

/**
 * Memo: use inorder traverse to put each nodes in a row, find out the wrongly swapped pair, and swap it back
 * Complex: O(n)
 * Runtime: 324ms
 * Tests: 1916 test cases passed
 * Rank: C
 */
var recoverTree = function(root) {
    var nodes = [];

    function traverse(root) {
        if (!root) return;
        traverse(root.left);
        nodes.push(root);
        traverse(root.right);
    }

    traverse(root);
    if (nodes.length < 2) return;

    var head = 0;
    var tail = nodes.length - 1;
    while (head < tail && nodes[head].val < nodes[head + 1].val) {
        head++;
    }
    while (tail > head && nodes[tail].val > nodes[tail - 1].val) {
        tail--;
    }
    var tmp = nodes[head].val;
    nodes[head].val = nodes[tail].val;
    nodes[tail].val = tmp;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var node = new TreeNode(4);
var root = node;

node = new TreeNode(3);
root.right = node;

node = new TreeNode(1);
root.left = node;

node = new TreeNode(2);
root.right.right = node;
recoverTree(root);
console.log(root);