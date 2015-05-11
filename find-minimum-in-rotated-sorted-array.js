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
 * Runtime: 159ms
 * Tests: 146 test cases passed
 * Rank: S
 */
var findMin = function(nums) {
    if (nums.length <= 1) return nums[nums.length];

    var min = nums[0];
    var i = 1;
    while (i <= nums.length) {
        if (nums[i] < min) return nums[i];
        i++;
    }
    return min;
};

console.log(findMin([4, 5, 6, 7, 0, 1, 2, 3]));
