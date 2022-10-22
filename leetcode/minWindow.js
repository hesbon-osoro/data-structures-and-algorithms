/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function (s, t) {
  const map = {};
  for (const char of t) {
    if (!map[char]) {
      map[char] = 1;
    } else {
      map[char]++;
    }
  }
  let left = 0;
  let right = 0;
  let min = Number.MAX_SAFE_INTEGER;
  let count = t.length;
  let minLeft = 0;
  while (right < s.length) {
    if (map[s[right]] > 0) {
      count--;
    }
    map[s[right]]--;
    right++;
    while (count === 0) {
      if (right - left < min) {
        min = right - left;
        minLeft = left;
      }
      map[s[left]]++;
      if (map[s[left]] > 0) {
        count++;
      }
      left++;
    }
  }
  return min === Number.MAX_SAFE_INTEGER ? '' : s.substr(minLeft, min);
};
