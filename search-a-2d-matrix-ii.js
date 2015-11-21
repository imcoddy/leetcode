/**
 * Source:  https://leetcode.com/problems/search-a-2d-matrix-ii/
 * Tags:    [Divide and Conquer,Binary Search]
 * Level:   Medium
 * Title:   Search a 2D Matrix II
 * Auther:  @imcoddy
 * Content: Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
 *
 *
 *
 * Integers in each row are sorted in ascending from left to right.
 * Integers in each column are sorted in ascending from top to bottom.
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
 *   [1,   4,  7, 11, 15],
 *   [2,   5,  8, 12, 19],
 *   [3,   6,  9, 16, 22],
 *   [10, 13, 14, 17, 24],
 *   [18, 21, 23, 26, 30]
 * ]
 *
 *
 * Given target = 5, return true.
 * Given target = 20, return false.
 *
 *
 *                   Subscribe to see which companies asked this question
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *                   Show Similar Problems
 *
 *
 *                      (M) Search a 2D Matrix
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

/**
 * Memo: Find possible rows and apply binary search on each row
 * Complex: O(m+mlogn)
 * Runtime: 344ms
 * Tests: 127 test cases passed
 * Rank: B
 * Updated: 2015-11-19
 */
var searchMatrix = function(matrix, target) {
    function binarySearch(nums, target) {
        var start = 0;
        var end = nums.length - 1;

        while (start <= end) {
            var mid = ~~((start + end) / 2);
            if (nums[mid] === target) return true;
            nums[mid] > target ? end = mid - 1 : start = mid + 1;
        }
        return false;
    }
    var arrays = [];
    var m = matrix.length;
    var n = matrix[0].length;
    if (target < matrix[0][0] || target > matrix[m - 1][n - 1]) return false;

    for (var i = 0; i < m; i++) {
        if (matrix[i][0] === target || matrix[i][n - 1] === target) return true;
        if (matrix[i][0] < target && target < matrix[i][n - 1]) arrays.push(matrix[i]);
    }
    for (var i = 0; i < arrays.length; i++) {
        if (binarySearch(arrays[i], target)) return true;
    }
    return false;
};

/**
 * Memo: Search from top right cornor and ignore invalid row or column;
 * Complex: O(m+n)
 * Runtime: 216ms
 * Tests: 127 test cases passed
 * Rank: S
 * Updated: 2015-11-19
 */
var searchMatrix = function(matrix, target) {
    if (!matrix || matrix.length < 1 || matrix[0].length < 1) return false;

    var row = 0;
    var col = matrix[0].length - 1;
    while (row < matrix.length && col >= 0) {
        if (matrix[row][col] === target) return true;
        matrix[row][col] < target ? row++ : col--;
    }
    return false;
};

console.log(
    searchMatrix(
        [
            [1, 4, 7, 11, 15],
            [2, 5, 8, 12, 19],
            [3, 6, 9, 16, 22],
            [10, 13, 14, 17, 24],
        ], 11
    ));