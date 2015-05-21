/**
 * Source:  https://leetcode.com/problems/house-robber/
 * Tags:    [Dynamic Programming]
 * Level:   Easy
 * Title:   House Robber
 * Auther:  @imcoddy
 * Content: You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
 *
 * Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.
 *
 * Credits:Special thanks to @ifanchu for adding this problem and creating all test cases. Also thanks to @ts for adding additional test cases.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * Explanation:
 * S[i] = Max(S[i-2]+nums[i], S[i-1])
 * Runtime: 127ms
 * Rank: S
 */
var rob = function(nums) {
    if (nums.length < 2) {
        if (nums.length === 1) {
            return nums[0];
        } else {
            return 0;
        }
    }

    var s = [];
    for (var i = 0; i < nums.length; i++) {
        s.push(0);
    }
    s[0] = nums[0];
    s[1] = Math.max(nums[0], nums[1]);
    for (var i = 2; i < s.length; i++) {
        s[i] = Math.max(s[i - 2] + nums[i], s[i - 1]);
    }
    return s[s.length - 1];
};

/**
 * Memo: s[i] = Max(s[i-2]+nums[i], s[i-1])
 * Complex: O(n)
 * Runtime: 120ms
 * Tests: 69 test cases passed
 * Rank: A
 */
var rob = function(nums) {
    if (nums.length <= 1) return nums[0] ? nums[0] : 0;

    var s = [nums[0], Math.max(nums[0], nums[1])];
    for (var i = 2; i < nums.length; i++) {
        s[i] = Math.max(s[i - 2] + nums[i], s[i - 1]);
    }
    return s.pop();
};

var should = require('should');
console.time('Runtime');
rob([]).should.equal(0);
rob([3]).should.equal(3);
rob([30, 10]).should.equal(30);
rob([1, 2, 3, 4, 5]).should.equal(9);
rob([1, 2, 3, 10, 5]).should.equal(12);

console.timeEnd('Runtime');