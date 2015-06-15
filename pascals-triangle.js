/**
 * Source:  https://leetcode.com/problems/pascals-triangle/
 * Tags:    [Array]
 * Level:   Easy
 * Title:   Pascal's Triangle
 * Auther:  @imcoddy
 * Content: Given numRows, generate the first numRows of Pascal's triangle.
 *
 *
 * For example, given numRows = 5,
 * Return
 *
 * [
 *      [1],
 *     [1,1],
 *    [1,2,1],
 *   [1,3,3,1],
 *  [1,4,6,4,1]
 * ]
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
/**
 * Memo:
 * Complex: O(n^2)
 * Runtime: 15ms
 * Tests: 15 test cases passed
 * Rank: A
 */
var generate = function(numRows) {
    var result = [];
    for (var i = 0; i < numRows; i++) {
        var row = [];
        for (var j = 0; j <= i; j++) {
            var val = 1;
            if (j < i && j > 0 && i >= 1) {
                val = result[i - 1][j - 1] + result[i - 1][j];
            }
            row.push(val);
        }
        result.push(row);
    }

    return result;
};

/**
 * Memo: Calculate from top to buttom
 * Complex: O(n^2)
 * Runtime: 116ms
 * Tests: 15 test cases passed
 * Rank: S
 * Updated: 2015-06-14
 */
var generate = function(numRows) {
    var result = [];
    for (var i = 0; i < numRows; i++) {
        var row = [1];
        for (var j = 1; j <= i; j++) {
            row[j] = result[i - 1][j - 1] + (i === j ? 0 : result[i - 1][j]);
        }
        result.push(row);
    }

    return result;
};
console.log(generate(0));
console.log(generate(1));
console.log(generate(3));
console.log(generate(5));