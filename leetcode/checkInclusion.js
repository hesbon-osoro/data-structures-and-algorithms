/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = function (s1, s2) {
  const s1Len = s1.length;
  const s2Len = s2.length;
  if (s1Len > s2Len) {
    return false;
  }
  const s1Map = {};
  const s2Map = {};
  for (let i = 0; i < s1Len; i++) {
    s1Map[s1[i]] = s1Map[s1[i]] ? s1Map[s1[i]] + 1 : 1;
    s2Map[s2[i]] = s2Map[s2[i]] ? s2Map[s2[i]] + 1 : 1;
  }
  if (isSameMap(s1Map, s2Map)) {
    return true;
  }
  for (let i = s1Len; i < s2Len; i++) {
    s2Map[s2[i]] = s2Map[s2[i]] ? s2Map[s2[i]] + 1 : 1;
    s2Map[s2[i - s1Len]]--;
    if (s2Map[s2[i - s1Len]] === 0) {
      delete s2Map[s2[i - s1Len]];
    }
    if (isSameMap(s1Map, s2Map)) {
      return true;
    }
  }
  return false;
};

function isSameMap(map1, map2) {
  const keys = Object.keys(map1);
  for (const key of keys) {
    if (map1[key] !== map2[key]) {
      return false;
    }
  }
  return true;
}
