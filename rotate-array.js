/*Rotate Array
Rotate an array of n elements to the right by k steps.

For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].

Note:
Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.

[show hint]

Hint:
Could you do it in-place with O(1) extra space?
Related problem: Reverse Words in a String II

Credits:
Special thanks to @Freezen for adding this problem and creating all test cases.

Hide Tags Array
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
var rotate2 = function(nums, k) {
    k = k % nums.length;
    if (k>0) {
        var first = nums.slice(0, nums.length - k);
        var last = nums.slice(nums.length - k);
        for (var i = 0; i < last.length; i++) {
            nums[i] = last[i];
        }
        for (var i = 0; i < first.length; i++) {
            nums[i+k] = first[i];
        }
    }
//    console.log(nums);
//    return nums;
};
console.log(rotate2([1], 0));
console.log(rotate2([1,2], 1));
console.log(rotate2([1,2,3,4], 1));
//console.log(rotate([1,2,3,4], 9));
console.log(rotate2([1,2,3,4], 2));
//console.log(rotate([1,2,3,4], 3));
//console.log(rotate([1,2,3,4], 4));
//console.log(rotate([1,2,3,4], 8));
