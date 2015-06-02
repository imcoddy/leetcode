/**
 * Source:  https://leetcode.com/problems/number-of-islands/
 * Tags:    [Depth-first Search,Breadth-first Search]
 * Level:   Medium
 * Title:   Number of Islands
 * Auther:  @imcoddy
 * Content: Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
 *
 * Example 1:
 * 11110110101100000000
 * Answer: 1
 * Example 2:
 * 11000110000010000011
 * Answer: 3
 *
 * Credits:Special thanks to @mithmatt for adding this problem and creating all test cases.
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */

/**
 * Memo: BFS
 * Complex: O(m*n)
 * Runtime: 180ms
 * Tests: 45 test cases passed
 * Rank: B
 */
var numIslands = function(grid) {
    var m = grid.length;
    if (m <= 0) return 0;
    var n = grid[0].length;

    var count = 0;
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (grid[i][j] > 0) {
                markIsland(i, j);
            }
        }
    }

    return count;

    function markIsland(i, j) {
        var directions = [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0]
        ];
        var queue = [
            [i, j]
        ];

        while (queue.length) {
            var p = queue.pop();
            grid[p[0]][p[1]] = -1 - count;
            for (var i = 0; i < directions.length; i++) {
                var next = [directions[i][0] + p[0], directions[i][1] + p[1]];
                if (next[0] >= 0 && next[0] < m && next[1] >= 0 && next[1] < n && grid[next[0]][next[1]] > 0) {
                    queue.push(next);
                }
            }
        }
        count += 1;
    }
};

var should = require('should');
console.time('Runtime');
numIslands([]).should.equal(0);
numIslands([
    []
]).should.equal(0);

numIslands([
    [1, 1],
    [1, 1],
    [1, 0]
]).should.equal(1);

numIslands([
    [1, 1, 0, 0],
    [1, 1, 0, 1],
    [1, 0, 1, 0]
]).should.equal(3);

console.timeEnd('Runtime');