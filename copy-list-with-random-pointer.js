/**
 * Source:  https://leetcode.com/problems/copy-list-with-random-pointer/
 * Tags:    [Hash Table,Linked List]
 * Level:   Hard
 * Title:   Copy List with Random Pointer
 * Auther:  @imcoddy
 * Content: A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.
 *
 *
 *
 * Return a deep copy of the list.
 */

/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */

/**
 * Memo: For list A->B->C, create a copy of each node and list it afterwards, as A->A'->B->B'->C->C', then detach the new nodes to make a new list.
 * Ref: https://leetcode.com/discuss/12559/my-accepted-java-code-o-n-but-need-to-iterate-the-list-3-times
 * Complex: O(n)
 * Runtime: 232ms
 * Tests: 11 test cases passed
 * Rank: A
 * Updated: 2015-06-20
 */
var copyRandomList = function(head) {
    if (!head) return null;

    var p = head;
    // For each node, create a copy and link it to next.
    while (p) {
        var np = new RandomListNode(p.label);
        np.next = p.next;
        p.next = np;
        p = p.next.next;
    }

    // Link the random pointer
    p = head;
    while (p) {
        if (p.random) p.next.random = p.random.next;
        p = p.next.next;
    }

    // Detach
    var dummy = new RandomListNode(null);
    var tail = dummy;
    p = head;
    while (p) {
        tail.next = p.next;
        tail = tail.next;
        p.next = p.next.next;
        p = p.next;
    }

    return dummy.next;
};

function RandomListNode(label) {
    this.label = label;
    this.next = this.random = null;
}

var head = new RandomListNode(-1);
var node = new RandomListNode(2);
head.next = node;

console.log(copyRandomList(head));