/*Excel Sheet Column
Given a positive integer, return its corresponding column title as appear in an Excel sheet.

For example:

    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB
Credits:
Special thanks to @ifanchu for adding this problem and creating all test cases.

Hide Tags Math
*/

/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    var str = 'ZABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var size = 26;
    var result = '';
    while( n > 0 ){
        result = str.charAt(n % size) + result ;
        if (n % size === 0) {
            n = n - size;
        }
        n = Math.floor( n / size );
    }
    console.log(result);
    return result;
};

convertToTitle(25); // X
convertToTitle(26); // Z
convertToTitle(27); // AA
convertToTitle(52); // AA
convertToTitle(26*26); // AA
