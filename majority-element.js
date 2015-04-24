/**
 * Source:  https://leetcode.com/problems/majority-element/
 * Tags:    [Divide and Conquer,Array,Bit Manipulation]
 * Level:   Easy
 * Updated: 2015-04-24
 * Title:   Majority Element
 * Auther:  @imcoddy
 * Content: Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
 *
 * You may assume that the array is non-empty and the majority element always exist in the array.
 *
 * Credits:Special thanks to @ts for adding this problem and creating all test cases.
 */

/**
 * @param {number[]} num
 * @return {number}
 */
var majorityElement = function(num) {
    var map = {};
    for (var i=0; i < num.length; i++) {
        if (map[num[i]]) {
            map[num[i]] +=1;
            if (map[num[i]] >= (num.length/2)) {
                return parseInt(num[i], 10);
            }
        }else{
            map[num[i]] = 1;
        }
    }

    var result = 0;
    var max = 0;
    for (var k in map) {
        if (map[k] > max) {
            result = k;
            max = map[k];
        }
    }
    console.log(parseInt(result, 10), max);
    return parseInt(result, 10);
};

//majorityElement([1,8,3,3,3,5]); // 3
