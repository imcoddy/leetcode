/**
 * Source:  https://leetcode.com/problems/palindrome-linked-list/
 * Tags:    [Linked List,Two Pointers]
 * Level:   Easy
 * Title:   Palindrome Linked List
 * Auther:  @imcoddy
 * Content: Given a singly linked list, determine if it is a palindrome.
 *
 * Follow up:
 * Could you do it in O(n) time and O(1) space?
 *
 *
 *
 *
 *
 *
 *
 *
 *                   Show Similar Problems
 *
 *
 *                      (E) Palindrome Number
 *
 *                      (E) Valid Palindrome
 *
 *                      (E) Reverse Linked List
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

/**
 * Memo: Loop the linked list and store its value in an array, check from the middle.
 * Complex: O(n)
 * Runtime: 152ms
 * Tests: 21 test cases passed
 * Rank: A
 * Updated: 2015-08-07
 */
var isPalindrome = function(head) {
  var array = [];
  while (head) {
    array.push(head.val);
    head = head.next;
  }

  var length = array.length;
  var right = ~~(length / 2);
  var left = length % 2 === 0 ? right - 1 : right;

  while (left >= 0) {
    if (array[left] !== array[right]) {
      break;
    }
    left--;
    right++;
  }

  return left < 0;
};

var util = require("./util.js");
var should = require('should');
console.time('Runtime');

isPalindrome(util.arrayToLinkList([])).should.equal(true);
isPalindrome(util.arrayToLinkList([1, 2, 3, 2, 1])).should.equal(true);
isPalindrome(util.arrayToLinkList([1, 2, 3, 3, 2, 1])).should.equal(true);
isPalindrome(util.arrayToLinkList([1, 2, 3, 2, 2, 1])).should.equal(false);

console.timeEnd('Runtime');