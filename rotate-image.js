/**
 * Source:  https://leetcode.com/problems/rotate-image/
 * Tags:    [Array]
 * Level:   Medium
 * Title:   Rotate Image
 * Auther:  @imcoddy
 * Content: You are given an n x n 2D matrix representing an image.
 * Rotate the image by 90 degrees (clockwise).
 * Follow up:
 * Could you do this in-place?
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

/**
 * Memo: for element matrix[i,j], the relation is below when rotated. A bit tricky it differs on whether n is even or odd.
 * 0: [i,j]
 * 90: [j,n-1-i]
 * 180: [n-1-i, n-1-j]
 * 270: [n-1-j,i]
 * Runtime: 128ms
 * Tests: 20 test cases passed
 * Rank: S
 */
var rotate = function(matrix) {
    var n = matrix.length;

    for (var i = 0; i < ~~((n + 1) / 2); i++) {
        for (var j = 0; j < ~~((n ) / 2); j++) {
            var t = matrix[i][j];
            matrix[i][j] = matrix[n - 1 - j][i];
            matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j];
            matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i];
            matrix[j][n - 1 - i] = t;
        }
    }
};

function createMatrix(n) {
    var matrix = [];
    var count = 1;
    for (var i = 0; i < n; i++) {
        var a = [];
        for (var j = 0; j < n; j++) {
            a.push(count++);
        }
        matrix.push(a);
    }
    return matrix;
}
var matrix = createMatrix(2);
console.log(matrix);
rotate(matrix);
console.log(matrix);


matrix = createMatrix(3);
console.log(matrix);
rotate(matrix);
console.log(matrix);

matrix = createMatrix(4);
console.log(matrix);
rotate(matrix);
console.log(matrix);

matrix = createMatrix(5);
console.log(matrix);
rotate(matrix);
console.log(matrix);
