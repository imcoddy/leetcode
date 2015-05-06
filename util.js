/**
 * This file is used to do some data generating
 */
var util = {};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

util.arrayToLinkList = function(array) {
    var nodes = [];
    for (var i = 0; i < array.length; i++) {
        nodes[i] = new ListNode(array[i]);
        if (i > 0) {
            nodes[i - 1].next = nodes[i];
        }
    }
    return nodes[0];
};

util.linkListToArray = function(head) {
    if (!head) {
        return null;
    }
    var p = head;
    var list = [];
    while (p) {
        list.push(p.val);
        p = p.next;
    }
    return list;
};

util.linkListToString = function(head) {
    var list = util.linkListToArray(head);
    if (!list) {
        return null;
    }
    var s = list.join('->');
    return s;
};

module.exports = util;
