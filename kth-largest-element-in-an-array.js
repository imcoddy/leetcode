/**
 * Source:  https://leetcode.com/problems/kth-largest-element-in-an-array/
 * Tags:    [Divide and Conquer,Heap]
 * Level:   Medium
 * Title:   Kth Largest Element in an Array
 * Auther:  @imcoddy
 * Content: Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.
 *
 * For example,
 * Given [3,2,1,5,6,4] and k = 2, return 5.
 *
 *
 * Note:
 * You may assume k is always valid, 1 ≤ k ≤ array's length.
 *
 * Credits:Special thanks to @mithmatt for adding this problem and creating all test cases.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/**
 * Memo: Use heap sort to build a minHeap with k element, and add the rest to heap top only when it is larger than nums[0], so in the end nums[0] is the result.
 * Complex: O(nlogn)
 * Runtime: 144ms
 * Tests: 27 test cases passed
 * Rank: S
 * Updated: 2015-06-11
 */
var findKthLargest = function(nums, k) {
    function parent(i) {
        return ~~((i - 1) / 2);
    }

    function left(i) {
        return 2 * i + 1;
    }

    function right(i) {
        return 2 * i + 2;
    }

    function swap(array, i, j) {
        var tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
    }

    function buildMinHeap(array, i, size) {
        var l = left(i);
        var r = right(i);
        var min = i;

        if (l < size && array[l] < array[min]) {
            min = l;
        }
        if (r < size && array[r] < array[min]) {
            min = r;
        }

        if (i !== min) {
            swap(array, i, min);
            buildMinHeap(array, min, size);
        }
    }

    function buildHeap(array, k) {
        for (var i = ~~(k / 2); i >= 0; i--) {
            buildMinHeap(array, i, k);
        }
    }

    buildHeap(nums, k);
    for (var i = k; i < nums.length; i++) {
        if (nums[i] > nums[0]) {
            nums[0] = nums[i];
            buildMinHeap(nums, 0, k);
        }
    }

    return nums[0];
};

var should = require('should');
console.time('Runtime');
findKthLargest([3, 9, 5, 1, 7], 5).should.equal(1);
findKthLargest([3, 9, 5, 1, 0, 2, 7], 5).should.equal(2);

console.timeEnd('Runtime');