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
 * Complex: O(logmn)
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
        if (matrix[i][j] === target) return true;
        matrix[i][j] < target ? start = mid + 1 : end = mid - 1;
    }
    return false;
};

// Shorter version of the above
var searchMatrix = function(matrix, target) {
    var m = matrix.length;
    var n = matrix[0].length;
    if (target < matrix[0][0] || target > matrix[m - 1][n - 1]) return false;
    var start = 0;
    var end = m * n - 1;
    while (start <= end) {
        var mid = ~~((start + end) / 2);
        matrix[~~((mid / n))][mid % n] < target ? start = mid + 1 : end = mid - 1;
    }
    return matrix[~~((start / n))][start % n] === target;
};

/**
 * Memo: First using binary search to find which row the result might be in, then use binary search to see if the target is in that row.
 * Complex: O(logm + logn)
 * Runtime: 130ms
 * Tests: 134 test cases passed
 * Rank: S
 * Updated: 2015-06-28
 */
var searchMatrix = function(matrix, target) {
    var m = matrix.length;
    var n = matrix[0].length;
    if (target < matrix[0][0] || target > matrix[m - 1][n - 1]) return false;

    var start = 0;
    var end = m - 1;
    while (start <= end) {
        var mid = ~~((start + end) / 2);
        if (matrix[mid][0] === target) return true;
        matrix[mid][0] > target ? end = mid - 1 : start = mid + 1;
    }

    var row = start - 1;
    start = 0;
    end = n - 1;

    while (start <= end) {
        var mid = ~~((start + end) / 2);
        if (matrix[row][mid] === target) return true;
        matrix[row][mid] > target ? end = mid - 1 : start = mid + 1;
    }
    return false;
};


var should = require('should');
console.time('Runtime');
searchMatrix(
    [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 50]
    ], 0
).should.be.exactly(false);


searchMatrix(
    [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 50]
    ], 2
).should.be.exactly(false);

searchMatrix(
    [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 50]
    ], 3
).should.be.exactly(true);

searchMatrix(
    [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 50]
    ], 4
).should.be.exactly(false);

searchMatrix(
    [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 50]
    ], 40
).should.be.exactly(false);

searchMatrix(
    [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 50]
    ], 50
).should.be.exactly(true);
console.timeEnd('Runtime');
