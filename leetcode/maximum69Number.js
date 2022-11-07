/**
 * @param {number} num
 * @return {number}
 */
// const maximum69Number = function (num) {
//   const str = num.toString();
//   const arr = str.split('');
//   const idx = arr.findIndex(n => n === '6');
//   if (idx !== -1) arr[idx] = '9';
//   return parseInt(arr.join(''), 10);
// };

// one liner
const maximum69Number = num => parseInt(num.toString().replace('6', '9'));
