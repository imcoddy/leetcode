/**
 * Source:  https://leetcode.com/problems/valid-sudoku/
 * Tags:    [Hash Table]
 * Level:   Easy
 * Title:   Valid Sudoku
 * Auther:  @imcoddy
 * Content: Determine if a Sudoku is valid, according to: Sudoku Puzzles - The Rules.
 *
 * The Sudoku board could be partially filled, where empty cells are filled with the character '.'.
 *
 *
 *
 * A partially filled sudoku which is valid.
 *
 *
 * Note:
 * A valid Sudoku board (partially filled) is not necessarily solvable. Only the filled cells need to be validated.
 */

/**
 * @param {character[][]} board
 * @return {boolean}
 */

/**
 * Memo: Use hashmap to track if the number has been used in a row, column or smaller plate
 * Complex: O(n)
 * Runtime: 176ms
 * Tests: 501 test cases passed
 * Rank: S
 */
var isValidSudoku = function(board) {
    var rows = [];
    var columns = [];
    var plates = [
        [],
        [],
        []
    ];

    for (var i = 0; i < 9; i++) {
        rows[i] = {};
        columns[i] = {};
        plates[~~(i / 3)][i % 3] = {};
    }

    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            var char = board[i][j];
            if (char !== '.') {
                if (rows[i][char]) {
                    return false;
                } else {
                    rows[i][char] = true;
                }

                if (columns[j][char]) {
                    return false;
                } else {
                    columns[j][char] = true;
                }

                if (plates[~~(i / 3)][~~(j / 3)][char]) {
                    return false;
                } else {
                    plates[~~(i / 3)][~~(j / 3)][char] = true;
                }
            }
        }
    }
    return true;
};

console.log(isValidSudoku([".........", "4........", "......6..", "...38....", ".5...6..1", "8......6.", ".........", "..7.9....", "...6....."]));
