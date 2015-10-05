/**
 * Source:  https://leetcode.com/problems/ugly-number/
 * Tags:    [Math]
 * Level:   Easy
 * Title:   Ugly Number
 * Auther:  @imcoddy
 * Content: Write a program to check whether a given number is an ugly number.
 *
 *
 *
 * Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 6, 8 are ugly while 14 is not ugly since it includes another prime factor 7.
 *
 *
 *
 * Note that 1 is typically treated as an ugly number.
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
 *
 *                   Show Similar Problems
 *
 *
 *                      (E) Happy Number
 *
 *                      (E) Count Primes
 *
 *                      (M) Ugly Number II
 */

/**
 * @param {number} num
 * @return {boolean}
 */
/**
 * Memo: keep devide the number till it has no 2, 3 or 5, then check if the result is 1 or not
 * Complex: O(lgn)
 * Runtime: 176ms
 * Tests: 1012 test cases passed
 * Rank: S
 * Updated: 2015-10-02
 */
var isUgly = function(num) {
    while (num > 1) {
        var before = num;
        while (num % 2 === 0) num = num / 2;
        while (num % 3 === 0) num = num / 3;
        while (num % 5 === 0) num = num / 5;
        if (num === before) break;
    }
    return num === 1;
};

/**
 * Memo:
 * Complex: O(lgn)
 * Runtime: 180ms
 * Tests: 1012 test cases passed
 * Rank: S
 * Updated: 2015-10-02
 */
var isUgly = function(num) {
    for (var i of[2, 3, 5])
        while (num && num % i === 0) num /= i;
    return num === 1;
};

var should = require('should');
console.time('Runtime');
isUgly(2).should.equal(true);
isUgly(3).should.equal(true);
isUgly(4).should.equal(true);
isUgly(5).should.equal(true);
isUgly(6).should.equal(true);
isUgly(7).should.equal(false);
isUgly(8).should.equal(true);
isUgly(9).should.equal(true);
isUgly(14).should.equal(false);
isUgly(21).should.equal(false);
isUgly(22).should.equal(false);

console.timeEnd('Runtime');