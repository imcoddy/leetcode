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

var search = function(nums, target) {
    var start = 0;
    var end = nums.length - 1;
    var mid = (start + end) >> 1;

    while (start < end) {
        mid = (start + end) >> 1;
        if (nums[mid] === target) return mid;
        if (nums[start] < nums[mid]) {
            target >= nums[start] && target < nums[mid] ? end = mid - 1 : start = mid + 1;
        } else {
            target <= nums[end] && target > nums[mid] ? start = mid + 1 : end = mid - 1;
        }
    }
    return nums[start] === target ? start : -1;
};

var should = require('should');
console.time('Runtime');
search([1], 0).should.equal(-1);
search([4, 5, 6, 7, 0, 1, 2], 3).should.equal(-1);
search([4, 5, 6, 7, 0, 1, 2], 1).should.equal(5);
search([4, 5, 6, 7, 0, 1, 2], 4).should.equal(0);

console.timeEnd('Runtime');