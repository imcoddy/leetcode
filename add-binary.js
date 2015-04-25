/**
 * Source:  https://leetcode.com/problems/add-binary/
 * Tags:    [Math,String]
 * Level:   Easy
 * Title:   Add Binary
 * Auther:  @imcoddy
 * Content: Given two binary strings, return their sum (also a binary string).
 *
 *
 *
 * For example,
 * a = "11"
 * b = "1"
 * Return "100".
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 *
 */

var addBinary = function(a, b) {
    var length = Math.max(a.length, b.length);
    var result = '';
    var up = 0;

    for (var i = 0; i < length; i++) {
        var d1 = a[a.length - i - 1] ? a[a.length - i - 1] : '0';
        var d2 = b[b.length - i - 1] ? b[b.length - i - 1] : '0';
        var value = parseInt(d1,10) + parseInt(d2, 10) + up;
        result = '' + (value%2) + result;
        up = value > 1 ? 1 : 0;
    }
    if (up) {
        result = '1' + result;
    }
    return result;
};

/**
 * Rumtime 245ms
 */
/*var addBinary = function(a, b) {
    var length = Math.max(a.length, b.length);
    var result = '';
    var up = '0'; // 0 for stay, 1 for up
    var rules = {
        // d1, d2, up or not: result, up or not
        '000': '0',
        '001': '1',
        '010': '1',
        '011': '01',
        '100': '1',
        '101': '01',
        '110': '01',
        '111': '11',
    }
    for (var i = 0; i < length; i++) {
        var n1 = a[a.length - i - 1] ? a[a.length - i - 1] : '0';
        var n2 = b[b.length - i - 1] ? b[b.length - i - 1] : '0';
        var sum = rules[n1 + n2 + up];
        result = '' + sum[0] + result;
        up = sum.length === 2 ? '1' : '0';
    }
    if (up === '1') {
        result = '1' + result;
    }
    return result;
};*/

console.log(addBinary('0', '0')); // 0
console.log(addBinary('0', '1')); // 1
console.log(addBinary('1', '0')); // 1
console.log(addBinary('1', '1')); // 10
console.log(addBinary('100', '11100')); // 100000
