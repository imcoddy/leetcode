/**
 * Source:  https://leetcode.com/problems/symmetric-tree/
 * Tags:    [Tree,Depth-first Search]
 * Level:   Easy
 * Title:   Symmetric Tree
 * Auther:  @imcoddy
 * Content: Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
 *
 *
 * For example, this binary tree is symmetric:
 *
 *     1
 *    / \
 *   2   2
 *  / \ / \
 * 3  4 4  3
 *
 *
 *
 * But the following is not:
 *
 *     1
 *    / \
 *   2   2
 *    \   \
 *    3    3
 *
 *
 *
 *
 * Note:
 * Bonus points if you could solve it both recursively and iteratively.
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
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @returns {boolean}
 */
var isSymmetric = function(root) {
    var travelLeft = function(root, order) {
        if (root) {
            order.push(root.val);
            if (root.left) {
                travelLeft(root.left, order);
            } else {
                order.push('#');
            }

            if (root.right) {
                travelLeft(root.right, order);
            } else {
                order.push('#');
            }
        }
        return order;
    };

    var travelRight = function(root, order) {
        if (root) {
            order.push(root.val);
            if (root.right) {
                travelRight(root.right, order);
            } else {
                order.push('#');
            }

            if (root.left) {
                travelRight(root.left, order);
            } else {
                order.push('#');
            }

        }
        return order;
    };

    var leftOrders = travelLeft(root, []);
    var rightOrders = travelRight(root, []);
    //var result = JSON.stringify(leftOrders) === JSON.stringify(rightOrders);

    var i = 0;
    var result = leftOrders[i] === rightOrders[i];
    while (i<leftOrders.length && true) {
        result = leftOrders[i] === rightOrders[i];
        if (!result) {
            break;
        }
        i++;
    }

    console.log(leftOrders);
    console.log(rightOrders);
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

node = new TreeNode(2);
root.right.left = node;
console.log(isSymmetric(root));
