/**
 * Source:  https://leetcode.com/problems/rotate-array/
 * Tags:    [Array]
 * Level:   Easy
 * Updated: 2015-04-24
 * Title:   Rotate Array
 * Auther:  @imcoddy
 * Content: Rotate an array of n elements to the right by k steps.
 * For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].
 *
 * Note:
 * Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
 *
 *
 * [show hint]
 * Hint:
 * Could you do it in-place with O(1) extra space?
 *
 *
 * Related problem: Reverse Words in a String II
 *
 * Credits:Special thanks to @Freezen for adding this problem and creating all test cases.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * @time 264ms
 */
var rotate = function(nums, k) {
    k = k % nums.length;
    while (k) {
        var t = nums.pop();
        nums.unshift(t);
        k--;
    }
    //return nums;
};


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * @time 180ms
 */
var rotate = function(nums, k) {
    k = k % nums.length;
    if (k > 0) {
        var first = nums.slice(0, nums.length - k);
        var last = nums.slice(nums.length - k);
        for (var i = 0; i < last.length; i++) {
            nums[i] = last[i];
        }
        for (var i = 0; i < first.length; i++) {
            nums[i + k] = first[i];
        }
    }
    //    console.log(nums);
    //    return nums;
};

/**
 * Memo: Slice the elements which need to be moved, and put it at front of the array.
 * Complex: O(n)
 * Runtime: 156ms
 * Tests: 33 test cases passed
 * Rank: A
 * Updated: 2015-06-14
 */
var rotate = function(nums, k) {
    if (nums.length > 1) {
        k = k % nums.length;

        var to_move = nums.slice(nums.length - k);
        for (var i = nums.length - k - 1; i >= 0; i--) {
            nums[i + k] = nums[i];
        }
        for (var i = 0; i < to_move.length; i++) {
            nums[i] = to_move[i];
        }
    }
};

/**
 * Memo: Rotate the array to right k times
 * Complex: O(n)
 * Runtime: 252ms
 * Tests: 33 test cases passed
 * Rank: C
 * Updated: 2015-11-10
 */
var rotate = function(nums, k) {
    if (nums.length <= 1) return;
    k = k % nums.length;
    for (var i = 0; i < k; i++) nums.unshift(nums.pop());
};


/**
 * Memo: Almost same as above, but move to left if k is large than half of length, to make less movement.
 * Complex: O(n)
 * Runtime: 183ms
 * Tests: 33 test cases passed
 * Rank: B
 * Updated: 2015-06-14
 */
var rotate = function(nums, k) {
    if (nums && nums.length) {
        k = k % nums.length;

        if (k > (nums.length >> 1)) {
            for (var i = 0; i < nums.length - k; i++) {
                nums.push(nums.shift());
            }
        } else {
            for (var i = 0; i < k; i++) {
                nums.unshift(nums.pop());
            }
        }
    }
    //console.log(nums);
};

console.log(rotate([1], 0));
console.log(rotate([1, 2], 1));
console.log(rotate([1, 2, 3, 4], 1));
console.log(rotate([1, 2, 3, 4], 2));
console.log(rotate([1, 2, 3, 4], 3));
console.log(rotate([1, 2, 3, 4], 4));
console.log(rotate([1, 2, 3, 4], 8));
console.log(rotate([1, 2, 3, 4], 9));
console.log(rotate([1, 2, 3, 4, 5, 6, 7, 8], 7));
console.log(rotate([1, 2, 3, 4, 5, 6, 7, 8], 23));
console.log(rotate([1, 2, 3, 4, 5, 6, 7, 8], 9));