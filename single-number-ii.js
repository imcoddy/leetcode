/**
 * Source:  https://leetcode.com/problems/single-number-ii/
 * Tags:    [Bit Manipulation]
 * Level:   Medium
 * Title:   Single Number II
 * Auther:  @imcoddy
 * Content: Given an array of integers, every element appears three times except for one. Find that single one.
 *
 *
 *
 * Note:
 * Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * Memo: Same as  https://leetcode.com/problems/single-number using hashmap
 * Complex: O(n)
 * Runtime: 128ms
 * Tests: 11 test cases passed
 * Rank: A
 * Updated: 2015-06-12
 */
var singleNumber = function(nums) {
    var map = Object.create(null);

    for (var i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            map[nums[i]]++;
        } else {
            map[nums[i]] = 1;
        }
    }

    for (var m in map) {
        if (map[m] === 1) {
            return parseInt(m);
        }
    }
};

//TODO add Bit Manipulation solution