/* Valid Palindrome
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

For example,
"A man, a plan, a canal: Panama" is a palindrome.
"race a car" is not a palindrome.

Note:
Have you consider that the string might be empty? This is a good question to ask during an interview.

For the purpose of this problem, we define empty string as valid palindrome.

Hide Tags Two Pointers String
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var alphanumerics = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var str = '';
    s = s.toUpperCase();
    for (var i = 0; i < s.length; i++) {
        if (alphanumerics.indexOf(s[i]) >= 0) {
            str += s[i];
        }
    }

    var low = 0;
    var high = str.length - 1;
    while (low < high) {
        if (str[low] !== str[high]) {
            return false;
        }
        low++;
        high--;
    }
    return true;
};


console.log(isPalindrome('1233321'));
console.log(isPalindrome('12334321'));
console.log(isPalindrome('12333321'));
console.log(isPalindrome('ab'));
