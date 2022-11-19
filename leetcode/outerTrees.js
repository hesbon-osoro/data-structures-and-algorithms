/**
 * @param {number[][]} trees
 * @return {number[][]}
 */
const outerTrees = function (trees) {
  const n = trees.length;
  if (n <= 3) return trees;
  trees.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const hull = [];
  for (let i = 0; i < n; i++) {
    while (
      hull.length >= 2 &&
      cross(hull[hull.length - 2], hull[hull.length - 1], trees[i]) < 0
    ) {
      hull.pop();
    }
    hull.push(trees[i]);
  }
  hull.pop();
  for (let i = n - 1; i >= 0; i--) {
    while (
      hull.length >= 2 &&
      cross(hull[hull.length - 2], hull[hull.length - 1], trees[i]) < 0
    ) {
      hull.pop();
    }
    hull.push(trees[i]);
  }
  return [...new Set(hull.map(t => t.join(',')))].map(t =>
    t.split(',').map(n => +n)
  );
};

function cross(o, a, b) {
  return (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
}
