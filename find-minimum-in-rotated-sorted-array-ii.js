/**
 * Source:  https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/
 * Tags:    [Array,Binary Search]
 * Level:   Hard
 * Title:   Find Minimum in Rotated Sorted Array II
 * Auther:  @imcoddy
 * Content: Follow up for "Find Minimum in Rotated Sorted Array":
 * What if duplicates are allowed?
 *
 * Would this affect the run-time complexity? How and why?
 *
 *
 * Suppose a sorted array is rotated at some pivot unknown to you beforehand.
 *
 * (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
 *
 * Find the minimum element.
 *
 * The array may contain duplicates.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * Memo: Same as the solution before
 * Complex: O(n)
 * Runtime: 152ms
 * Tests: 188 test cases passed
 * Rank: A
 * Updated: 2015-07-05
 */
var findMin = function(nums) {
  var min = 0;
  var i = 0;
  while (++i < nums.length)
    if (nums[i] < nums[min]) return nums[i];
  return nums[min];
};

// TODO add BS solution

var should = require('should');
console.time('Runtime');
findMin([2, 1]).should.equal(1);
findMin([1, 1]).should.equal(1);
findMin([2, 1, 2]).should.equal(1);
findMin([10, 1, 10, 10, 10]).should.equal(1);
findMin([0, 1, 2, 3, 4, 5, 6, 7]).should.equal(0);
findMin([5, 6, 7, 8, 0, 1, 2, 3, 4]).should.equal(0);
findMin([0, 1, 2, 3, 4, 5, 6, 7]).should.equal(0);
findMin([1, 2, 3, 4, 5, 6, 7, 0]).should.equal(0);
findMin([4, 5, 6, 7, 0, 1, 2, 3]).should.equal(0);
findMin([4, 5, 6, 7, 0, 0, 0, 0, 0, 0, 0]).should.equal(0);
console.timeEnd('Runtime');