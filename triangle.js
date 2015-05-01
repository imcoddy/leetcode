/**
 * Source:  https://leetcode.com/problems/triangle/
 * Tags:    [Array,Dynamic Programming]
 * Level:   Medium
 * Title:   Triangle
 * Auther:  @imcoddy
 * Content: Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.
 *
 *
 * For example, given the following triangle
 *
 * [
 *      [2],
 *     [3,4],
 *    [6,5,7],
 *   [4,1,8,3]
 * ]
 *
 *
 *
 * The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).
 *
 *
 *
 * Note:
 * Bonus point if you are able to do this using only O(n) extra space, where n is the total number of rows in the triangle.
 */

/**
 * @param {number[][]} triangle
 * @return {number}
 */

/**
 * Memo: calculate border first then using DP to get best result
 * Runtime: 152ms
 * Rank: A
 */
var minimumTotal = function(triangle) {
    var s = [0];
    for (var i = 0; i < triangle.length; i++) {
        for (var j = 0; j < triangle[i].length; j++) {
            var upper = (i - 1) * i / 2;
            var lower = (i + 1) * i / 2;
            if (j === 0) {
                s[lower] = s[upper] + triangle[i][0];
            } else if (i === j) {
                s[lower + i] = s[upper + i - 1] + triangle[i][i];
            } else {
                s[lower + j] = Math.MAX_VALUE;
            }
        }
    }

    for (var i = 1; i < triangle.length; i++) {
        for (var j = 1; j < i; j++) {
            var current = (i * (i + 1)) / 2 + j;
            var upper = ((i - 1) * i) / 2 + j;
            s[current] = Math.min(s[upper - 1], s[upper]) + triangle[i][j];
        }
    }

    var min = s[s.length - 1];
    for (var i = 1; i < triangle.length; i++) {
        min = Math.min(min, s[s.length - i - 1])
    }
    //console.log(s);
    return min;
};

console.log(minimumTotal([
    [2, 0, 0, 0],
    [3, 4, 0, 0],
    [6, 5, 7, 0],
    [4, 1, 8, 3]
]));


console.log(minimumTotal([
    [-1],
    [9, -2],
    [0, 4, 5],
    [7, 4, -4, -5],
    [9, 6, 0, 5, 7],
    [9, 2, -9, -4, 5, -2],
    [-4, -9, -5, -7, -5, -5, -2],
    [-9, 5, -6, -4, 4, 1, 6, -4],
    [-4, 3, 9, -2, 8, 6, -9, -2, -2],
    [7, -6, 9, 8, -4, 2, -4, -2, -1, -2],
    [0, 3, 2, 4, 0, -6, 7, 6, 7, -5, 2],
    [9, 0, -8, 6, 4, 6, 2, 5, -9, 9, -1, -6],
    [6, -3, -4, -5, 0, 3, 3, 4, -6, -4, -7, 7, 3]
]));