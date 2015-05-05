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

console.log(maxProfit([3])); //0
console.log(maxProfit([2, 1, 2, 0, 1])); //1
console.log(maxProfit([1, 2, 3, 4, 5])); //4
console.log(maxProfit([5, 4, 3, 2, 1])); //0
console.log(maxProfit([1, 1, 1, 1, 1])); //0
console.log(maxProfit([1, 2, 1, 2, 1, 2, 1, 2])); //4