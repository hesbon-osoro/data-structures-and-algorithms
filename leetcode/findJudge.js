function findJudge(n, trust) {
  if (n == 1) return n;

  const m = {};
  trust.forEach(([a, b]) => {
    // trust on | trusted by
    if (!m[b]) m[b] = [0, 0];
    if (!m[a]) m[a] = [0, 0];
    m[a][0]++;
    m[b][1]++;
  });
  for (let key in m) {
    if (m[key][0] == 0 && m[key][1] == n - 1) return key;
  }
  return -1;
}
