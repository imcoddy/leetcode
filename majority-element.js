/*Majority Element Total Accepted: 33929 Total Submissions: 98232 My Submissions Question Solution 
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Credits:
Special thanks to @ts for adding this problem and creating all test cases.

Hide Tags Divide and Conquer Array Bit Manipulation
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
