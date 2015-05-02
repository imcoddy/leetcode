/**
 * Source:  https://leetcode.com/problems/unique-binary-search-trees/
 * Tags:    [Tree,Dynamic Programming]
 * Level:   Medium
 * Title:   Unique Binary Search Trees
 * Auther:  @imcoddy
 * Content: Given n, how many structurally unique BST's (binary search trees) that store values 1...n?
 *
 *
 * For example,
 * Given n = 3, there are a total of 5 unique BST's.
 *
 *
 *    1         3     3      2      1
 *     \       /     /      / \      \
 *      3     2     1      1   3      2
 *     /     /       \                 \
 *    2     1         2                 3
 */

/**
 * @param {number} n
 * @return {number}
 */

/**
 * Memo: define s[i] for result of i, when i >= 3, each element in s can be made out from previous stages.
 * 1, for each BST in i-1, the ith element can be added as root or furtherest right node, which generate 2*s[i-1] trees.
 * 2, the ith element is added in the middle, separating the previous trees into two parts, which turns into a smaller problem that already solved.
 * Runtime: 121ms
 * Rank: S
 */
var numTrees = function(n) {
    var s = [];
    s[0] = 0;
    s[1] = 1;
    s[2] = 2;
    for (var i = 3; i <= n; i++) {
        s[i] = s[i - 1] * 2;
        for (var j = 1; j < i - 1; j++) {
            s[i] += s[i - 1 - j] * s[j];
        }
    }
    return s[n];
};

console.log(numTrees(3)); //5
console.log(numTrees(4)); //14