/**
 * Source:  https://leetcode.com/problems/container-with-most-water/
 * Tags:    [Array,Two Pointers]
 * Level:   Medium
 * Title:   Container With Most Water
 * Auther:  @imcoddy
 * Content: Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.
 *
 * Note: You may not slant the container.
 */

/**
 * @param {number[]} height
 * @return {number}
 */
/**
 * Memo: Use two pointers to narrow from start to end, use max to record current maximum
 * Complex: O(n)
 * Runtime: 140ms
 * Tests: 45 test cases passed
 * Rank: A
 * Updated: 2015-06-22
 */
var maxArea = function(height) {
    var a = 0;
    var b = height.length - 1;
    var max = 0;
    while (a < b) {
        max = Math.max(max,
            Math.min(height[a], height[b]) * (b - a));
        var tmp = height[a] > height[b] ? b-- : a++;
    }
    return max;
};

var should = require('should');
console.time('Runtime');
maxArea([1, 3, 5, 7, 9]).should.equal(10);
maxArea([3, 3, 9, 7, 9]).should.equal(18);

console.timeEnd('Runtime');