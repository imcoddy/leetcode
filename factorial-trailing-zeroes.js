/**
 * Source:  https://leetcode.com/problems/factorial-trailing-zeroes/
 * Tags:    [Math]
 * Level:   Easy
 * Title:   Factorial Trailing Zeroes
 * Auther:  @imcoddy
 * Content: Given an integer n, return the number of trailing zeroes in n!.
 *
 * Note: Your solution should be in logarithmic time complexity.
 *
 * Credits:Special thanks to @ts for adding this problem and creating all test cases.
 */

/**
 * @param {number} n
 * @return {number}
 */

/**
 * The trailing zeroes will only be added when 5 is encountered, as there are already enough even numbers to multiply to create 10.
 * Since n! = (n-1) * n, the problem turns to be counting how many 5 can be generated from n.
 * Notice number for 5^x, as when n = 25 (aka 5*5), 125, etc.
 * Rumtime: 184ms
 * Rumtime: 167ms Using ~~ to convert float to int
 * Rank: Middle
 */
var trailingZeroes = function(n) {
    if (n <= 0) {
        return 0;
    }
    var result = 0;
    while (n) {
//        result += Math.floor(n / 5);
//        n = Math.floor(n / 5);
        result += (n=~~(n / 5));
//        n = ~~(n / 5);
    }
    return result;
};

console.log(trailingZeroes(-11)); //0
console.log(trailingZeroes(0)); //0
console.log(trailingZeroes(1)); //0
console.log(trailingZeroes(5)); //1
console.log(trailingZeroes(9)); //1
console.log(trailingZeroes(10)); //2
console.log(trailingZeroes(30)); //7
