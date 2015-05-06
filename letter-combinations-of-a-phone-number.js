/**
 * Source:  https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 * Tags:    [Backtracking,String]
 * Level:   Medium
 * Title:   Letter Combinations of a Phone Number
 * Auther:  @imcoddy
 * Content: Given a digit string, return all possible letter combinations that the number could represent.
 *
 *
 *
 * A mapping of digit to letters (just like on the telephone buttons) is given below.
 *
 *
 *
 * Input:Digit string "23"
 * Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 *
 *
 *
 * Note:
 * Although the above answer is in lexicographical order, your answer could be in any order you want.
 */

/**
 * @param {string} digits
 * @return {string[]}
 */

/**
 * Memo:
 * Runtime: 131ms
 * Tests: 25 test cases passed
 * Rank: B
 */
var letterCombinations = function(digits) {
    var n = digits.length;
    if (n <= 0) {
        return [];
    }
    var map = {
        '1': [],
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z'],
        '0': [' '],
        '*': ['+'],
        '#': ['^'],
    };

    var result = [];
    var solution = [];

    function letterCombinationsBT(row) {
        if (row >= n) {
            result.push(solution.join(''));
        } else {
            var digit = digits[row];
            for (var i = 0; i < map[digit].length; i++) {
                solution[row] = map[digit][i];
                letterCombinationsBT(row + 1);
            }
        }
    }

    letterCombinationsBT(0);
    return result;
};

console.log(letterCombinations(''));
console.log(letterCombinations('2'));
console.log(letterCombinations('22'));
console.log(letterCombinations('234'));
