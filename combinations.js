/**
 * Source:  https://leetcode.com/problems/combinations/
 * Tags:    [Backtracking]
 * Level:   Medium
 * Title:   Combinations
 * Auther:  @imcoddy
 * Content: Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.
 *
 *
 * For example,
 * If n = 4 and k = 2, a solution is:
 *
 *
 *
 * [
 *   [2,4],
 *   [3,4],
 *   [2,3],
 *   [1,2],
 *   [1,3],
 *   [1,4],
 * ]
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

/**
 * Memo: A bit tricky that solution can not be pushed into result directly, as it will be changed when further backtracking.
 * Runtime: 158ms
 * Tests: 26 test cases passed
 * Rank: S
 */
var combine = function(n, k) {
    var result = [];
    var solution = [];

    function combineBT(row) {
        if (row >= k) {
            result.push(solution.slice(0, k));
        } else {
            for (var i = 1; i <= n; i++) {
                solution[row] = i;
                if (isValid(row, i)) {
                    combineBT(row + 1);
                }
            }
        }
    }

    function isValid(row, value) {
        for (var i = 0; i < row; i++) {
            if (solution[i] >= value) {
                return false;
            }
        }
        return true;
    }

    combineBT(0);
    return result;
};
console.log(combine(4, 2));
