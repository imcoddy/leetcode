/**
 * Source:  https://leetcode.com/problems/3sum/
 * Tags:    [Array,Two Pointers]
 * Level:   Medium
 * Title:   3Sum
 * Auther:  @imcoddy
 * Content: Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
 *
 * Note:
 *
 * Elements in a triplet (a,b,c) must be in non-descending order. (ie, a ≤ b ≤ c)
 * The solution set must not contain duplicate triplets.
 *
 *
 *
 *
 *     For example, given array S = {-1 0 1 2 -1 -4},
 *
 *     A solution set is:
 *     (-1, 0, 1)
 *     (-1, -1, 2)
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/**
 * Memo: A bit tricky that you need to use a hashmap to track duplicate set
 * Complex: O(n^2)
 * Runtime: 483ms
 * Tests: 311 test cases passed
 * Rank: D
 */
var threeSum = function(nums) {
    function sortNumber(a, b) {
        return a - b;
    }

    nums = nums.sort(sortNumber);
    var result = [];
    var pivot = 0;
    while (nums[pivot] < 0) {
        pivot++;
    }

    var map = {};
    for (var i = 0; i <= pivot; i++) {
        for (var j = i + 1; j < nums.length - 1; j++) {
            var val = 0 - (nums[i] + nums[j]);
            if (val >= nums[j] && nums.lastIndexOf(val) > j) {
                var a = [nums[i], nums[j], val];
                var k = a.join('_');
                if (!map[k]) {
                    result.push(a);
                    map[k] = true;
                }
            }
        }
    }

    return result;
};

/**
 * Memo: Sort nums first, then fix one element and use two pointer to narrow down. Skip duplicates.
 * Complex: O(n^2)
 * Runtime: 240ms
 * Tests: 311 test cases passed
 * Rank: B
 * Updated: 2015-06-24
 */
var threeSum = function(nums) {
    function sortNumber(a, b) {
        return a - b;
    }

    nums = nums.sort(sortNumber);
    var result = [];

    for (var i = 0; i < nums.length; i++) {
        var target = 0 - nums[i];
        var front = i + 1;
        var end = nums.length - 1;

        while (front < end) {
            var sum = nums[front] + nums[end];
            if (sum < target) {
                front++;
            } else if (sum > target) {
                end--;
            } else {
                var solution = [nums[i], nums[front], nums[end]];
                result.push(solution);
                while (front < i && nums[front] === solution[1]) front++;
                while (i < end && nums[end] === solution[2]) end--;
            }
            while (i + 1 < nums.length && nums[i + 1] === nums[i]) i++;
        }
    }
    return result;
};

console.log(threeSum([0, 0, 0]));
console.log(threeSum([-1, -1, -4]));
console.log(threeSum([1, 2, -2, -1]));
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([-1, 3, 1, 2, -2, -4]));
console.log(threeSum([-1, 0, 1, 2, -1, -4, -1, 2, 0]));