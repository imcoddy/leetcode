/**
 * Source:  https://leetcode.com/problems/two-sum/
 * Tags:    [Array,Hash Table]
 * Level:   Medium
 * Updated: 2015-04-24
 * Title:   Two Sum
 * Auther:  @imcoddy
 * Content: Given an array of integers, find two numbers such that they add up to a specific target number.
 *
 * The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.
 *
 * You may assume that each input would have exactly one solution.
 *
 *
 * Input: numbers={2, 7, 11, 15}, target=9
 * Output: index1=1, index2=2
 */

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]} two integers in an array, ie: [index1, index2]
 */
var twoSum = function(numbers, target) {
    var map = {};
    var result = [0, 0];
    for (var i = 0; i < numbers.length; i++) {
        var number = numbers[i];
        if (!map[number]) {
            map[target - number] = i + 1;
        } else {
            result[0] = map[number];
            result[1] = i + 1;
        }
    }
    return result;
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 7, 11, 15], 13));
console.log(twoSum([2, 7, 11, 15], 22));
