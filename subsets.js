/**
 * Source:  https://leetcode.com/problems/subsets/
 * Tags:    [Array,Backtracking,Bit Manipulation]
 * Level:   Medium
 * Title:   Subsets
 * Auther:  @imcoddy
 * Content: Given a set of distinct integers, nums, return all possible subsets.
 *
 * Note:
 *
 * Elements in a subset must be in non-descending order.
 * The solution set must not contain duplicate subsets.
 *
 *
 *
 * For example,
 * If nums = [1,2,3], a solution is:
 *
 *
 *
 * [
 *   [3],
 *   [1],
 *   [2],
 *   [1,2,3],
 *   [1,3],
 *   [2,3],
 *   [1,2],
 *   []
 * ]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/**
 * Memo:
 * Runtime: 134ms
 * Tests: 10 test cases passed
 * Rank: S
 */
var subsets = function(nums) {
    var length = nums.length;
    if (length <= 0) {
        return [
            []
        ];
    }

    var result = [];
    var solution = [];

    function subsetsBT(row) {
        if (row >= length) {
            return;
        } else {
            for (var i = 0; i < nums.length; i++) {
                solution[row] = nums[i];
                if (isValid(row)) {
                    result.push(solution.slice(0, row + 1));
                    subsetsBT(row + 1);
                }
            }
        }
    }

    function isValid(row) {
        return row >= 1 ? solution[row] > solution[row - 1] : true;
    }

    subsetsBT(0);
    result.push([]);
    return result;
};

console.log(subsets([]));
console.log(subsets([1]));
console.log(subsets([1, 2, 3]));
