/*Excel Sheet Column Number
Related to question Excel Sheet Column Title

Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 
Credits:
Special thanks to @ts for adding this problem and creating all test cases.

Hide Tags Math
*/

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var str = '0ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var size = 26;
    var result = 0;
    for (var i=0; i < s.length; i++) {
        result = result * size + str.indexOf(s[i]);
        if (str.indexOf(s[i]) === 'Z') {
            result += size;
        }
    }
    console.log(result);
    return result;
};

titleToNumber('Y'); // 25
titleToNumber('Z'); // 26
titleToNumber('AA'); // 27
titleToNumber('YZ'); // 676
titleToNumber('ZZ'); 
