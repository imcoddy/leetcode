/**
 * Source:  https://leetcode.com/problems/compare-version-numbers/
 * Tags:    [String]
 * Level:   Easy
 * Updated: 2015-04-24
 * Title:   Compare Version Numbers
 * Auther:  @imcoddy
 * Content: Compare two version numbers version1 and version2.
 * If version1 > version2 return 1, if version1 < version2 return -1, otherwise return 0.
 *
 * You may assume that the version strings are non-empty and contain only digits and the . character.
 * The . character does not represent a decimal point and is used to separate number sequences.
 * For instance, 2.5 is not "two and a half" or "half way to version three", it is the fifth second-level revision of the second first-level revision.
 *
 * Here is an example of version numbers ordering:
 * 0.1 < 1.1 < 1.2 < 13.37
 *
 * Credits:Special thanks to @ts for adding this problem and creating all test cases.
 */

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    if (!(version1 && version2)) {
        return 0;
    }

    var v1 = version1.split('.');
    var v2 = version2.split('.');
    for (var i = 0; i < v1.length; i++) {
        v1[i] = parseInt(v1[i], 10);
    }
    for (var i = 0; i < v2.length; i++) {
        v2[i] = parseInt(v2[i], 10);
    }
    while (v1.length < v2.length) {
        v1.push(0);
    }
    while (v2.length < v1.length) {
        v2.push(0);
    }

    var index = 0;
    while (index < v1.length) {
        if (v1[index] > v2[index]) {
            return 1;
        } else if (v1[index] < v2[index]) {
            return -1;
        } else {
            index++;
        }
    }
    return 0;
};


console.log(compareVersion('1.1', '1.1'));
console.log(compareVersion('1.1.1', '1.1.2'));
console.log(compareVersion('1.1.0', '1.1'));
console.log(compareVersion('1.2', '1.13'));
console.log(compareVersion('1.3', '1.31'));
console.log(compareVersion('1.9', '1.31'));
console.log(compareVersion('1', '1.1'));
console.log(compareVersion('1', '1.0'));
console.log(compareVersion('2', '1.1'));
