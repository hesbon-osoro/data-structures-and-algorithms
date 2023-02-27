/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {Node}
 */
const construct = function (grid) {
  const n = grid.length;
  const isLeaf = (x, y, n) => {
    const v = grid[x][y];
    for (let i = x; i < x + n; i++) {
      for (let j = y; j < y + n; j++) {
        if (grid[i][j] !== v) return false;
      }
    }
    return true;
  };
  const build = (x, y, n) => {
    if (isLeaf(x, y, n)) {
      return new Node(grid[x][y] === 1, true, null, null, null, null);
    }
    const m = n >> 1;
    return new Node(
      false,
      false,
      build(x, y, m),
      build(x, y + m, m),
      build(x + m, y, m),
      build(x + m, y + m, m)
    );
  };
  return build(0, 0, n);
};
