/**
 * Source:  https://leetcode.com/problems/contains-duplicate/
 * Tags:    [Array,Hash Table]
 * Level:   Easy
 * Title:   Contains Duplicate
 * Auther:  @imcoddy
 * Content: Given an array of integers, find if the array contains any duplicates. Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */

/**
 * Memo: use a map to check if the element exists or not
 * Complex: O(n)
 * Runtime: 132ms
 * Tests: 16 test cases passed
 * Rank: A
 */
var containsDuplicate = function(nums) {
    var map = Object.create(null);
    for (var i = 0; i < nums.length; i++) {
        if (map[nums[i]]) return true;
        map[nums[i]] = true;
    }
    return false;
};


/**
 * Memo: easiest but worst solution probably.
 * Complex: O(n^2)
 * Runtime: 1384ms
 * Tests: 16 test cases passed
 * Rank: D
 */
var containsDuplicate = function(nums) {
    for (var i = 0; i < nums.length - 1; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
};

/**
 * Memo: Sort array first and find element which is duplicate to its next.
 * Complex: O(nlgn)
 * Runtime: 160ms
 * Tests: 16 test cases passed
 * Rank: NA
 */
var containsDuplicate = function(nums) {
    if (nums.length <= 1) {
        return false;
    }
    var a = nums.sort();
    for (var i = 0; i < a.length - 1; i++) {
        if (a[i] === a[i + 1]) {
            return true;
        }
    }
    return false;
};

var should = require('should');
console.time('Runtime');
containsDuplicate([3, 5, 1, 9, 7]).should.equal(false);
containsDuplicate([1, 3, 5, 7, 9]).should.equal(false);
containsDuplicate([1, 3, 5, 7, 1]).should.equal(true);

console.timeEnd('Runtime');
