/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
const binarySearch = (t, p, success) => {
  let l = 0,
    r = p.length - 1,
    mid;
  while (l <= r) {
    mid = parseInt((l + r) / 2);
    if (t * p[mid] < success) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return l;
};

const successfulPairs = function (spells, potions, success) {
  let n = spells.length,
    p = potions.length,
    temp;
  let ans = new Array(n);
  potions.sort((a, b) => a - b);
  for (let i = 0; i < n; ++i) {
    temp = binarySearch(spells[i], potions, success);
    console.log(temp);
    ans[i] = temp == p ? 0 : p - temp;
  }
  return ans;
};
