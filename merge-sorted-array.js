/**
 * Source:  https://leetcode.com/problems/merge-sorted-array/
 * Tags:    [Array,Two Pointers]
 * Level:   Easy
 * Title:   Merge Sorted Array
 * Auther:  @imcoddy
 * Content: Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
 *
 *
 * Note:
 * You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2. The number of elements initialized in nums1 and nums2 are m and n respectively.
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

/**
 * Memo: Append nums2 to nums1, and turn it into problem of sorting nums1.
 * Runtime: 145ms
 * Tests: 49 test cases passed
 * Rank: B
 */
var merge = function(nums1, m, nums2, n) {
    for (var i = 0; i < nums2.length; i++) {
        nums1[m + i] = nums2[i];
    }
    for (var i = 0; i < m + n; i++) {
        for (j = i + 1; j < m + n; j++) {
            if (nums1[i] > nums1[j]) {
                var t = nums1[i];
                nums1[i] = nums1[j];
                nums1[j] = t;
            }
        }
    }
};


/**
 * Memo: Compare from back to front, use last as index to put the largest unsolved element.
 * Complex: O(m+n)
 * Runtime: 136ms
 * Tests: 59 test cases passed
 * Rank: S
 * Updated: 2015-06-10
 */
var merge = function(nums1, m, nums2, n) {
    var last = m + n - 1;
    var j = n - 1;
    var i = m - 1;

    while (i >= 0 && j >= 0) {
        nums1[last--] = nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
    }

    while (j >= 0) {
        nums1[last--] = nums2[j--];
    }
};


/**
 * Memo: One line solution by moving m and n, better than the solution above but a bit hard to read.
 * Complex: O(m+n)
 * Runtime: 140ms
 * Tests: 59 test cases passed
 * Rank: S
 * Updated: 2015-06-11
 */
var merge = function(nums1, m, nums2, n) {
    //while (n) nums1[m + n - 1] = nums1[m - 1] > nums2[n - 1] ? nums1[--m] : nums2[--n];
    // if m is 0, it means the array is already sorted so need to keep comparing
    while (n) nums1[m + n - 1] = m && nums1[m - 1] > nums2[n - 1] ? nums1[--m] : nums2[--n];
};

console.log(merge([1, 3, 5, 7, 9], 5, [2, 4, 6], 3));
console.log(merge([-10, -8, -6, -4, -2], 5, [-5, -3, -1], 3));
console.log(merge([2, 4, 6], 3, [1, 3, 5, 7, 9], 5));
console.log(merge([12, 14, 16], 3, [1, 3, 5, 7, 9], 5));
