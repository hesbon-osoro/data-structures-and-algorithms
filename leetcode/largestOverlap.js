/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
const largestOverlap = function (img1, img2) {
  const n = img1.length;
  const A = [];
  const B = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (img1[i][j] === 1) A.push(i * 100 + j);
      if (img2[i][j] === 1) B.push(i * 100 + j);
    }
  }
  const count = new Map();
  let res = 0;
  for (const a of A) {
    for (const b of B) {
      const diff = a - b;
      count.set(diff, (count.get(diff) || 0) + 1);
      res = Math.max(res, count.get(diff));
    }
  }
  return res;
};
