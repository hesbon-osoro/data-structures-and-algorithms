const longestPalindrome = s => {
  let pal = '';
  if (s === null || s.length === 0) return pal;
  for (let i = 0; i < s.length; i++) {
    let temp1 = bubble(s, i, i);
    let temp2 = bubble(s, i, i + 1);
    pal = temp1.length > pal.length ? temp1 : pal;
    pal = temp2.length > pal.length ? temp2 : pal;
  }
  return pal;
};
const bubble = (s, left, right) => {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return s.substring(left + 1, right);
};
