/**
 * Source:  https://leetcode.com/problems/evaluate-reverse-polish-notation/
 * Tags:    [Stack]
 * Level:   Medium
 * Title:   Evaluate Reverse Polish Notation
 * Auther:  @imcoddy
 * Content: Evaluate the value of an arithmetic expression in Reverse Polish Notation.
 *
 *
 *
 * Valid operators are +, -, *, /. Each operand may be an integer or another expression.
 *
 *
 *
 * Some examples:
 *
 *   ["2", "1", "+", "3", "*"] -> ((2 + 1) * 3) -> 9
 *   ["4", "13", "5", "/", "+"] -> (4 + (13 / 5)) -> 6
 */

/**
 * @param {string[]} tokens
 * @return {number}
 */
/**
 * Memo: Use stack and pop operands
 * Complex: O(n)
 * Runtime: 164ms
 * Tests: 20 test cases passed
 * Rank: B
 * Updated: 2015-06-11
 */
var evalRPN = function(tokens) {
    var stack = [];

    for (var i = 0; i < tokens.length; i++) {
        if (!isNaN(tokens[i])) {
            stack.push(tokens[i]);
        } else {
            var b = stack.pop();
            var a = stack.pop();
            token = tokens[i];
            var result;
            if (token === '+') {
                result = parseInt(a, 10) + parseInt(b, 10);
            } else if (token === '-') {
                result = parseInt(a, 10) - parseInt(b, 10);
            } else if (token === '*') {
                result = parseInt(a, 10) * parseInt(b, 10);
            } else if (token === '/') {
                result = ~~(parseInt(a, 10) / parseInt(b, 10));
            }
            stack.push(result);
        }
    }

    return parseInt(stack.pop(), 10);
};

/**
 * Memo: Use javascript feature to pass arguments
 * Complex: O(n)
 * Runtime: 132ms
 * Tests: 20 test cases passed
 * Rank: S
 * Updated: 2015-06-11
 */
var evalRPN = function(tokens) {
    var stack = [];
    var map = Object.create(null);
    map['+'] = function(b, a) {
        return a + b;
    };
    map['-'] = function(b, a) {
        return a - b;
    };
    map['*'] = function(b, a) {
        return a * b;
    };
    map['/'] = function(b, a) {
        return ~~(a / b);
    };

    for (var i = 0; i < tokens.length; i++) {
        stack.push(isNaN(tokens[i]) ? map[tokens[i]](parseInt(stack.pop(), 10), parseInt(stack.pop(), 10)) : tokens[i]);
    }
    return parseInt(stack.pop(), 10);
};


var should = require('should');
console.time('Runtime');
evalRPN(["2", "1", "+", "3", "*"]).should.equal(9);
evalRPN(["4", "13", "5", "/", "+"]).should.equal(6);

console.timeEnd('Runtime');