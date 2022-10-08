// function reverseWords(s) {
//   let res = [],
//     start = 0;
//   // every word will put into an array
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] !== ' ') {
//       start = i;
//       while (s[i] !== ' ' && i < s.length) {
//         i++;
//       }
//       res.push(s.slice(start, i));
//     }
//   }
//   return res.reverse().join(' ');
// }
console.log(reverseWords('the sky is blue'));

// One - Liner
function reverseWords(s) {
  return s.split(' ').filter(Boolean).reverse().join(' ');
}
