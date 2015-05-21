/**
 * Source:  https://leetcode.com/problems/decode-ways/
 * Tags:    [Dynamic Programming,String]
 * Level:   Medium
 * Title:   Decode Ways
 * Auther:  @imcoddy
 * Content: A message containing letters from A-Z is being encoded to numbers using the following mapping:
 *
 *
 *
 * 'A' -> 1
 * 'B' -> 2
 * ...
 * 'Z' -> 26
 *
 *
 *
 * Given an encoded message containing digits, determine the total number of ways to decode it.
 *
 *
 *
 * For example,
 * Given encoded message "12",
 * it could be decoded as "AB" (1 2) or "L" (12).
 *
 *
 *
 * The number of ways decoding "12" is 2.
 */

/**
 * @param {string} s
 * @return {number}
 */

/**
 * Memo: The 0 is pretty tricky, need to check if it is valid or not, eg 10, 20 are valid, while 30, 01 are not.
 * Complex: O()
 * Runtime: 136ms
 * Tests: 256 test cases passed
 * Rank: A
 */
var numDecodings = function(s) {
    if (!s || s.length === 0 || s[0] === '0') {
        return 0;
    }
    var map = {};
    for (var i = 1; i <= 26; i++) {
        map[i] = true;
    }

    var a = [];
    a[0] = map[s[0]] ? 1 : 0;
    a[1] = (map[s[1]] ? 1 : 0) + (map[s[0] + s[1]] ? 1 : 0);
    for (var i = 2; i < s.length; i++) {
        var twoDigits = s[i - 1] + s[i];
        if (s[i] === 0 && !map[twoDigits]) {
            return 0;
        }
        a[i] = (map[s[i]] ? a[i - 1] : 0) + (map[twoDigits] ? a[i - 2] : 0);
    }
    return a[s.length - 1];
};

var should = require('should');
console.time('Runtime');
numDecodings('').should.equal(0);
numDecodings('0').should.equal(0);
numDecodings('1').should.equal(1);
numDecodings('10').should.equal(1);
numDecodings('01').should.equal(0);
numDecodings('12').should.equal(2);
numDecodings('123').should.equal(3);
numDecodings('1234').should.equal(3);
numDecodings('12345678').should.equal(3);
numDecodings('0123').should.equal(0);
numDecodings('120').should.equal(1);
numDecodings('240').should.equal(0);

console.timeEnd('Runtime');