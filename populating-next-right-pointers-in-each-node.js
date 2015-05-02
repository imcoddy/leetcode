/**
 * Source:  https://leetcode.com/problems/populating-next-right-pointers-in-each-node/
 * Tags:    [Tree,Depth-first Search]
 * Level:   Medium
 * Title:   Populating Next Right Pointers in Each Node
 * Auther:  @imcoddy
 * Content: Given a binary tree
 *
 *     struct TreeLinkNode {
 *       TreeLinkNode *left;
 *       TreeLinkNode *right;
 *       TreeLinkNode *next;
 *     }
 *
 *
 *
 * Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.
 *
 * Initially, all next pointers are set to NULL.
 *
 *
 * Note:
 *
 * You may only use constant extra space.
 * You may assume that it is a perfect binary tree (ie, all leaves are at the same level, and every parent has two children).
 *
 *
 *
 *
 * For example,
 * Given the following perfect binary tree,
 *
 *          1
 *        /  \
 *       2    3
 *      / \  / \
 *     4  5  6  7
 *
 *
 *
 * After calling your function, the tree should look like:
 *
 *          1 -> NULL
 *        /  \
 *       2 -> 3 -> NULL
 *      / \  / \
 *     4->5->6->7 -> NULL
 */

/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */

/**
 * Memo: Breadth-first Search. Put nodes of same level in a queue and link them next to each other. Node of the last in a level link to null.
 * Runtime: 161ms
 * Rank: S
 */
var connect = function(root) {
    if (root) {
        var queue = [root];
        var level_count = 1;

        while (queue.length) {
            var next_level_count = 0;
            var node;
            for (var i = 0; i < level_count; i++) {
                node = queue.shift();
                if (i < level_count - 1) {
                    node.next = queue[0];
                }
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
        }
    }
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = this.next = null;
}

var node = new TreeNode(0);
var root = node;

node = new TreeNode(1);
root.left = node;

node = new TreeNode(2);
root.right = node;

node = new TreeNode(3);
root.left.left = node;
node = new TreeNode(4);
root.left.right = node;
node = new TreeNode(5);
root.right.left = node;
node = new TreeNode(6);
root.right.right = node;

connect(root);
console.log(root);