/**
 * Source:  https://leetcode.com/problems/longest-common-prefix/
 * Tags:    [String]
 * Level:   Easy
 * Title:   Longest Common Prefix
 * Auther:  @imcoddy
 * Content: Write a function to find the longest common prefix string amongst an array of strings.
 */

/**
 * @param {string[]} strs
 * @return {string}
 */

/**
 * Memo: Since it is the longest common prefix, so the result should be "" or it exists in every string. Use the first string as base and search each char to see if they are the same or not.
 * Runtime: 141ms
 * Tests: 117 test cases passed
 * Rank: A
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
    if (strs.length === 1) return strs[0];

    for (var i = 0; i < strs[0].length; i++) {
        for (var j = 1; j < strs.length; j++) {
            if (strs[j].length <= i || strs[j][i] !== strs[0][i]) {
                return strs[0].substring(0, i);
            }
        }
    }
    return strs[0];
};

console.log(longestCommonPrefix(['this is a test', 'this is also a test']));
console.log(longestCommonPrefix(['this is a test', 'this is a test as well']));
