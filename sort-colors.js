/**
 * Source:  https://leetcode.com/problems/sort-colors/
 * Tags:    [Array,Two Pointers,Sort]
 * Level:   Medium
 * Title:   Sort Colors
 * Auther:  @imcoddy
 * Content: Given an array with n objects colored red, white or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white and blue.
 *
 *
 *
 * Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.
 *
 *
 *
 * Note:
 * You are not suppose to use the library's sort function for this problem.
 *
 *
 * click to show follow up.
 *
 *
 * Follow up:
 * A rather straight forward solution is a two-pass algorithm using counting sort.
 * First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.
 * Could you come up with an one-pass algorithm using only constant space?
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

 /**
  * Memo: record how many 0, 1 and 2, then replace the whole array with that result.
  * Runtime: 122ms
  * Tests: 86 test cases passed
  * Rank: S
  */
var sortColors = function(nums) {
    var result = [0,0,0];
    for (var i = 0; i < nums.length; i++) {
        result[nums[i]]++;
    }
    for (var i = 0; i < result[0]; i++) {
        nums[i] = 0;
    }
    for (var i = 0; i < result[1]; i++) {
        nums[i+result[0]] = 1;
    }
    for (var i = 0; i < result[2]; i++) {
        nums[i+result[0]+result[1]] = 2;
    }
};

var nums = [0,1,2,0,1,2];
sortColors(nums);
console.log(nums);
