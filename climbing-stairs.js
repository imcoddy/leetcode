/**
 * Source:  https://leetcode.com/problems/climbing-stairs/
 * Tags:    [Dynamic Programming]
 * Level:   Easy
 * Title:   Climbing Stairs
 * Auther:  @imcoddy
 * Content: You are climbing a stair case. It takes n steps to reach to the top.
 *
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 */

/**
 * @param {number} n
 * @return {number}
 */

/**
 * Memo: for s[i], it can come from s[i-1] with one step or s[i-2] with two steps.
 * Runtime: 131ms
 * Tests: 45 test cases passed
 * Rank: A
 */
var climbStairs = function(n) {
    var s = [0, 1, 2];
    if (n <= 2) {
        return s[n];
    }

    for (var i = 3; i <= n; i++) {
        s[i] = s[i - 1] + s[i - 2];
    }
    return s[n];
};

console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(5));