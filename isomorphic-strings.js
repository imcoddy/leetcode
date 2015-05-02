/**
 * Source:  https://leetcode.com/problems/isomorphic-strings/
 * Tags:    [Hash Table]
 * Level:   Easy
 * Title:   Isomorphic Strings
 * Auther:  @imcoddy
 * Content: Given two strings s and t, determine if they are isomorphic.
 *
 * Two strings are isomorphic if the characters in s can be replaced to get t.
 *
 * All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.
 *
 * For example,
 * Given "egg", "add", return true.
 *
 * Given "foo", "bar", return false.
 *
 * Given "paper", "title", return true.
 *
 * Note:
 * You may assume both s and t have the same length.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/**
 * Memo:
 * Runtime: 133ms
 * Rank: A
 */
var isIsomorphic = function(s, t) {
    var map_s = {};
    var map_t = {};
    var result = true;
    for (var i = 0; i < s.length; i++) {
        if (map_s[s[i]] || map_t[t[i]]) {
            if (map_s[s[i]] !== t[i] || map_t[t[i]] !== s[i]) {
                result = false;
                break;
            }
        } else {
            map_s[s[i]] = t[i];
            map_t[t[i]] = s[i];
        }
    }

    return result;
};

console.log(isIsomorphic('egg', 'add'));
console.log(isIsomorphic('foo', 'bar'));
console.log(isIsomorphic('paper', 'title'));
console.log(isIsomorphic('ab', 'ca'));
console.log(isIsomorphic('ab', 'aa'));
