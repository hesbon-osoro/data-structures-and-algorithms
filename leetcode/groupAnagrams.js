/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
  const map = new Map();
  for (const word of strs) {
    const str = word;
    const sortedStr = str.split('').sort().join('');
    if (map.has(sortedStr)) map.get(sortedStr).push(str);
    else map.set(sortedStr, [str]);
  }
  return Array.from(map.values());
};
