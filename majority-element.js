/**
 * Source:  https://leetcode.com/problems/majority-element/
 * Tags:    [Divide and Conquer,Array,Bit Manipulation]
 * Level:   Easy
 * Updated: 2015-04-24
 * Title:   Majority Element
 * Auther:  @imcoddy
 * Content: Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
 *
 * You may assume that the array is non-empty and the majority element always exist in the array.
 *
 * Credits:Special thanks to @ts for adding this problem and creating all test cases.
 */

/**
 * @param {number[]} num
 * @return {number}
 */

/**
 * Memo: Use a map to record how many thime this element appeared, then find the one passed [n/2] times
 * Complex: O(n)
 * Runtime: 136ms
 * Tests: 40 test cases passed
 * Rank: A
 * Updated: 2015-06-12
 */
var majorityElement = function(num) {
    var map = {};
    for (var i = 0; i < num.length; i++) {
        if (map[num[i]]) {
            map[num[i]] += 1;
            if (map[num[i]] >= (num.length / 2)) {
                return parseInt(num[i], 10);
            }
        } else {
            map[num[i]] = 1;
        }
    }

    var result = 0;
    var max = 0;
    for (var k in map) {
        if (map[k] > max) {
            result = k;
            max = map[k];
        }
    }
    return parseInt(result, 10);
};

/**
 * Memo: Sort the array first, then the majority element will be located at n/2.
 * Complex: O(nlogn)
 * Runtime: 148ms
 * Tests: 40 test cases passed
 * Rank: A
 * Updated: 2015-06-12
 */
var majorityElement = function(num) {
    return num.sort()[num.length >> 1];
};

var should = require('should');
console.time('Runtime');
majorityElement([1]).should.equal(1);
//majorityElement([1, 2]).should.equal(1);
//majorityElement([2, 1]).should.equal(1); // this is a bit tricky as it could be either 1 or 2
majorityElement([2, 1, 2]).should.equal(2);
majorityElement([1, 8, 3, 3, 3, 5]).should.equal(3);

console.timeEnd('Runtime');