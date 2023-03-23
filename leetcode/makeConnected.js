/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
const makeConnected = function (n, connections) {
  if (connections.length < n - 1) return -1;
  const uf = new UnionFind(n);
  for (const [a, b] of connections) {
    uf.union(a, b);
  }
  return uf.count - 1;
};

class UnionFind {
  constructor(n) {
    this.count = n;
    this.parent = new Array(n).fill(0).map((element, index) => index);
    this.size = new Array(n).fill(1);
  }
  find(p) {
    while (p !== this.parent[p]) {
      this.parent[p] = this.parent[this.parent[p]];
      p = this.parent[p];
    }
    return p;
  }
  union(p, q) {
    const rootP = this.find(p);
    const rootQ = this.find(q);
    if (rootP === rootQ) return;
    if (this.size[rootP] > this.size[rootQ]) {
      this.parent[rootQ] = rootP;
      this.size[rootP] += this.size[rootQ];
    } else {
      this.parent[rootP] = rootQ;
      this.size[rootQ] += this.size[rootP];
    }
    this.count--;
  }
}
