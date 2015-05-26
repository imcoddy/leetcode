/**
 * Source:  https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
 * Tags:    [Array,Greedy]
 * Level:   Medium
 * Title:   Best Time to Buy and Sell Stock II
 * Auther:  @imcoddy
 * Content: Say you have an array for which the ith element is the price of a given stock on day i.
 *
 * Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times). However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
 */

/**
 * @param {number[]} prices
 * @return {number}
 */

/**
 * Memo:
 * Runtime: 141ms
 * Tests: 198 test cases passed
 * Rank: A
 */
var maxProfit = function(prices) {
    if (prices.length <= 1) {
        return 0;
    }
    var s = [0];
    for (var i = 1; i < prices.length; i++) {
        s[i] = s[i - 1] + Math.max(0, prices[i] - prices[i - 1]);
    }
    return s[prices.length - 1];
};


/**
 * Memo: Calculate diff and accept it when it is positive.
 * Complex: O(n)
 * Runtime: 128ms
 * Tests: 198 test cases passed
 * Rank: S
 */
var maxProfit = function(prices) {
    if (prices.length <= 1) {
        return 0;
    }

    var profit = 0;
    for (var i = 0; i < prices.length - 1; i++) {
        var diff = prices[i + 1] - prices[i];
        profit += (diff > 0 ? diff : 0);
    }
    return profit;
};

var should = require('should');
console.time('Runtime');
maxProfit([]).should.equal(0);
maxProfit([1]).should.equal(0);
maxProfit([1, 2, 3, 4, 5, 6]).should.equal(5);
maxProfit([6, 5, 4, 3, 2, 1]).should.equal(0);
maxProfit([1, 3, 1, 3, 1, 3]).should.equal(6);
maxProfit([1, 3, 1, 4, 1, 5]).should.equal(9);
maxProfit([2, 1, 2, 0, 1]).should.equal(2);
maxProfit([1, 3, 1, 4, 1, 2, 3, 4, 5]).should.equal(9);

console.timeEnd('Runtime');

console.log(maxProfit([3])); //0
console.log(maxProfit([2, 1, 2, 0, 1])); //2
console.log(maxProfit([1, 2, 3, 4, 5])); //4
console.log(maxProfit([5, 4, 3, 2, 1])); //0
console.log(maxProfit([1, 1, 1, 1, 1])); //0
console.log(maxProfit([1, 2, 1, 2, 1, 2, 1, 2])); //4