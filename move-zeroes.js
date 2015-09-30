/**
 * Source:  https://leetcode.com/problems/move-zeroes/
 * Tags:    [Array,Two Pointers]
 * Level:   Easy
 * Title:   Move Zeroes
 * Auther:  @imcoddy
 * Content: Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 *
 *
 *
 * For example, given nums  = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].
 *
 *
 *
 * Note:
 *
 * You must do this in-place without making a copy of the array.
 * Minimize the total number of operations.
 *
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
 *                      (E) Remove Element
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/**
 * Memo: Keep track of the indexes where 0 is
 * Complex: O(n)
 * Runtime: 140ms
 * Tests: 21 test cases passed
 * Rank: A
 * Updated: 2015-09-30
 */
var moveZeroes = function(nums) {
    var indexes = [];

    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            indexes.push(i);
        } else if (indexes.length) {
            var index = indexes.shift();
            nums[index] = nums[i];
            nums[i] = 0;
            indexes.push(i);
        }
    }
    return nums;
};


var should = require('should');
console.time('Runtime');
moveZeroes([0, 1, 0, 3, 12]).should.eql([1, 3, 12, 0, 0]);

console.timeEnd('Runtime');