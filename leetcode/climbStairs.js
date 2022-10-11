const climbStairs = function (n) {
  if (memo.has(n)) return memo.get(n);
  memo.set(n, climbStairs(n - 1) + climbStairs(n - 2));
  return memo.get(n);
};

const memo = new Map();

for (let n = 0; n < 4; n++) memo.set(n, n);
