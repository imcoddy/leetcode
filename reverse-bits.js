/**
 * Source:  https://leetcode.com/problems/reverse-bits/
 * Tags:    [Bit Manipulation]
 * Level:   Easy
 * Title:   Reverse Bits
 * Auther:  @imcoddy
 * Content: Reverse bits of a given 32 bits unsigned integer.
 *
 * For example, given input 43261596 (represented in binary as 00000010100101000001111010011100), return 964176192 (represented in binary as 00111001011110000010100101000000).
 *
 *
 * Follow up:
 * If this function is called many times, how would you optimize it?
 *
 *
 * Related problem: Reverse Integer
 *
 * Credits:Special thanks to @ts for adding this problem and creating all test cases.
 */

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */

/**
 * Memo: Since it is a 32-bit integer, simple loop 32 times to calculate the result.
 * Complex: O(1)
 * Runtime: 164ms
 * Tests: 600 test cases passed
 * Rank: A
 * Updated: 2015-06-11
 */
var reverseBits = function(n) {
    var result = 0;
    var count = 32;
    while (count) {
        result = result * 2 + (n % 2);
        n = ~~(n / 2);
        count--;
    }
    return result;
};

var reverseBits = function(n) {
    var result = 0;
    for (var i = 0; i < 32; i++) {
        result = result * 2 + (n % 2);
        n = ~~(n / 2);
    }

    return result;
};

var should = require('should');
console.time('Runtime');
reverseBits(43261596).should.equal(964176192);

console.timeEnd('Runtime');