/**
 * Source:  https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * Tags:    [Array,Two Pointers]
 * Level:   Easy
 * Title:   Remove Duplicates from Sorted Array
 * Auther:  @imcoddy
 * Content: Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.
 *
 *
 * Do not allocate extra space for another array, you must do this in place with constant memory.
 *
 *
 *
 * For example,
 * Given input array A = [1,1,2],
 *
 *
 * Your function should return length = 2, and A is now [1,2].
 */

/**
 * @param {number[]} A
 * @return {number}
 */

/**
 * Memo:
 * Runtime: 189ms
 * Rank: S
 */
var removeDuplicates = function(A) {
    if (!A || A.length === 0) {
        return 0;
    }

    if (A.length === 1) {
        return 1;
    }

    var length = A.length;
    var i = 0;
    var j = 1;

    while (i < length) {
        while (A[i] === A[j] && j < length) {
            A[j] = NaN;
            j++;
        }

        i = j;
        j = i + 1;
    }

    var count = 0;
    for (var i = 0; i < length; i++) {
        if (!isNaN(A[i])) {
            A[count++] = A[i];
        }
    }
    console.log(A);
    return count;
};

console.log(removeDuplicates([1]));
console.log(removeDuplicates([1, 1, 1, 1]));
console.log(removeDuplicates([1, 1, 1, 2]));
console.log(removeDuplicates([1, 1, 1, 2, 2, 2, 2, 2]));