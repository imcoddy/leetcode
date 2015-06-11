/**
 * Source:  https://leetcode.com/problems/single-number/
 * Tags:    [Hash Table,Bit Manipulation]
 * Level:   Medium
 * Updated: 2015-04-24
 * Title:   Single Number
 * Auther:  @imcoddy
 * Content: Given an array of integers, every element appears twice except for one. Find that single one.
 *
 *
 * Note:
 * Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 */

/**
 * @param {number[]} A
 * @return {number}
 */
var singleNumber = function(A) {
    var result = 0;
    for (var i = 0; i < A.length; i++) result ^= A[i];
    return result;
};

/**
 * Memo: Bit Manipulation. Note that A^B^B will be A. As there is only one number that appears only once, this will do the trick.
 * Complex: O(n)
 * Runtime: 140ms
 * Tests: 15 test cases passed
 * Rank: A
 * Updated: 2015-06-12
 */
var singleNumber = function(nums) {
    var result = 0;
    for (var i = 0; i < nums.length; i++) {
        result ^= nums[i];
    }
    return result;
};

/**
 * Memo: Use a map to record how many times the element has appeared.
 * Complex: O(n)
 * Runtime: 148ms
 * Tests: 15 test cases passed
 * Rank: B
 * Updated: 2015-06-12
 */
var singleNumber = function(nums) {
    var map = Object.create(null);

    for (var i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            map[nums[i]]++;
        } else {
            map[nums[i]] = 1;
        }
    }

    for (var m in map) {
        if (map[m] === 1) {
            return parseInt(m);
        }
    }
};

var should = require('should');
console.time('Runtime');
singleNumber([1, 1, 2, 2, 3]).should.equal(3);

console.timeEnd('Runtime');