/**
 * @param {string} s
 * @return {number}
 */
const partitionString = function (s) {
  let cur = [];
  let parts = 1;
  // `[...s]` is similar to `s.split("")`
  for (let char of [...s]) {
    if (cur.includes(char)) {
      parts++;
      cur = [];
    }
    cur.push(char);
  }
  return parts;
};
