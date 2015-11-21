/**
 * Source:  https://leetcode.com/problems/sqrtx/
 * Tags:    [Math,Binary Search]
 * Level:   Medium
 * Title:   Sqrt(x)
 * Auther:  @imcoddy
 * Content: Implement int sqrt(int x).
 *
 * Compute and return the square root of x.
 */

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 0) return 0;
    var low = 1;
    var high = x;
    while (low + 1 < high) {
        var mid = low + ((high - low) >> 1);
        mid * mid > x ? high = mid : low = mid;
    }
    return low;
};

/**
 * Memo:
 * Complex: O(logn)
 * Runtime: 216ms
 * Tests: 1017 test cases passed
 * Rank: B
 * Updated: 2015-11-19
 */
var mySqrt = function(x) {
    if (x <= 0) return 0;

    var start = 1;
    var end = x;
    while (end - start > 1) {
        var mid = ~~((end + start) / 2);
        mid * mid <= x ? start = mid : end = mid;
    }
    return start;
};
var should = require('should');
console.time('Runtime');

mySqrt(0).should.equal(0);
mySqrt(1).should.equal(1);
mySqrt(2).should.equal(1);
mySqrt(3).should.equal(1);
mySqrt(4).should.equal(2);
mySqrt(15).should.equal(3);
mySqrt(16).should.equal(4);
mySqrt(17).should.equal(4);
mySqrt(25).should.equal(5);

console.timeEnd('Runtime');