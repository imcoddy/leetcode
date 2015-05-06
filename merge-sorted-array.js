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

console.log(merge([1, 3, 5, 7, 9], 5, [2, 4, 6], 3));
console.log(merge([-10, -8, -6, -4, -2], 5, [-5, -3, -1], 3));
