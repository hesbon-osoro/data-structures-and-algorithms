/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
  if (needle === '') {
    return 0;
  }
  if (haystack === '') {
    return -1;
  }
  const needleLength = needle.length;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      if (haystack.substr(i, needleLength) === needle) {
        return i;
      }
    }
  }
  return -1;
};

// v2 using indexOf
const strStr2 = function (haystack, needle) {
  return haystack.indexOf(needle);
};
