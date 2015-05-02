/**
 * Source:  https://leetcode.com/problems/search-insert-position/
 * Tags:    [Array,Binary Search]
 * Level:   Medium
 * Title:   Search Insert Position
 * Auther:  @imcoddy
 * Content: Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
 *
 * You may assume no duplicates in the array.
 *
 *
 * Here are few examples.
 * [1,3,5,6], 5 → 2
 * [1,3,5,6], 2 → 1
 * [1,3,5,6], 7 → 4
 * [1,3,5,6], 0 → 0
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/**
 * Memo:
 * Runtime: 130ms
 * Tests: 62 test cases passed
 * Rank: S
 */
var searchInsert = function(nums, target) {
    var start = 0;
    var end = nums.length - 1;
    var mid = 0;
    while (start <= end) {
        mid = ~~((start + end) / 2);
        if (nums[mid] === target) return mid;
        nums[mid] < target ? start = mid + 1 : end = mid - 1;
    }
    return nums[mid] < target ? mid + 1 : mid;
};

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
console.log(searchInsert([1, 3, 5, 6], 0));