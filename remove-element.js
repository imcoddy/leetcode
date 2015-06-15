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

/*
 *var removeElement = function(A, elem) {
 *    if (!A || A.length <= 0) {
 *        return 0;
 *    }
 *
 *    while (A.indexOf(elem) !== -1) {
 *        var index = A.indexOf(elem);
 *        A.splice(index, 1);
 *    }
 *    console.log(A);
 *    return A.length;
 *};
 */

/**
 * Runtime: 171ms
 * Rank: C
 */
var removeElement = function(A, elem) {
    if (!A || A.length <= 0) {
        return 0;
    }

    var tail = A.length - 1;
    var head = 0;

    while (head < tail) {
        while (A[head] !== elem && head < tail) {
            head++;
        }
        while (A[tail] === elem) {
            tail--;
        }
        if (head < tail) {
            var temp = A[head];
            A[head] = A[tail];
            A[tail] = temp;
        }
    }

    if (A[tail] === elem) {
        tail--;
    }
    return tail + 1;
};


/**
 * Memo: Use Javascript API to locate the element in array and delete it.
 * Complex: O(n)
 * Runtime: 128ms
 * Tests: 112 test cases passed
 * Rank: S
 * Updated: 2015-06-15
 */
var removeElement = function(nums, val) {
    var index;
    while ((index = nums.indexOf(val)) !== -1) {
        nums.splice(index, 1);
    }
    return nums.length;
};


/**
 * Shorter version of the above
 */
var removeElement = function(nums, val) {
    while ((nums.indexOf(val)) !== -1) nums.splice(nums.indexOf(val), 1);
    return nums.length;
};


/**
 * Memo: Keep moving head and tail pointers until they match
 * Complex: O(n)
 * Runtime: 140ms
 * Tests: 112 test cases passed
 * Rank: B
 * Updated: 2015-06-15
 */
var removeElement = function(nums, val) {
    var head = 0;
    var tail = nums.length;
    while (head < tail) {
        if (nums[head] === val) {
            nums[head] = nums[--tail];
        } else {
            head++;
        }
    }
    return tail;
};

/**
 * Shorter version of the above
 */
var removeElement = function(nums, val) {
    var head = 0,
        tail = nums.length;
    while (head < tail) nums[head] = nums[head] === val ? nums[--tail] : nums[head++];
    return tail;
};

var should = require('should');
console.time('Runtime');
removeElement([2], 2).should.equal(0); // 0
removeElement([2], 3).should.equal(1); // 1
removeElement([3, 3], 3).should.equal(0); // 0
removeElement([3, 3], 5).should.equal(2); // 2
removeElement([1, 3, 1, 1, 2, 1, 1, 1], 1).should.equal(2); // 2
removeElement([1, 1, 1, 1, 1, 1, 1, 1], 1).should.equal(0); // 0
removeElement([2, 1, 1, 1, 1, 1, 1, 1], 1).should.equal(1); // 1
removeElement([1, 1, 1, 1, 2, 2, 2, 2], 1).should.equal(4); // 4
removeElement([2, 1, 1, 1, 2, 2, 2, 2], 1).should.equal(5); // 5
removeElement([1, 1, 1, 1, 1, 1, 1, 2], 1).should.equal(1); // 1
removeElement([1, 1, 1, 1, 1, 1, 1, 2], 2).should.equal(7); // 7
removeElement([2, 2, 2, 2, 2, 2, 2, 2], 1).should.equal(8); // 8
console.timeEnd('Runtime');