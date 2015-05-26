/**
 * Source:  https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * Tags:    [Array,Dynamic Programming]
 * Level:   Medium
 * Title:   Best Time to Buy and Sell Stock
 * Auther:  @imcoddy
 * Content: Say you have an array for which the ith element is the price of a given stock on day i.
 *
 * If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.
 */

/**
 * @param {number[]} prices
 * @return {number}
 */

/**
 * Memo: Create an array of prices differences, then turn this problem into maximum subarray. https://leetcode.com/problems/maximum-subarray/
 * Complex: O(n)
 * Runtime: 148ms
 * Tests: 198 test cases passed
 * Rank: B
 */
var maxProfit = function(prices) {
    if (prices.length <= 1) {
        return 0;
    }

    var maxSubArray = function(nums) {
        var s = [nums[0]];
        var max = s[0];
        for (var i = 1; i < nums.length; i++) {
            s[i] = Math.max(s[i - 1] + nums[i], nums[i]);
            if (s[i] > max) {
                max = s[i];
            }
        }
        return max;
    };

    var diff = [];
    for (var i = 0; i < prices.length - 1; i++) {
        diff[i] = prices[i + 1] - prices[i];
    }
    var profit = maxSubArray(diff);
    return profit > 0 ? profit : 0;

    // var profit = 0;
    // for (var i = 0; i < prices.length - 1; i++) {
    //     var diff = prices[i + 1] - prices[i];
    //     profit += (diff > 0 ? diff : 0);
    // }
    // return profit;
};

var should = require('should');
console.time('Runtime');
maxProfit([]).should.equal(0);
maxProfit([1]).should.equal(0);
maxProfit([1, 2, 3, 4, 5, 6]).should.equal(5);
maxProfit([6, 5, 4, 3, 2, 1]).should.equal(0);
maxProfit([1, 3, 1, 3, 1, 3]).should.equal(2);
maxProfit([1, 3, 1, 4, 1, 5]).should.equal(4);
maxProfit([2, 1, 2, 0, 1]).should.equal(1);
maxProfit([1, 3, 1, 4, 1, 2, 3, 4, 5]).should.equal(4);

console.timeEnd('Runtime');