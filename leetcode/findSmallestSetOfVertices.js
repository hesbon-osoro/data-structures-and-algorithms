/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
const findSmallestSetOfVertices = function (n, edges) {
  const set = new Set();
  for (let i = 0; i < n; i++) {
    set.add(i);
  }
  for (const edge of edges) {
    if (set.has(edge[1])) {
      set.delete(edge[1]);
    }
  }
  return Array.from(set);
};
