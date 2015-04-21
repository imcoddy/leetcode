/**
Single Number

Given an array of integers, every element appears twice except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Tags: HashTable BitManipulation
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
