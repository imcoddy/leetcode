/**
 * Source:  https://leetcode.com/problems/jump-game/
 * Tags:    [Array,Greedy]
 * Level:   Medium
 * Title:   Jump Game
 * Auther:  @imcoddy
 * Content: Given an array of non-negative integers, you are initially positioned at the first index of the array.
 *
 *
 * Each element in the array represents your maximum jump length at that position.
 *
 *
 * Determine if you are able to reach the last index.
 *
 *
 *
 * For example:
 * A = [2,3,1,1,4], return true.
 *
 *
 * A = [3,2,1,0,4], return false.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */

/**
 * Memo: If we can jump to last position, it means at some point we can reach from last-i if nums[last-i] >= i, as there are i steps from that to last. So we can make this to a smaller problem, until we confirm whether we can reach the 1st location.
 * Complex: O(n)
 * Runtime: 132ms
 * Tests: 71 test cases passed
 * Rank: A
 * Updated: 2015-06-04
 */
var canJump = function(nums) {
    var last = nums.length - 1;
    for (var i = nums.length - 2; i >= 0; i--) {
        if (i + nums[i] >= last) last = i;
    }
    return last === 0;
};

var should = require('should');
console.time('Runtime');
canJump([2, 3, 1, 1, 4]).should.equal(true);
canJump([3, 2, 1, 0, 4]).should.equal(false);

console.timeEnd('Runtime');
