/**
 * Source:  https://leetcode.com/problems/power-of-two/
 * Tags:    [Math,Bit Manipulation]
 * Level:   Easy
 * Title:   Power of Two
 * Auther:  @imcoddy
 * Content: Given an integer, write a function to determine if it is a power of two.
 *
 *
 * Credits:Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.
 *
 *
 *
 *
 *
 *
 *
 *
 *                   Show Similar Problems
 *
 *
 *                      (E) Number of 1 Bits
 */

/**
 * @param {number} n
 * @return {boolean}
 */
/**
 * Memo:
 * Complex: O(logn)
 * Runtime: 204ms
 * Tests: 1108 test cases passed
 * Rank: B
 * Updated: 2015-08-09
 */
var isPowerOfTwo = function(n) {
    while (n > 1) {
        if (n % 2 === 1) return false;
        n = n >> 1;
    }
    return n === 1;
};

var should = require('should');
console.time('Runtime');
isPowerOfTwo(0).should.equal(false);
isPowerOfTwo(1).should.equal(true);
isPowerOfTwo(2).should.equal(true);
isPowerOfTwo(3).should.equal(false);
isPowerOfTwo(4).should.equal(true);
isPowerOfTwo(5).should.equal(false);

console.timeEnd('Runtime');