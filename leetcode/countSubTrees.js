/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @return {number[]}
 */
const countSubTrees = function (n, edges, labels) {
  const adjList = Array.from(Array(n), () => new Array());
  for (const [a, b] of edges) {
    adjList[a].push(b);
    adjList[b].push(a);
  }
  const ans = Array(n).fill(0);
  const count = Array(26).fill(0);
  const dfs = (i, p, pcount) => {
    const count = Array(26).fill(0);
    for (const j of adjList[i]) {
      if (j == p) continue;
      dfs(j, i, count);
    }
    count[labels.charCodeAt(i) - 97]++;
    ans[i] = count[labels.charCodeAt(i) - 97];
    for (let i = 0; i < 26; i++) {
      pcount[i] += count[i];
    }
  };
  dfs(0, -1, count);
  return ans;
};
