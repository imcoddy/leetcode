/**
 * Source:  https://leetcode.com/problems/maximum-subarray/
 * Tags:    [Divide and Conquer,Array,Dynamic Programming]
 * Level:   Medium
 * Title:   Maximum Subarray
 * Auther:  @imcoddy
 * Content: Find the contiguous subarray within an array (containing at least one number) which has the largest sum.
 *
 *
 * For example, given the array [−2,1,−3,4,−1,2,1,−5,4],
 * the contiguous subarray [4,−1,2,1] has the largest sum = 6.
 *
 *
 * click to show more practice.
 *
 * More practice:
 *
 * If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * Memo: Dynamic Programming. Let s[i] = largest maximum-subarray till element i, than it comes from only two
 * 1, previous best result plus current number.
 * 2, abandon previous result and use only current number.
 * Runtime: 147ms
 * Tests: 201 test cases passed
 * Rank: A
 */
//TODO add divide and conquer solution
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

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
