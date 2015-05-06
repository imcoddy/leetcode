/**
 * Source:  https://leetcode.com/problems/set-matrix-zeroes/
 * Tags:    [Array]
 * Level:   Medium
 * Title:   Set Matrix Zeroes
 * Auther:  @imcoddy
 * Content: Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in place.
 *
 *
 * click to show follow up.
 *
 * Follow up:
 *
 *
 * Did you use extra space?
 * A straight forward solution using O(mn) space is probably a bad idea.
 * A simple improvement uses O(m + n) space, but still not the best solution.
 * Could you devise a constant space solution?
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

 //TODO solve this in a constant space solution

/**
 * Memo: track indexes where element is 0, then set the whole row and column to 0 in a loop.
 * Runtime: 238ms
 * Tests: 157 test cases passed
 * Rank: S
 */
var setZeroes = function(matrix) {
    var m = matrix.length;
    var n = matrix[0].length;
    var indexes = [];

    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                indexes.push([i, j]);
            }
        }
    }

    for (var i = 0; i < indexes.length; i++) {
        for (var j = 0; j < m; j++) {
            matrix[j][indexes[i][1]] = 0;
        }
        for (var j = 0; j < n; j++) {
            matrix[indexes[i][0]][j] = 0;
        }
    }
};

var matrix = [
    [0, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 0]
];

setZeroes(matrix);
console.log(matrix);
