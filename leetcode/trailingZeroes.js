function trailingZeroes(n) {
  let i = n;
  let count = 0;
  while (i >= 5) {
    i = Math.floor(i / 5);
    count += i;
  }
  return count;
}

console.log(trailingZeroes(30));
