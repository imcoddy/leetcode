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

util.arrayToTree = function(array) {
    if (!array || array.length === 0 || array[0] === '#') return null;
    var nodes = [];
    for (var i = 0; i < array.length; i++) {
        nodes[i] = array[i] === '#' ? null : new TreeNode(array[i]);
    }
    if (nodes.length === 1) return nodes[0];

    var root = nodes[0];
    var current = 0;
    var next = 1;
    var is_left = true;

    while (next < nodes.length) {
        if (nodes[current]) {
            if (is_left) {
                nodes[current].left = nodes[next++];
            } else {
                nodes[current].right = nodes[next++];
                current++;
            }
            is_left = !is_left;
        } else {
            current++;
        }
    }

    return root;
};

util.treeToArray = function(root) {
    if (!root) return [];
    if (!root.left && !root.right) return [root.val];

    var result = [];
    var queue = [root];
    while (queue.length) {
        var n = queue.shift();
        if (n) {
            result.push(n.val);
            queue.push(n.left);
            queue.push(n.right);
        } else {
            result.push('#');
        }
    }

    while (result[result.length-1] === '#') {
        result.pop();
    }
    return result;

};


util.arrayToLinkList = function(array) {
    if (!array) {
        return null;
    }
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
    var s = list.filter(function(n) {
        return n != undefined
    }).join('->');
    return s;
};

module.exports = util;
