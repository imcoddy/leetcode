/**
 * Source:  https://leetcode.com/problems/number-of-1-bits/
 * Tags:    [Bit Manipulation]
 * Level:   Easy
 * Title:   Number of 1 Bits
 * Auther:  @imcoddy
 * Content: Write a function that takes an unsigned integer and returns the number of ’1' bits it has (also known as the Hamming weight).
 *
 * For example, the 32-bit integer ’11' has binary representation 00000000000000000000000000001011, so the function should return 3.
 *
 * Credits:Special thanks to @ts for adding this problem and creating all test cases.
 */

/**
 * @param {number} n - a positive integer
 * @return {number}
 */

/**
 * Memo: Recursive solution. Check if it is even or odd and divide it by 2. Keep the process until n is 0.
 * Complex: O(logn)
 * Runtime: 156ms
 * Tests: 600 test cases passed
 * Rank: A
 * Updated: 2015-06-11
 */
var hammingWeight = function(n) {
    return n === 0 ? 0 : (n % 2) + hammingWeight(~~(n / 2));
};

var should = require('should');
console.time('Runtime');
hammingWeight(0).should.equal(0);
hammingWeight(1).should.equal(1);
hammingWeight(2).should.equal(1);
hammingWeight(3).should.equal(2);
hammingWeight(7).should.equal(3);
hammingWeight(8).should.equal(1);

console.timeEnd('Runtime');