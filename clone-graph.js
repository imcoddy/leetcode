/**
 * Source:  https://leetcode.com/problems/clone-graph/
 * Tags:    [Depth-first Search,Breadth-first Search,Graph]
 * Level:   Medium
 * Title:   Clone Graph
 * Auther:  @imcoddy
 * Content: Clone an undirected graph. Each node in the graph contains a label and a list of its neighbors.
 *
 *
 *
 *
 * OJ's undirected graph serialization:
 *
 *
 * Nodes are labeled uniquely.
 *
 *
 * We use # as a separator for each node, and , as a separator for node label and each neighbor of the node.
 *
 *
 *
 *
 * As an example, consider the serialized graph {0,1,2#1,2#2,2}.
 *
 *
 *
 * The graph has a total of three nodes, and therefore contains three parts as separated by #.
 *
 * First node is labeled as 0. Connect node 0 to both nodes 1 and 2.
 * Second node is labeled as 1. Connect node 1 to node 2.
 * Third node is labeled as 2. Connect node 2 to node 2 (itself), thus forming a self-cycle.
 *
 *
 *
 *
 * Visually, the graph looks like the following:
 *
 *        1
 *       / \
 *      /   \
 *     0 --- 2
 *          / \
 *          \_/
 */

/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */

/**
 * Memo: Clone the graph recursively using DFS.
 * Complex: O(n)
 * Runtime: 264ms
 * Tests: 12 test cases passed
 * Rank: A
 * Updated: 2015-06-04
 */
var cloneGraph = function(graph) {
    var cloned = {};

    function clone(node) {
        if (!node) return null;
        if (cloned[node.label]) return cloned[node.label];
        var cloneNode = new UndirectedGraphNode(node.label);
        cloned[node.label] = cloneNode;
        for (var i = 0; i < node.neighbors.length; i++) {
            cloneNode.neighbors.push(clone(node.neighbors[i]));
        }
        return cloneNode;
    }
    return clone(graph);
};

function UndirectedGraphNode(label) {
    this.label = label;
    this.neighbors = []; // Array of UndirectedGraphNode
}