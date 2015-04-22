/*Happy Number
Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Example: 19 is a happy number

12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
Credits:
Special thanks to @mithmatt and @ts for adding this problem and creating all test cases.

Hide Tags Hash Table Math
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var result = n;
    var map = {};
    // map[n] = 1;
    result = getResult(result);
    map[result] = 1;
    while (result !== 1) {
        result = getResult(result);
        if (map[result]) {
            return false;
        } else {
            map[result] = 1;
            n = result;
        }
    }
    return true;
};

var getResult = function(n) {
    var result = 0;
    while (n) {
        var d = n % 10;
        result += d * d;
        n = Math.floor(n / 10);
    }
    return result;
};

console.log(getResult(1933));
console.log(isHappy(0));
console.log(isHappy(10));
console.log(isHappy(11));
