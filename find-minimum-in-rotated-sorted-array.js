/**
 * Source:  https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 * Tags:    [Array,Binary Search]
 * Level:   Medium
 * Title:   Find Minimum in Rotated Sorted Array
 * Auther:  @imcoddy
 * Content: Suppose a sorted array is rotated at some pivot unknown to you beforehand.
 *
 * (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
 *
 * Find the minimum element.
 *
 * You may assume no duplicate exists in the array.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

//TODO try to do this using BS
/**
 * Memo: mark first element as minimum and keep finding in one single loop till the turning point found.
 * Complexity: O(n)
 * Runtime: 140ms
 * Tests: 146 test cases passed
 * Rank: B
 */
var findMin = function(nums) {
  var min = nums[0];
  var i = 1;
  while (i <= nums.length) {
    if (nums[i] < min) return nums[i];
    i++;
  }
  return min;
};

var findMin = function(nums) {
  var min = 0;
  var i = 0;
  while (++i < nums.length)
    if (nums[i] < nums[min]) return nums[i];
  return nums[min];
};

/**
 * Memo: If the array is in asc order, then when nums[start] < nums[end], the array is already sorted; when nums[start] > nums[end], the result will be in the middle. In this case, when nums[start] > nums[mid], the result will be in the left half (where nums[mid] could be the one as well), otherwise let start = mid + 1 as nums[mid] is bigger than nums[start] so the result cannot be mid.
 * Complex: O(logn)
 * Runtime: 156ms
 * Tests: 146 test cases passed
 * Rank: S
 * Updated: 2015-07-05
 */
var findMin = function(nums) {
  var start = 0;
  var end = nums.length - 1;
  while (start < end) {
    if (nums[start] < nums[end]) return nums[start]; // already sorted

    // the turning point will be between start and end
    var mid = ~~((start + end) / 2);
    nums[start] > nums[mid] ? end = mid : start = mid + 1;
  }
  return nums[start];
};

var should = require('should');
console.time('Runtime');
findMin([2, 1]).should.equal(1);
findMin([0, 1, 2, 3, 4, 5, 6, 7]).should.equal(0);
findMin([5, 6, 7, 8, 0, 1, 2, 3, 4]).should.equal(0);
findMin([0, 1, 2, 3, 4, 5, 6, 7]).should.equal(0);
findMin([1, 2, 3, 4, 5, 6, 7, 0]).should.equal(0);
findMin([4, 5, 6, 7, 0, 1, 2, 3]).should.equal(0);
console.timeEnd('Runtime');