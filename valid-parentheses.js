/**
 * Source:  https://leetcode.com/problems/valid-parentheses/
 * Tags:    [Stack,String]
 * Level:   Easy
 * Updated: 2015-04-24
 * Title:   Valid Parentheses
 * Auther:  @imcoddy
 * Content: Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 *
 * The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var brackets = '([{';
    var stack = [];
    var map = {
        ')':'(',
        ']':'[',
        '}':'{'
    };

    for (var i = 0; i < s.length; i++) {
        if (brackets.indexOf(s[i]) >= 0) {
           stack.push(s[i]);
        }else {
            if (stack.length === 0) {
                return false;
            }
            var last = stack[stack.length - 1];
            if (map[s[i]] !== last) {
                return false;
            }else{
                stack.pop();
            }
        }
    }

    return stack.length === 0;
};

var str;
str = "()[]{}"; console.log(isValid(str.split('')));
str = "()["; console.log(isValid(str.split('')));
