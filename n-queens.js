/**
 * Source:  https://leetcode.com/problems/n-queens/
 * Tags:    [Backtracking]
 * Level:   Hard
 * Title:   N-Queens
 * Auther:  @imcoddy
 * Content: The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.
 *
 *
 *
 * Given an integer n, return all distinct solutions to the n-queens puzzle.
 *
 * Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively.
 *
 * For example,
 * There exist two distinct solutions to the 4-queens puzzle:
 *
 * [
 *  [".Q..",  // Solution 1
 *   "...Q",
 *   "Q...",
 *   "..Q."],
 *
 *  ["..Q.",  // Solution 2
 *   "Q...",
 *   "...Q",
 *   ".Q.."]
 * ]
 */

/**
 * @param {number} n
 * @return {string[][]}
 */

/**
 * Memo:
 * Runtime: 166ms
 * Tests: 9 test cases passed
 * Rank: B
 */
var solveNQueens = function(n) {
    var queens = [];
    var result = [];

    function placeQueen(row) {
        if (row >= n) {
            result.push(buildBoard(queens));
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

    function buildBoard(queens) {
        var board = [];
        for (var i = 0; i < queens.length; i++) {
            var str = new Array(queens.length + 1).join('.');
            str = str.substr(0, queens[i]) + 'Q' + str.substr(queens[i] + 1);
            board[i] = str;
        }
        return board;
    }

    function getEmptyBoard(n) {
        var board = [];
        for (var i = 0; i < n; i++) {
            var row = '';
            for (var j = 0; j < n; j++) {
                row = row + '.';
            }
            board.push(row);
        }
        return board;
    }

    placeQueen(0);
    return result;
};

console.log(solveNQueens(1));
console.log(solveNQueens(4));