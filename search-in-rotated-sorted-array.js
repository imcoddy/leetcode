/**
 * Source:  https://leetcode.com/problems/search-in-rotated-sorted-array/
 * Tags:    [Array,Binary Search]
 * Level:   Hard
 * Title:   Search in Rotated Sorted Array
 * Auther:  @imcoddy
 * Content: Suppose a sorted array is rotated at some pivot unknown to you beforehand.
 *
 * (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
 *
 * You are given a target value to search. If found in the array return its index, otherwise return -1.
 *
 * You may assume no duplicate exists in the array.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/**
 * Memo: Rotate the array to soted state, then try to find if the target is in the array using binary search.
 * Complex: O(n)
 * Runtime: 152ms
 * Tests: 194 test cases passed
 * Rank: S
 * Updated: 2015-06-28
 */
var search = function(nums, target) {
    var count = 0;
    var length = nums.length;
    while (nums[0] > nums[length - 1]) {
        nums.unshift(nums.pop());
        count++;
    }

    var start = 0;
    var end = length - 1;
    while (start <= end) {
        var mid = (start + end) >> 1;
        if (nums[mid] === target) return mid >= count ? (mid - count) : (length + mid - count);
        nums[mid] < target ? start = mid + 1 : end = mid - 1;
    }
    return -1;
};

/**
 * Memo: Find minimum first, then we can figure out how many elements we have rotated. Use that offset we can treat it as a shorted array and perform a binary search using the offse to calculate the real mid
 * Ref: https://leetcode.com/discuss/11701/concise-o-log-n-binary-search-solution
 * Complex: O(logn)
 * Runtime: 140ms
 * Tests: 194 test cases passed
 * Rank: S
 * Updated: 2015-07-05
 */
var search = function(nums, target) {
    var length = nums.length;
    var start = 0;
    var end = length - 1;
    var mid = 0;
    while (start < end) {
        if (nums[start] < nums[end]) break; // already sorted
        mid = ~~((start + end) / 2);
        nums[start] > nums[mid] ? end = mid : start = mid + 1;
    }

    // now start will be the index of the minimum
    var offset = start;
    start = 0;
    end = length - 1;
    while (start <= end) {
        mid = ~~((start + end) / 2);
        var real_mid = (mid + offset) % length;
        if (nums[real_mid] === target) return real_mid;
        target < nums[real_mid] ? end = mid - 1 : start = mid + 1;
    }
    return -1;
};

var should = require('should');
console.time('Runtime');
search([1], 0).should.equal(-1);
search([2, 1], 1).should.equal(1);
search([4, 5, 6, 7, 0, 1, 2], 3).should.equal(-1);
search([4, 5, 6, 7, 0, 1, 2], 1).should.equal(5);
search([4, 5, 6, 7, 0, 1, 2], 4).should.equal(0);
console.timeEnd('Runtime');