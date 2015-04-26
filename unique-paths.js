/**
 * Source:  https://leetcode.com/problems/unique-paths/
 * Tags:    [Array,Dynamic Programming]
 * Level:   Medium
 * Title:   Unique Paths
 * Auther:  @imcoddy
 * Content: A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
 *
 * The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
 *
 * How many possible unique paths are there?
 *
 *
 *
 * Above is a 3 x 7 grid. How many possible unique paths are there?
 *
 *
 * Note: m and n will be at most 100.
 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

/**
 * Explanation: There are two ways to get to point [i,j], whether from top or from left. And the initial state is assume there is only one way to get to each point.
 * S[i][j] = S[i][j-1] + S[i-1][j];
 * Runtime: 134ms
 * Rank: A
 */
var uniquePaths = function(m, n) {
    var s = [];
    for (var i = 0; i < m; i++) {
        var a = [];
        for (var j = 0; j < n; j++) {
            a.push(1);
        }
        s.push(a);
    }

    for (var i = 1; i < m; i++) {
        for (var j = 1; j < n; j++) {
            s[i][j] = s[i - 1][j] + s[i][j - 1];
        }
    }
    console.log(s);
    return s[m - 1][n - 1];
};

console.log(uniquePaths(3, 7));