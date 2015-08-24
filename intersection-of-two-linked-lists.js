/**
 * Source:  https://leetcode.com/problems/intersection-of-two-linked-lists/
 * Tags:    [Linked List]
 * Level:   Easy
 * Title:   Intersection of Two Linked Lists
 * Auther:  @imcoddy
 * Content: Write a program to find the node at which the intersection of two singly linked lists begins.
 *
 * For example, the following two linked lists:
 *
 * A:          a1 → a2
 *                    ↘
 *                      c1 → c2 → c3
 *                    ↗
 * B:     b1 → b2 → b3
 *
 * begin to intersect at node c1.
 *
 * Notes:
 *
 * If the two linked lists have no intersection at all, return null.
 * The linked lists must retain their original structure after the function returns.
 * You may assume there are no cycles anywhere in the entire linked structure.
 * Your code should preferably run in O(n) time and use only O(1) memory.
 *
 *
 *
 * Credits:Special thanks to @stellari for adding this problem and creating all test cases.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

/**
 * Memo: If the two lists have intersection, then L1 + L2 and L2 + L1 will end up with the same intersection.
 * More explanation here: https://leetcode.com/discuss/36204/python-ac-solution-with-clear-explanation
 * Complex: O(m+n)
 * Runtime: 151ms
 * Tests: 42 test cases passed
 * Rank: S
 * Updated: 2015-06-17
 */
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null;

    var pa = headA;
    var pb = headB;
    var count = 0; // should stop after link list to each other once
    while (count <= 2) {
        if (pa === pb) return pa;

        if (pa.next) {
            pa = pa.next;
        } else {
            pa = headB;
            count++;
        }

        if (pb.next) {
            pb = pb.next;
        } else {
            pb = headA;
            count++;
        }
    }
    return null;
};

var getIntersectionNode = function(headA, headB){
    var pa = headA;
    var pb = headB;
    var count = 0;
    while (pa && pb) {
        if(pa === pb) return pa;

        if (pa.next) {
            pa = pa.next;
        }else {
            pa = headB;
            count++;
        }

        if (pb.next) {
            pb = pb.next;
        }else {
            pb = headA  ;
            count++;
        }
        if (count>2) {
            break;
        }
    }
    return null;
};

var util = require("./util.js");

function concat(list1, list2) {
    if (!list1) return list2;
    var p = list1;
    while (p.next) {
        p = p.next;
    }
    p.next = list2;
    return list1;
}

var list1 = util.arrayToLinkList([1, 2, 3]);
var list2 = util.arrayToLinkList([6, 2, 3]);
var listc = util.arrayToLinkList([7, 8]);
console.log(util.linkListToString(concat(list1, listc)));
console.log(util.linkListToString(concat(list2, listc)));
console.log(util.linkListToString(getIntersectionNode(list1, list2)));
