/**
 * Source:  https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/
 * Tags:    [Tree,Depth-first Search]
 * Level:   Hard
 * Title:   Populating Next Right Pointers in Each Node II
 * Auther:  @imcoddy
 * Content: Follow up for problem "Populating Next Right Pointers in Each Node".
 * What if the given tree could be any binary tree? Would your previous solution still work?
 *
 * Note:
 * You may only use constant extra space.
 *
 *
 * For example,
 * Given the following binary tree,
 *
 *          1
 *        /  \
 *       2    3
 *      / \    \
 *     4   5    7
 *
 *
 *
 * After calling your function, the tree should look like:
 *
 *          1 -> NULL
 *        /  \
 *       2 -> 3 -> NULL
 *      / \    \
 *     4-> 5 -> 7 -> NULL
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
 * Runtime: 218ms
 * Rank: A
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