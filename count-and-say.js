/**
 * Source:  https://leetcode.com/problems/count-and-say/
 * Tags:    [String]
 * Level:   Easy
 * Title:   Count and Say
 * Auther:  @imcoddy
 * Content: The count-and-say sequence is the sequence of integers beginning as follows:
 * 1, 11, 21, 1211, 111221, ...
 *
 *
 *
 * 1 is read off as "one 1" or 11.
 * 11 is read off as "two 1s" or 21.
 * 21 is read off as "one 2, then one 1" or 1211.
 *
 *
 *
 * Given an integer n, generate the nth sequence.
 *
 *
 *
 * Note: The sequence of integers will be represented as a string.
 */

/**
 * @param {number} n
 * @return {string}
 */

/**
 * Rumtime: 123ms
 * Rank: Top
 */
var countAndSay = function(n) {
    var result = '1';
    while (n > 1) {
        n--;
        result = sayNext(result);
    }
    return result;
};
var sayNext = function(num) {
    var result = '';
    var str = '' + num;
    var index = 0;
    while (index < str.length) {
        var digit = str[index];
        var count = 1;
        while (count + index < str.length && str[index + count] === digit) {
            count++;
        }
        result = result + count + digit;
        index = index + count;
    }
    return result;
};

console.log(countAndSay(1)); //1
console.log(countAndSay(2)); //21
console.log(countAndSay(3)); //21
console.log(countAndSay(4)); //1211
console.log(countAndSay(5)); //111221
console.log(countAndSay(6)); //312211
