/**
 * @param {string[]} strs
 * @return {number}
 */
const numSimilarGroups = function (strs) {
  const visited = new Set();
  let groups = 0;
  for (const str of strs) {
    if (!visited.has(str)) {
      groups++;
      dfs(str, visited, strs);
    }
  }
  return groups;
};

function dfs(str, visited, strs) {
  visited.add(str);
  for (const next of strs) {
    if (!visited.has(next) && isSimilar(str, next)) {
      dfs(next, visited, strs);
    }
  }
}

function isSimilar(str1, str2) {
  let diff = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) diff++;
    if (diff > 2) return false;
  }
  return true;
}
