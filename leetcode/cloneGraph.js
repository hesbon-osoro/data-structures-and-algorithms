/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
const cloneGraph = function (node) {
  const map = new Map();
  const dfs = node => {
    if (!node) return null;
    if (map.has(node.val)) return map.get(node.val);
    const newNode = new Node(node.val);
    map.set(node.val, newNode);
    for (const neighbor of node.neighbors) {
      newNode.neighbors.push(dfs(neighbor));
    }
    return newNode;
  };
  return dfs(node);
};
