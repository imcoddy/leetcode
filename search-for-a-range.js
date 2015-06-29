/**
 * Source:  https://leetcode.com/problems/search-for-a-range/
 * Tags:    [Array,Binary Search]
 * Level:   Medium
 * Title:   Search for a Range
 * Auther:  @imcoddy
 * Content: Given a sorted array of integers, find the starting and ending position of a given target value.
 *
 * Your algorithm's runtime complexity must be in the order of O(log n).
 *
 * If the target is not found in the array, return [-1, -1].
 *
 *
 * For example,
 * Given [5, 7, 7, 8, 8, 10] and target value 8,
 * return [3, 4].
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/**
 * Memo: locate the target first, if it is not in the array then return [-1,-1] directly, otherwise search if same element exists or not and widen range.
 * Runtime: 144ms
 * Tests: 81 test cases passed
 * Rank: A
 */
var searchRange = function(nums, target) {
    function BS(nums, target) {
        var start = 0;
        var end = nums.length - 1;
        var mid = 0;
        while (start <= end) {
            mid = ~~((start + end) / 2);
            if (nums[mid] === target) return mid;
            nums[mid] < target ? start = mid + 1 : end = mid - 1;
        }
        return start;
    }

    var index = BS(nums, target);
    if (nums[index] !== target) {
        return [-1, -1];
    }

    var result = [index, index];
    while (result[0] > 0 && nums[result[0] - 1] === target) {
        result[0]--;
    }
    while (result[1] + 1 < nums.length && nums[result[1] + 1] === target) {
        result[1]++;
    }
    return result;
};

/**
 * Memo: Binary search to see if the target is in array nums, and expand with the index if it exists.
 * Complex: O(n)
 * Runtime: 136ms
 * Tests: 81 test cases passed
 * Rank: A
 * Updated: 2015-06-28
 */
var searchRange = function(nums, target) {
    function bs(left, right, target) {
        var start = left;
        var end = right;
        while (start <= end) {
            var mid = ~~((start + end) / 2);
            if (nums[mid] === target) return mid;
            nums[mid] > target ? end = mid - 1 : start = mid + 1;
        }
        return start;
    }
    var index = bs(0, nums.length - 1, target);

    if (nums[index] !== target) return [-1, -1];
    var result = [index, index];
    while (result[0] > 0 && nums[result[0] - 1] === target) result[0]--;
    while (result[1] + 1 < nums.length && nums[result[1] + 1] === target) result[1]++;
    return result;
};

/**
 * Memo: Use two binary search to find left and right boundaries.
 * Ref: https://leetcode.com/discuss/18242/clean-iterative-solution-binary-searches-with-explanation
 * Complex: O(logn)
 * Runtime: 130ms
 * Tests: 81 test cases passed
 * Rank: S
 * Updated: 2015-06-28
 */
var searchRange = function(nums, target) {
    var result = [-1, -1];
    var i = 0;
    var j = nums.length - 1;
    // found left boundary of the range.
    while (i < j) {
        var mid = ~~((i + j) / 2);
        nums[mid] < target ? i = mid + 1 : j = mid;
    }
    if (nums[i] !== target) return result;
    result[0] = i;

    // reset and find right boundary.
    j = nums.length - 1;
    while (i < j) {
        var mid = ~~((i + j + 1) / 2);
        nums[mid] <= target ? i = mid : j = mid - 1;
    }
    result[1] = j;
    return result;
};

/**
 * Memo: Shorter version of the above
 * Complex: O(logn)
 * Runtime: 150ms
 * Tests: 81 test cases passed
 * Rank: A
 * Updated: 2015-06-28
 */
var searchRange = function(nums, target) {
    var i = 0; // left boundary
    var j = nums.length - 1; // right boundary
    var mid = 0;
    // found left boundary of the range.
    while (i < j) nums[mid = ~~((i + j) / 2)] < target ? i = mid + 1 : j = mid;
    if (nums[i] !== target) return [-1, -1];
    // reset and find right boundary.
    var left = i;
    j = nums.length - 1;
    while (i < j) nums[mid = ~~((i + j + 1) / 2)] <= target ? i = mid : j = mid - 1;
    return [left, j];
};

var should = require('should');
console.time('Runtime');

searchRange([1, 3, 5, 6], 5).should.eql([2, 2]);
searchRange([1, 3, 5, 6], 1).should.eql([0, 0]);
searchRange([1, 3, 5, 6], 6).should.eql([3, 3]);
searchRange([1, 3, 5, 6], 0).should.eql([-1, -1]);
searchRange([1, 3, 5, 6], 8).should.eql([-1, -1]);
searchRange([1, 1, 1, 1, 1, 3, 5, 6], 1).should.eql([0, 4]);
searchRange([1, 3, 5, 6, 6, 6, 6, 6], 6).should.eql([3, 7]);
searchRange([1, 3, 5, 5, 5, 5, 5, 6, 7], 5).should.eql([2, 6]);
searchRange([0, 0, 1, 1, 1, 4, 5, 5], 2).should.eql([-1, -1]);

console.timeEnd('Runtime');