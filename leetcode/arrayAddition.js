function ArrayAdditionI(arr) {
  let sorted = arr.sort((a, b) => a - b);
  let largest = Math.max(...sorted);
  let ex = [];
  for (let i = 0; i < sorted.length - 1; i++) {
    ex.push(sorted[i]);
  }
  let sum = [];
  for (let i = 0; i < ex.length; i++) {
    let s = 0;
    for (let j = 0; j < ex.length - 1; j++) {
      s += ex[i] + ex[j];
      sum.push(s);
    }
  }
  // console.log(sum)
  if (sum.includes(largest)) return true;

  return false;
}
