/**
 * Source:  https://leetcode.com/problems/zigzag-conversion/
 * Tags:    [String]
 * Level:   Easy
 * Title:   ZigZag Conversion
 * Auther:  @imcoddy
 * Content: The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
 *
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 *
 *
 * And then read line by line: "PAHNAPLSIIGYIR"
 *
 *
 * Write the code that will take a string and make this conversion given a number of rows:
 *
 * string convert(string text, int nRows);
 *
 * convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

/**
 * Memo: Put each charactar to correct level when traverse in zigzag pattern. A bit tricky to calculate the currect level index though.
 * Runtime: 193ms
 * Tests: 1158 test cases passed
 * Rank: A
 */
var convert = function(s, numRows) {
    if (numRows === 1) {
        return s;
    }

    var levels = [];

    for (var i = 0; i < numRows; i++) {
        levels[i] = '';
    }

    for (var i = 0; i < s.length; i++) {
        var index = i % (2 * numRows - 2);
        index = index < numRows - 1 ? index : 2 * (numRows - 1) - index;
        levels[index] = levels[index] + s[i];
    }
    return levels.join('');
};

console.log(convert('PAYPALISHIRING', 3));