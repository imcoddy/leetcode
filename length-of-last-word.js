/*Length of Last Word
Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

For example, 
Given s = "Hello World",
return 5.

Hide Tags String
*/

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLastWord = function(s) {
    if (!s) {
        return 0;
    }
    s = s.trim();
    var last_space = s.lastIndexOf(' ');
    return s.length - (last_space+1);
};

console.log(lengthOfLastWord('This is a Test'));
console.log(lengthOfLastWord('A   '));
console.log(lengthOfLastWord());
