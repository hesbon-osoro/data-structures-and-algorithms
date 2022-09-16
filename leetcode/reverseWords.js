function reverseWords(s) {
  return s
    .split(' ')
    .map(c => c.split('').reverse().join(''))
    .join(' ');
}
