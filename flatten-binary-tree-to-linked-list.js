/**
 * Source:  https://leetcode.com/problems/flatten-binary-tree-to-linked-list/
 * Tags:    [Tree,Depth-first Search]
 * Level:   Medium
 * Title:   Flatten Binary Tree to Linked List
 * Auther:  @imcoddy
 * Content: Given a binary tree, flatten it to a linked list in-place.
 *
 *
 *
 * For example,
 * Given
 *
 *          1
 *         / \
 *        2   5
 *       / \   \
 *      3   4   6
 *
 *
 *
 * The flattened tree should look like:
 *
 *    1
 *     \
 *      2
 *       \
 *        3
 *         \
 *          4
 *           \
 *            5
 *             \
 *              6
 *
 *
 * click to show hints.
 *
 * Hints:
 * If you notice carefully in the flattened tree, each node's right child points to the next node of a pre-order traversal.
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
 * @returns {void} Do not return anything, modify nodes in-place instead.
 */

/**
 * Memo: Depth-first Search and put node in a queue, then change all child nodes to root's right child
 * Runtime: 174ms
 * Rank: S
 */
var flatten = function(root) {
    function DFS(root, queue) {
        if (!root) {
            return [];
        }
        queue.push(root);
        DFS(root.left, queue);
        DFS(root.right, queue);
        return queue;
    }

    var queue = DFS(root, []);
    var p = queue.shift();
    while (queue.length > 0) {
        p.left = null;
        p.right = queue.shift();
        p = p.right;
    }
};


/**
 * Memo: Use a queue to save traversal order, and then adjust left child to right of each node
 * Complex: O(n)
 * Runtime: 168ms
 * Tests: 225 test cases passed
 * Rank: B
 */
var flatten = function(root) {
    var queue = [];

    function traverse(root) {
        if (root) {
            queue.push(root);
            traverse(root.left);
            traverse(root.right);
        }
    }

    traverse(root);
    var p = queue.shift();
    while (queue.length > 0) {
        p.left = null;
        p.right = queue.shift();
        p = p.right;
    }
};


/**
 * Memo: Recusive solution, use flatternTree to return last node of its subtree, then adjust root to combine flatterned left and right, return last node for further operation.
 * Complex: O(n)
 * Runtime: 156ms
 * Tests: 225 test cases passed
 * Rank: B
 */
var flatten = function(root) {
    // flatten a tree and return its last node
    function flatternTree(root) {
        if (!root || (!root.left && !root.right)) {
            return root;
        }
        var leftTail = flatternTree(root.left);
        var rightTail = flatternTree(root.right);

        if (!leftTail) {
            return rightTail ? rightTail : root;
        }
        leftTail.right = root.right;
        root.right = root.left;
        root.left = null;
        return rightTail ? rightTail : leftTail;
    }

    flatternTree(root);
};


/**
 * Memo: Non recusive solution. Since this is a inorder traversal, root.right will end up to root.left's farest right child, so move root right there first, move left to right, then can search root.right using the same methodology
 * Complex: O(n)
 * Runtime: 148ms
 * Tests: 225 test cases passed
 * Rank: S
 */
var flatten = function(root) {
    while (root) {
        if (root.left) {
            var t = root.left;
            while (t.right) {
                t = t.right;
            }
            t.right = root.right;
            root.right = root.left;
            root.left = null;
        }
        root = root.right;
    }
};


/**
 * Memo: A bit better than the above solution, as if root.right is null, there's no need to move root.right instead of jumping to root.left directly, and if root.left is null, there's no need to set it to null again :)
 * Ref: https://leetcode.com/discuss/36732/8ms-non-recursive-no-stack-c-solution
 * Complex: O(n)
 * Runtime: 148ms
 * Tests: 225 test cases passed
 * Rank: S
 */
var flatten = function(root) {
    while (root) {
        if (root.left && root.right) {
            var t = root.left;
            while (t.right) {
                t = t.right;
            }
            t.right = root.right;
        }

        if (root.left) {
            root.right = root.left;
            root.left = null;
        }
        root = root.right;
    }
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

flatten(root);
console.log(root);
var p = root;
while (p) {
    console.log(p.val);
    p = p.right;
}