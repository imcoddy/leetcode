/**
 * Source:  https://leetcode.com/problems/minimum-path-sum/
 * Tags:    [Array,Dynamic Programming]
 * Level:   Medium
 * Title:   Minimum Path Sum
 * Auther:  @imcoddy
 * Content: Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.
 *
 * Note: You can only move either down or right at any point in time.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */

/**
 * Explanation:
 * S[i][j] = min(S[i][j-1], S[i-1][j]) + grid[i][j]
 * Runtime: 150ms
 * Rank: S
 */
var minPathSum = function(grid) {
    /*
     *if (grid.length === 0 || grid[0].length === 0) {
     *    return 0;
     *}
     */

    var m = grid.length;
    var n = grid[0].length;
    var states = [];
    var arr = [];
    for (var i = 0; i < m; i++) {
        arr = [];
        for (var j = 0; j < n; j++) {
            arr.push(Number.MAX_VALUE);
        }
        states.push(arr);
    }

    // initial states
    states[0][0] = grid[0][0];
    for (var i = 1; i < m; i++) {
        states[i][0] = states[i - 1][0] + grid[i][0];
    }
    for (var j = 1; j < n; j++) {
        states[0][j] = states[0][j - 1] + grid[0][j];
    }

    // calculate from states[1][1]
    for (var i = 1; i < m; i++) {
        for (var j = 1; j < n; j++) {
            states[i][j] = Math.min(states[i][j - 1], states[i - 1][j]) + grid[i][j];
        }
    }
    console.log(states);
    return states[m - 1][n - 1];
};


var grid = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15]
];
console.log(minPathSum(grid));