/**
 * Source:  https://leetcode.com/problems/search-a-2d-matrix/
 * Tags:    [Array,Binary Search]
 * Level:   Medium
 * Title:   Search a 2D Matrix
 * Auther:  @imcoddy
 * Content: Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
 *
 *
 *
 * Integers in each row are sorted from left to right.
 * The first integer of each row is greater than the last integer of the previous row.
 *
 *
 *
 *
 * For example,
 *
 * Consider the following matrix:
 *
 *
 * [
 *   [1,   3,  5,  7],
 *   [10, 11, 16, 20],
 *   [23, 30, 34, 50]
 * ]
 *
 *
 * Given target = 3, return true.
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

/**
 * Memo: Use BS to search, just need to calculate the index into a 2d array. Note that for matrix[i,j], it is (i-1)*n+j th element
 * Runtime: 125ms
 * Tests: 134 test cases passed
 * Rank: S
 */
var searchMatrix = function(matrix, target) {
    var m = matrix.length;
    var n = matrix[0].length;

    var start = 0;
    var end = m * n - 1;
    var mid = 0;
    while (start <= end) {
        mid = ~~((start + end) / 2);
        var i = ~~((mid / n));
        var j = mid - i * n;
        console.log(mid, i, j, matrix[i][j]);
        if (matrix[i][j] === target) return true;
        matrix[i][j] < target ? start = mid + 1 : end = mid - 1;
    }
    return false;
};

console.log(searchMatrix(
    [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 50]
    ], 4
));