/**
 * @param {character[]} chars
 * @return {number}
 */
const compress = function (chars) {
  let count = 1;
  let index = 0;
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === chars[i + 1]) {
      count++;
    } else {
      chars[index] = chars[i];
      index++;
      if (count > 1) {
        const str = count.toString();
        for (const char of str) {
          chars[index] = char;
          index++;
        }
      }
      count = 1;
    }
  }
  return index;
};
