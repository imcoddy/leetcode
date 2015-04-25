/**
 * Source:  https://leetcode.com/problems/remove-element/
 * Tags:    [Array,Two Pointers]
 * Level:   Easy
 * Title:   Remove Element
 * Auther:  @imcoddy
 * Content: Given an array and a value, remove all instances of that value in place and return the new length.
 *
 *
 *
 * The order of elements can be changed. It doesn't matter what you leave beyond the new length.
 */

/**
 * @param {number[]} A
 * @param {number} elem
 * @returns {number}
 */

/**
 * Explanation: Using javascript API to remove element directly
 * Runtime: 161ms
 * Rank: B
 */

var removeElement = function(A, elem) {
    if (!A || A.length <= 0) {
        return 0;
    }

    while (A.indexOf(elem) !== -1) {
        var index = A.indexOf(elem);
        A.splice(index, 1);
    }
    console.log(A);
    return A.length;
};

/*
 *var removeElement = function(A, elem) {
 *    if (!A || A.length <= 0) {
 *        return 0;
 *    }
 *
 *    var tail = A.length - 1;
 *    var head = 0;
 *    var deleted = false;
 *
 *    while (head < tail) {
 *        if (A[head] === elem) {
 *            while (A[tail] === elem && head < tail) {
 *                tail--;
 *                deleted = true;
 *            }
 *            var temp = A[head];
 *            A[head] = A[tail];
 *            A[tail] = temp;
 *        }
 *        head++;
 *    }
 *    console.log(A, head, tail);
 *    return deleted ? tail - 1 : tail;
 *};
 */

console.log(removeElement([2], 2)); // 0
console.log(removeElement([2], 3)); // 1
console.log(removeElement([1, 3, 1, 1, 2, 1, 1, 1], 1)); // 2
console.log(removeElement([1, 1, 1, 1, 1, 1, 1, 1], 1)); // 0
console.log(removeElement([2, 1, 1, 1, 1, 1, 1, 1], 1)); // 1
console.log(removeElement([1, 1, 1, 1, 2, 2, 2, 2], 1)); // 4
console.log(removeElement([2, 1, 1, 1, 2, 2, 2, 2], 1)); // 5
console.log(removeElement([1, 1, 1, 1, 1, 1, 1, 2], 1)); // 1
console.log(removeElement([2, 2, 2, 2, 2, 2, 2, 2], 1)); // 7