/**
 * Source:  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
 * Tags:    [Tree,Depth-first Search]
 * Level:   Medium
 * Title:   Convert Sorted Array to Binary Search Tree
 * Auther:  @imcoddy
 * Content: Given an array where elements are sorted in ascending order, convert it to a height balanced BST.
 */

/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {number[]} num
 * @returns {TreeNode}
 */
/**
 * Memo: use binary search in sorted array, find the mid element and use it as root if it exists, then process each left and right half.
 * Runtime: 162ms
 * Rank: S
 */
var sortedArrayToBST = function(num) {
    function convert(start, end) {
        var root = null;
        if (start <= end) {
            var mid = ~~((start + end) / 2);
            if (typeof num[mid] !== 'undefined') {
                root = new TreeNode(num[mid]);
                root.left = convert(start, mid - 1);
                root.right = convert(mid + 1, end);
            }
        }
        return root;
    }

    return convert(0, num.length);
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

console.log(sortedArrayToBST([0]));
console.log('-------------------------------------------');
console.log(sortedArrayToBST([1]));
console.log('-------------------------------------------');
console.log(sortedArrayToBST([1, 2]));
console.log('-------------------------------------------');
console.log(sortedArrayToBST([1, 2, 3]));
console.log('-------------------------------------------');
console.log(sortedArrayToBST([1, 2, 3, 4]));