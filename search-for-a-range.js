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
        return mid;
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


console.log(searchRange([1, 3, 5, 6], 5));
console.log(searchRange([1, 3, 5, 6], 1));
console.log(searchRange([1, 3, 5, 6], 6));
console.log(searchRange([1, 3, 5, 6], 0));
console.log(searchRange([1, 3, 5, 6], 8));
console.log(searchRange([1, 1, 1, 1, 1, 3, 5, 6], 1));
console.log(searchRange([1, 3, 5, 6, 6, 6, 6, 6], 6));
console.log(searchRange([1, 3, 5, 5, 5, 5, 5, 6, 7], 5));
console.log(searchRange([0, 0, 1, 1, 1, 4, 5, 5], 2));