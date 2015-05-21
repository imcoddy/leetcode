/**
 * Source:  https://leetcode.com/problems/3sum-closest/
 * Tags:    [Array,Two Pointers]
 * Level:   Medium
 * Title:   3Sum Closest
 * Auther:  @imcoddy
 * Content: Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. Return the sum of the three integers. You may assume that each input would have exactly one solution.
 *
 *
 *     For example, given array S = {-1 2 1 -4}, and target = 1.
 *
 *     The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/**
 * Memo: Just loop to search the best solution
 * Complex: O(n^3)
 * Runtime: 344ms
 * Tests: 120 test cases passed
 * Rank: D
 */
var threeSumClosest = function(nums, target) {
    function sortNumber(a, b) {
        return a - b;
    }

    nums = nums.sort(sortNumber);
    var result = [];
    var min = Number.MAX_VALUE;

    for (var i = 0; i < nums.length - 2; i++) {
        for (var j = i + 1; j < nums.length - 1; j++) {
            var val = 0 - (nums[i] + nums[j]);
            var k = nums.length - 1;
            while (k > j) {
                var diff = Math.abs(nums[i] + nums[j] + nums[k] - target);
                if (diff < min) {
                    min = diff;
                    result = [nums[i], nums[j], nums[k]];
                    if (min === 0) {
                        return result[0] + result[1] + result[2];
                    }
                }
                k--;
            }
        }
    }

    return result[0] + result[1] + result[2];
};

/**
 * Memo: Since there will be exactly 1 solution, loop i first then use two pointers to get best result.
 * Complex: O(n^2)
 * Runtime: 127ms
 * Tests: 120 test cases passed
 * Rank: S
 */
var threeSumClosest = function(nums, target) {
    function sortNumber(a, b) {
        return a - b;
    }

    nums = nums.sort(sortNumber);
    var result = nums[0] + nums[1] + nums[2];

    for (var i = 0; i < nums.length - 2; i++) {
        var j = i + 1;
        var k = nums.length - 1;
        while (j < k) {
            var sum = nums[i] + nums[j] + nums[k];
            if (sum === target) {
                return sum;
            }

            if (Math.abs(sum - target) < Math.abs(result - target)) {
                result = sum;
            }

            if (sum < target) {
                j++;
            } else {
                k--;
            }
        }
    }

    return result;
};

console.log(threeSumClosest([1, 1, 1, 0], 100));
console.log(threeSumClosest([1, 2, -2, -1], 1));
console.log(threeSumClosest([1, 2, -2, -1], 5));