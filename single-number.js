/**
 * Source:  https://leetcode.com/problems/single-number/
 * Tags:    [Hash Table,Bit Manipulation]
 * Level:   Medium
 * Updated: 2015-04-24
 * Title:   Single Number
 * Auther:  @imcoddy
 * Content: Given an array of integers, every element appears twice except for one. Find that single one.
 *
 *
 * Note:
 * Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 */

/**
 * @param {number[]} A
 * @return {number}
 */
var singleNumber = function(A) {
    var result = 0;
    for(var i=0; i<A.length; i++) result ^= A[i];
    return result;
};
