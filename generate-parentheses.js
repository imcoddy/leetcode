/**
 * Source:  https://leetcode.com/problems/generate-parentheses/
 * Tags:    [Backtracking,String]
 * Level:   Medium
 * Title:   Generate Parentheses
 * Auther:  @imcoddy
 * Content: Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 *
 *
 *
 * For example, given n = 3, a solution set is:
 *
 *
 * "((()))", "(()())", "(())()", "()(())", "()()()"
 */

/**
 * @param {number} n
 * @return {string[]}
 */

/**
 * Memo:
 * Runtime: 130ms
 * Tests: 8 test cases passed
 * Rank: A
 */
var generateParenthesis = function(n) {
    var result = [];
    var solution = [];
    var parentheses = ['(', ')'];

    function generateBT(row) {
        if (row >= 2 * n) {
            result.push(solution.join(''));
        } else {
            for (var i = 0; i < parentheses.length; i++) {
                solution[row] = parentheses[i];
                if (isValid(row)) {
                    generateBT(row + 1);
                }
            }
        }
    }

    function isValid(row) {
        if (row <= 0) {
            return true;
        }

        var stack = 0;
        var left = 0;
        for (var i = 0; i <= row; i++) {
            if (solution[i] === '(') {
                stack++;
                left++;
            } else {
                stack--;
            }
            if (stack < 0) {
                return false;
            }
            if (left > n) {
                return false;
            }
        }
        return stack <= n;
    }

    generateBT(0);
    return result;
};

console.log(generateParenthesis(3));