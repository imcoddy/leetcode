/**
 * Source:  https://leetcode.com/problems/spiral-matrix/
 * Tags:    [Array]
 * Level:   Medium
 * Title:   Spiral Matrix
 * Auther:  @imcoddy
 * Content: Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.
 *
 *
 *
 * For example,
 * Given the following matrix:
 *
 *
 * [
 *  [ 1, 2, 3 ],
 *  [ 4, 5, 6 ],
 *  [ 7, 8, 9 ]
 * ]
 *
 *
 * You should return [1,2,3,6,9,8,7,4,5].
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 /**
  * Memo: mark the visited element to undefined and try to reach next index if valid
  * Runtime: 131ms
  * Tests: 21 test cases passed
  * Rank: S
  */
var spiralOrder = function(matrix) {
    if (!matrix || matrix.length === 0) {
        return [];
    }
    var result = [];
    var m = matrix.length;
    var n = matrix[0].length;
    var directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0]
    ];
    var direction = 0;
    var index = [0, 0];

    for (var i = 0; i < m * n; i++) {
        result.push(matrix[index[0]][index[1]]);
        matrix[index[0]][index[1]] = undefined;
        var next = [];
        next[0] = index[0] + directions[direction][0];
        next[1] = index[1] + directions[direction][1];
        if (next[0] < 0 || next[0] > m - 1 || next[1] < 0 || next[1] > n - 1 || !matrix[next[0]][next[1]]) {
            direction = (direction + 1) % 4;
            next[0] = index[0] + directions[direction][0];
            next[1] = index[1] + directions[direction][1];
        }
        index = next;
    }

    return result;
};

console.log(spiralOrder([]));

console.log(spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]));


console.log(spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]));
