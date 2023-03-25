/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
const countPairs = function (n, edges) {
  const adjacent = [];

  for (let i = 0; i < n; i++) {
    adjacent.push([]);
  }

  for (let [from, to] of edges) {
    adjacent[from].push(to);
    adjacent[to].push(from);
  }

  const visited = new Set();

  function dfs(from) {
    visited.add(from);

    let count = 1;

    for (const to of adjacent[from]) {
      if (!visited.has(to)) {
        count += dfs(to);
      }
    }

    return count;
  }

  const groups = [];

  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      const count = dfs(i);
      groups.push(count);
    }
  }

  let ans = 0;

  for (let i = 0; i < groups.length - 1; i++) {
    for (let j = i + 1; j < groups.length; j++) {
      ans += groups[i] * groups[j];
    }
  }

  return ans;
};
