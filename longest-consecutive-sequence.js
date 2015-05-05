/**
 * Source:  https://leetcode.com/problems/longest-consecutive-sequence/
 * Tags:    [Array]
 * Level:   Hard
 * Title:   Longest Consecutive Sequence
 * Auther:  @imcoddy
 * Content: Given an unsorted array of integers, find the length of the longest consecutive elements sequence.
 *
 *
 * For example,
 * Given [100, 4, 200, 1, 3, 2],
 * The longest consecutive elements sequence is [1, 2, 3, 4]. Return its length: 4.
 *
 *
 * Your algorithm should run in O(n) complexity.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * Memo: Pretty tricky to use JS built-in hash, as negative intergers have order issue!
 * Runtime: 223ms
 * Tests: 67 test cases passed
 * Rank: C
 */
var longestConsecutive = function(nums) {
    if (nums.length < 2) {
        return nums.length;
    }

    var pos = {};
    var neg = {};
    for (var i = 0; i < nums.length; i++) {
        nums[i] >= 0 ? pos[nums[i]] = true : neg[0 - nums[i]] = true;
    }
    var neg_keys = Object.keys(neg);
    for (var i = 0; i < neg_keys.length; i++) {
        neg_keys[i] = 0 - neg_keys[i];
    }
    neg_keys = neg_keys.reverse();
    pos_keys = Object.keys(pos);
    for (var i = 0; i < pos_keys.length; i++) {
        pos_keys[i] = parseInt(pos_keys[i], 10);
    }
    var keys = neg_keys.concat(pos_keys);
    var start = keys[0];
    var count = 1;
    var max = count;
    for (var i = 1; i < keys.length; i++) {
        if (keys[i] - start === count) {
            count++;
            if (count > max) {
                max = count;
            }
        } else {
            start = keys[i];
            count = 1;
        }
    }
    return max;
};

console.log(longestConsecutive([])); //0
console.log(longestConsecutive([1])); //1
console.log(longestConsecutive([0, 0])); //1
console.log(longestConsecutive([1, 1])); //1
console.log(longestConsecutive([1, 2])); //2
console.log(longestConsecutive([-2, -1])); //2
console.log(longestConsecutive([-2, -1, 0, 1, 2])); //5
console.log(longestConsecutive([1, 2, 2, 2, 2])); //2
console.log(longestConsecutive([1, 1, 1, 1, 1])); //1
console.log(longestConsecutive([1, 2, 3, 4, 5])); //5
console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); //4
console.log(longestConsecutive([100, 4, 200, 1, 3, 2, -1, -3, -4])); //4
console.log(longestConsecutive([4, 0, -4, -2, 2, 5, 2, 0, -8, -8, -8, -8, -1, 7, 4, 5, 5, -4, 6, 6, -3])); //4
