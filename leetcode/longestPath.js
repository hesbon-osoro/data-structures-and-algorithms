/**
 * @param {number[]} parent
 * @param {string} s
 * @return {number}
 */
const longestPath = function (parent, s) {
  const graph = new Map();
  let longestPath = 1;
  for (let i = 0; i < parent.length; i++) {
    if (!graph.has(parent[i])) {
      graph.set(parent[i], []);
    }
    graph.get(parent[i]).push(i);
  }
  const dfs = curr => {
    if (!graph.has(curr)) return 1;

    let longest = 0,
      secondLongest = 0;

    for (const child of graph.get(curr)) {
      const longestFromChild = dfs(child);

      if (s[curr] != s[child]) {
        if (longestFromChild > longest) {
          secondLongest = longest;
          longest = longestFromChild;
        } else if (longestFromChild > secondLongest) {
          secondLongest = longestFromChild;
        }
      }
    }

    longestPath = Math.max(longestPath, longest + secondLongest + 1);
    return longest + 1;
  };

  dfs(0);
  return longestPath;
};
