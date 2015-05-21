/**
 * Source:  https://leetcode.com/problems/house-robber-ii/
 * Tags:    [Dynamic Programming]
 * Level:   Medium
 * Title:   House Robber II
 * Auther:  @imcoddy
 * Content: Note: This is an extension of House Robber.
 *
 * After robbing those houses on that street, the thief has found himself a new place for his thievery so that he will not get too much attention. This time, all houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, the security system for these houses remain the same as for those in the previous street.
 *
 * Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.
 *
 * Credits:Special thanks to @Freezen for adding this problem and creating all test cases.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * Memo: Since we have solve the previous problem, try to reduce this problem to previous one. Note that the first and last can not be robbed together, so the result should be the maximum between rob house a1 to an-1 and house a2 to an.
 * Complex: O(1)
 * Runtime: 132ms
 * Tests: 74 test cases passed
 * Rank: NA
 */
var rob = function(nums) {
    // preivous solution
    var robNoCircle = function(nums) {
        var last = nums[0];
        var now = Math.max(nums[0], nums[1]);
        for (var i = 2; i < nums.length; i++) {
            var tmp = now;
            now = Math.max(last + nums[i], now);
            last = tmp;
        }
        return now;
    };

    if (nums.length <= 1) return nums[0] ? nums[0] : 0;
    if (nums.length === 2) return Math.max(nums[0], nums[1]);
    return Math.max(robNoCircle(nums.slice(0, nums.length - 1)), robNoCircle(nums.slice(1, nums.length)));
};

var should = require('should');
console.time('Runtime');
rob([]).should.equal(0);
rob([3]).should.equal(3);
rob([30, 10]).should.equal(30);
rob([1, 2, 3, 4, 5]).should.equal(8);
rob([1, 2, 3, 10, 5]).should.equal(12);

console.timeEnd('Runtime');