/**
 * Source:  https://leetcode.com/problems/pascals-triangle-ii/
 * Tags:    [Array]
 * Level:   Easy
 * Title:   Pascal's Triangle II
 * Auther:  @imcoddy
 * Content: Given an index k, return the kth row of the Pascal's triangle.
 *
 *
 * For example, given k = 3,
 * Return [1,3,3,1].
 *
 *
 *
 * Note:
 * Could you optimize your algorithm to use only O(k) extra space?
 */

/**
 * @param {number} rowIndex
 * @return {number[]}
 */

/**
 * Memo: Create the whole pascals triangle and return kth row
 * Complex: O(n^2)
 * Runtime: 120ms
 * Tests: 34 test cases passed
 * Rank: S
 */
var getRow = function(rowIndex) {
    var result = [];
    for (var i = 0; i <= rowIndex; i++) {
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

    return result[rowIndex];
};

/**
 * Memo: Use only O(k) extra space
 * Complex: O(n^2)
 * Runtime: 115ms
 * Tests: 34 test cases passed
 * Rank: S
 */
var getRow = function(rowIndex) {
    var a = [];
    for (var i = 0; i <= rowIndex; i++) {
        a.push(1);
    }

    for (var i = 1; i <= rowIndex; i++) {
        for (j = 1; j < i; j++) {
            a[j] = a[rowIndex] + a[j];
            a[rowIndex] = a[j] - a[rowIndex];
        }
    }
    return a;
};

console.log(getRow(5));
