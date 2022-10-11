/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = (a, b) => {
  a = BigInt('0b' + a);
  b = BigInt('0b' + b);
  return (a + b).toString(2);
};
