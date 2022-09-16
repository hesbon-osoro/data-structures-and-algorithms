function findAnagrams(s, p) {
  if (s.length < p.length) return [];
  const MAX = 26;
  const M = p.length;
  const N = s.length;
  const arrP = Array(26).fill(0);
  const arrS = Array(26).fill(0);
  const base = 'a'.charCodeAt(0);

  function compare(arrS, arrP) {
    for (let i = 0; i < MAX; i++) {
      if (arrS[i] !== arrP[i]) return false;
    }
    return true;
  }
  for (let i = 0; i < M; i++) {
    const indexP = p.charCodeAt(i) - base;
    // console.log(indexP);
    arrP[indexP]++;
    const indexS = s.charCodeAt(i) - base;
    arrS[indexS]++;
  }
  let result = [];
  for (let i = M; i <= N; i++) {
    if (compare(arrS, arrP)) {
      result.push(i - M);
    }
    arrS[s.charCodeAt(i - M) - base]--;
    arrS[s.charCodeAt(i) - base]++;
  }
  return result;
}

console.log(findAnagrams('cbaebabacd', 'abc'));
