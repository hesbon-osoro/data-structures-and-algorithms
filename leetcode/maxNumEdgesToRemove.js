/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
const maxNumEdgesToRemove = function (n, edges) {
  const dsu = new DSU(n);
  let res = 0;
  for (const [type, u, v] of edges) {
    if (type === 3) {
      if (!dsu.union(u, v)) res++;
    }
  }
  const dsu1 = dsu.clone();
  const dsu2 = dsu.clone();
  for (const [type, u, v] of edges) {
    if (type === 1) {
      if (!dsu1.union(u, v)) res++;
    } else if (type === 2) {
      if (!dsu2.union(u, v)) res++;
    }
  }
  if (dsu1.count !== 1 || dsu2.count !== 1) return -1;
  return res;
};

class DSU {
  constructor(n) {
    this.p = [...Array(n + 1).keys()];
    this.count = n;
  }
  find(x) {
    if (this.p[x] !== x) this.p[x] = this.find(this.p[x]);
    return this.p[x];
  }
  union(x, y) {
    const px = this.find(x);
    const py = this.find(y);
    if (px === py) return false;
    this.p[px] = py;
    this.count--;
    return true;
  }
  clone() {
    const dsu = new DSU(0);
    dsu.p = [...this.p];
    dsu.count = this.count;
    return dsu;
  }
}
