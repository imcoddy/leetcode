/**
 * Source:  https://leetcode.com/problems/simplify-path/
 * Tags:    [Stack,String]
 * Level:   Medium
 * Title:   Simplify Path
 * Auther:  @imcoddy
 * Content: Given an absolute path for a file (Unix-style), simplify it.
 *
 * For example,
 * path = "/home/", => "/home"
 * path = "/a/./b/../../c/", => "/c"
 *
 *
 * click to show corner cases.
 *
 * Corner Cases:
 *
 *
 *
 * Did you consider the case where path = "/../"?
 * In this case, you should return "/".
 * Another corner case is the path might contain multiple slashes '/' together, such as "/home//foo/".
 * In this case, you should ignore redundant slashes and return "/home/foo".
 */

/**
 * @param {string} path
 * @return {string}
 */

/**
 * Memo:
 * Runtime: 150ms
 * Tests: 252 test cases passed
 * Rank: A
 */
var simplifyPath = function(path) {
    var directories = path.split('\/');
    var stack = [];
    for (var i = 0; i < directories.length; i++) {
        var d = directories[i];
        if (d === '..') {
            stack.pop();
        } else if (d !== '.' && d !== '') {
            stack.push(d);
        }
    }

    return '/' + stack.join('/');
};


console.log(simplifyPath('/'));
console.log(simplifyPath('/a'));
console.log(simplifyPath('/a/'));
console.log(simplifyPath('/a/./b/../../c/'));
console.log(simplifyPath('/a/./b/../../c/d/e/f/g/'));
console.log(simplifyPath('///a/.//b/../../c///'));