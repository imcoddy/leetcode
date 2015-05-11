/**
 * Source:  https://leetcode.com/problems/spiral-matrix-ii/
 * Tags:    [Array]
 * Level:   Medium
 * Title:   Spiral Matrix II
 * Auther:  @imcoddy
 * Content: Given an integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.
 *
 *
 * For example,
 * Given n = 3,
 *
 * You should return the following matrix:
 *
 * [
 *  [ 1, 2, 3 ],
 *  [ 8, 9, 4 ],
 *  [ 7, 6, 5 ]
 * ]
 */

/**
 * @param {number} n
 * @return {number[][]}
 */
/**
 * Memo: simulate spiral traveral.
 * Runtime: 136ms
 * Tests: 21 test cases passed
 * Rank: B
 */
var generateMatrix = function(n) {
    if (n <= 0) {
        return [];
    }
    var directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0]
    ];

    var result = [];
    for (var i = 0; i < n; i++) {
        var a = [];
        for (var j = 0; j < n; j++) {
            a.push(0);
        }
        result.push(a);
    }

    var direction = 0;
    var index = [0, 0];

    for (var i = 1; i <= n * n; i++) {
        var next = [];
        result[index[0]][index[1]] = i;
        next[0] = index[0] + directions[direction][0];
        next[1] = index[1] + directions[direction][1];
        if (next[0] < 0 || next[0] > n - 1 || next[1] < 0 || next[1] > n - 1 || result[next[0]][next[1]] > 0) {
            direction = (direction + 1) % 4;
            next[0] = index[0] + directions[direction][0];
            next[1] = index[1] + directions[direction][1];
        }
        index = next;
    }
    return result;
};

console.log(generateMatrix(2));
console.log(generateMatrix(3));
console.log(generateMatrix(5));
