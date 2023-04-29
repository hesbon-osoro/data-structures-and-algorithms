/**
 * @param {number} n
 * @param {number[][]} edgeList
 * @param {number[][]} queries
 * @return {boolean[]}
 */
const distanceLimitedPathsExist = function (n, edgeList, queries) {
  const result = [];
  const sortedEdgeList = edgeList.sort((a, b) => a[2] - b[2]);
  const sortedQueries = queries
    .map((query, i) => [...query, i])
    .sort((a, b) => a[2] - b[2]);
  const uf = new UnionFind(n);
  let i = 0;
  sortedQueries.forEach(query => {
    while (i < sortedEdgeList.length && sortedEdgeList[i][2] < query[2]) {
      uf.union(sortedEdgeList[i][0], sortedEdgeList[i][1]);
      i++;
    }
    result[query[3]] = uf.find(query[0]) === uf.find(query[1]);
  });
  return result;
};

class UnionFind {
  constructor(n) {
    this.parent = new Array(n).fill(0).map((_, i) => i);
    this.rank = new Array(n).fill(0);
  }
  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }
  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX === rootY) {
      return false;
    }
    if (this.rank[rootX] < this.rank[rootY]) {
      this.parent[rootX] = rootY;
    } else if (this.rank[rootX] > this.rank[rootY]) {
      this.parent[rootY] = rootX;
    } else {
      this.parent[rootY] = rootX;
      this.rank[rootX]++;
    }
    return true;
  }
}
