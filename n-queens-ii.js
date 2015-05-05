/**
 * Source:  https://leetcode.com/problems/n-queens-ii/
 * Tags:    [Backtracking]
 * Level:   Hard
 * Title:   N-Queens II
 * Auther:  @imcoddy
 * Content: Follow up for N-Queens problem.
 *
 * Now, instead outputting board configurations, return the total number of distinct solutions.
 */

/**
 * @param {number} n
 * @return {number}
 */

/**
 * Memo:
 * Runtime: 127ms
 * Tests: 9 test cases passed
 * Rank: S
 */
var totalNQueens = function(n) {
    var queens = [];
    var count = 0;

    function placeQueen(row) {
        if (row >= n) {
            count++;
        } else {
            for (var i = 0; i < n; i++) {
                if (isValid(row, i)) {
                    queens[row] = i;
                    placeQueen(row + 1);
                }
            }
        }
    }

    function isValid(row, index) {
        for (var i = 0; i < row; i++) {
            if (queens[i] === index || Math.abs(queens[i] - index) === Math.abs(row - i)) {
                return false;
            }
        }
        return true;
    }

    placeQueen(0);
    return count;
};

console.log(totalNQueens(4));
console.log(totalNQueens(8));