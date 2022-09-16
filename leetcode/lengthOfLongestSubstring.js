/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  let startIndex = 0;
  let hashMap = new Map();
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (hashMap.has(char)) {
      const index = hashMap.get(char);
      const newCount = i - startIndex + (startIndex > index ? 1 : 0);
      count = Math.max(count, newCount);
      startIndex = Math.max(startIndex, index);
    } else {
      count = Math.max(count, i - startIndex + 1);
    }
    hashMap.set(char, i + 1);
  }
  return count;
  // Using set
  // const set = new Set();
  // let count = 0
  // let indexCount = 0
  // for (let i = 0; i < s.length; i++) {
  //     while(set.has(s[i])) {
  //         set.delete(s[indexCount])
  //         indexCount++
  //     }
  //     set.add(s[i])
  //     count = Math.max(count, set.size)
  // }
  // return count
};
