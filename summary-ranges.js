/**
 * Source:  https://leetcode.com/problems/summary-ranges/
 * Tags:    [Array]
 * Level:   Easy
 * Title:   Summary Ranges
 * Auther:  @imcoddy
 * Content: Given a sorted integer array without duplicates, return the summary of its ranges.
 *
 *
 * For example, given [0,1,2,4,5,7], return ["0->2","4->5","7"].
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
 *                      (M) Missing Ranges
 */

/**
 * @param {number[]} nums
 * @return {string[]}
 */
/**
 * Memo: Find each range by iterate all nums
 * Complex: O(n)
 * Runtime: 116ms
 * Tests: 27 test cases passed
 * Rank: A
 * Updated: 2015-09-30
 */
var summaryRanges = function(nums) {
    var result = [];
    var range = [];
    while (nums.length > 0) {
        range.push(nums.shift());
        if (range.length === 1) {
            range.push(range[0]);
            while (nums[0] === range[1] + 1) range[1] = nums.shift();
            result.push(range[0] === range[1] ? '' + range[0] : range[0] + '->' + range[1]);
            range = [];
        }
    }
    return result;
};

var summaryRanges = function(nums) {
    var result = [];
    var index = 0;
    while (index < nums.length) {
        var range = [nums[index], nums[index++]];
        while (nums[index] === range[1] + 1) range[1] = nums[index++];
        result.push(range[0] === range[1] ? '' + range[0] : range[0] + '->' + range[1]);
    }
    return result;
};

var should = require('should');
console.time('Runtime');
summaryRanges([0, 1, 2, 4, 5, 7]).should.eql(['0->2', '4->5', '7']);

console.timeEnd('Runtime');