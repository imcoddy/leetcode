/**
 * Source:  https://leetcode.com/problems/reverse-words-in-a-string/
 * Tags:    [String]
 * Level:   Medium
 * Title:   Reverse Words in a String
 * Auther:  @imcoddy
 * Content: Given an input string, reverse the string word by word.
 *
 *
 *
 * For example,
 * Given s = "the sky is blue",
 * return "blue is sky the".
 *
 *
 *
 * Update (2015-02-12):
 * For C programmers: Try to solve it in-place in O(1) space.
 *
 *
 * click to show clarification.
 *
 * Clarification:
 *
 *
 *
 * What constitutes a word?
 * A sequence of non-space characters constitutes a word.
 * Could the input string contain leading or trailing spaces?
 * Yes. However, your reversed string should not contain leading or trailing spaces.
 * How about multiple spaces between two words?
 * Reduce them to a single space in the reversed string.
 */

/**
 * @param {string} str
 * @returns {string}
 */

/**
 * Memo:
 * Runtime: 131ms
 * Tests: 22 test cases passed
 * Rank: A
 */
var reverseWords = function(str) {
    var start = 0;
    var end = 0;
    var result = '';

    while (start < str.length) {
        while (start < str.length && str.charAt(start) === ' ') {
            start++;
        }
        end = start;
        while (end < str.length && str.charAt(end) !== ' ') {
            end++;
        }
        //        console.log(start, end, str.slice(start, end), str);
        result = str.slice(start, end) + ' ' + result;
        start = end;
    }
    return result.trim();
};

/**
 * Memo:
 * Runtime: 259ms
 * Tests: 22 test cases passed
 * Rank: D
 */

/**
 *var reverseWords = function(str) {
 *    if (!str) {
 *        return '';
 *    }
 *    var words = str.trim().split(' ');
 *    var result = '';
 *    words.forEach(function(e) {
 *        if (e !== '') {
 *            result = e + ' ' + result;
 *        }
 *    });
 *    return result.trim();
 *};
 */

//console.log(reverseWords(''));
//console.log(reverseWords('test'));
//console.log(reverseWords('this is a test'));
console.log(reverseWords('    this is a test       '));
//console.log(reverseWords('     this        is           a test    '));