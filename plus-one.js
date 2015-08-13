/**
 * Source:  https://leetcode.com/problems/plus-one/
 * Tags:    [Array,Math]
 * Level:   Easy
 * Title:   Plus One
 * Auther:  @imcoddy
 * Content: Given a non-negative number represented as an array of digits, plus one to the number.
 *
 * The digits are stored such that the most significant digit is at the head of the list.
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
/**
 * Memo:
 * Complex: O(n)
 * Runtime: 108ms
 * Tests: 120 test cases passed
 * Rank: S
 * Updated: 2015-11-09
 */
var plusOne = function(digits) {
    var length = digits.length;
    var index = length - 1;
    digits[index] = digits[index] + 1;

    if (digits[index] === 10) {
        while (index >= 0 && digits[index] === 10) {
            index--;
            digits[index] += 1;
            digits[index + 1] = 0;
        }
    }
    if (digits[0] === 10) {
        digits[0] = 0;
        digits.unshift(1);
    }

    return digits;
};

/**
 * Memo:
 * Complex: O(n)
 * Runtime: 132ms
 * Tests: 108 test cases passed
 * Rank: S
 * Updated: 2015-11-10
 */
var plusOne = function(digits) {
    var i = digits.length - 1;
    digits[i] = digits[i] + 1;

    while (digits[i] === 10 && i > 0) {
        digits[--i] += 1;
        digits[i + 1] = 0;
    }

    if (digits[0] === 10) {
        digits[0] = 0;
        digits.unshift(1);
    }
    return digits;
};

console.log(plusOne([0]));
console.log(plusOne([1]));
console.log(plusOne([9]));
console.log(plusOne([1, 9]));
console.log(plusOne([3, 9, 9]));
console.log(plusOne([9, 9, 9, 9]));