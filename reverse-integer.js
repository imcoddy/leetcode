/*Reverse Integer
Reverse digits of an integer.

Example1: x = 123, return 321
Example2: x = -123, return -321

click to show spoilers.

Have you thought about this?
Here are some good questions to ask before coding. Bonus points for you if you have already thought through this!

If the integer's last digit is 0, what should the output be? ie, cases such as 10, 100.

Did you notice that the reversed integer might overflow? Assume the input is a 32-bit integer, then the reverse of 1000000003 overflows. How should you handle such cases?

For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

Update (2014-11-10):
Test cases had been added to test the overflow behavior.

Hide Tags Math
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var negative = false;
    var result = 0;
    var MAX = 2147483647;
    if (x < 0) {
        negative = true;
        x = -x;
    }

    var str = '' + x;
    var digits = str.split('');

    for (var i = digits.length - 1; i >= 0; i--) {
        result = result * 10 + parseInt(digits[i]);
    }

    if (result > MAX) {
        // Overflow as 32-bit integer
        result = 0;
    }
    return negative ? -result : result;
};


console.log(reverse(123));
console.log(reverse(100));
console.log(reverse(10001));
console.log(reverse(1000000003));
console.log(reverse(-123));
console.log(reverse(-100));
