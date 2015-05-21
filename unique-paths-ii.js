/**
 * Source:  https://leetcode.com/problems/unique-paths-ii/
 * Tags:    [Array,Dynamic Programming]
 * Level:   Medium
 * Title:   Unique Paths II
 * Auther:  @imcoddy
 * Content: Follow up for "Unique Paths":
 *
 * Now consider if some obstacles are added to the grids. How many unique paths would there be?
 *
 * An obstacle and empty space is marked as 1 and 0 respectively in the grid.
 *
 * For example,
 * There is one obstacle in the middle of a 3x3 grid as illustrated below.
 *
 * [
 *   [0,0,0],
 *   [0,1,0],
 *   [0,0,0]
 * ]
 *
 * The total number of unique paths is 2.
 *
 * Note: m and n will be at most 100.
 */

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

/**
 * Memo: Note that you need to mark the initial states to 0 if there is obstacle in the border
 * Complex: O(m*n)
 * Runtime: 128ms
 * Tests: 43 test cases passed
 * Rank: A
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    var m = obstacleGrid.length;
    var n = obstacleGrid[0].length;

    var s = [];
    for (var i = 0; i < m; i++) {
        var a = [];
        for (var j = 0; j < n; j++) {
            a.push(0);
        }
        s.push(a);
    }

    var no_obstacle_in_border = 1;
    for (var i = 0; i < m; i++) {
        if (obstacleGrid[i][0]) no_obstacle_in_border = 0;
        s[i][0] = no_obstacle_in_border;
    }
    no_obstacle_in_border = 1;
    for (var i = 0; i < n; i++) {
        if (obstacleGrid[0][i]) no_obstacle_in_border = 0;
        s[0][i] = no_obstacle_in_border;
    }

    for (var i = 1; i < m; i++) {
        for (var j = 1; j < n; j++) {
            s[i][j] = obstacleGrid[i][j] ? 0 : (s[i - 1][j] + s[i][j - 1]);
        }
    }
    //console.log(s);
    return s[m - 1][n - 1];
};

var should = require('should');
console.time('Runtime');
uniquePathsWithObstacles([
    [0, 0, 0],
]).should.equal(1);

uniquePathsWithObstacles([
    [0, 1, 0],
]).should.equal(0);

uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
]).should.equal(2);


uniquePathsWithObstacles([
    [0, 0, 1],
    [0, 1, 0],
    [0, 0, 0]
]).should.equal(1);

uniquePathsWithObstacles([
    [0, 1, 1],
    [1, 1, 0],
    [0, 0, 0]
]).should.equal(0);

console.timeEnd('Runtime');