function merge(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let res = [intervals[0]];
  for (let [start, end] of intervals) {
    if (start <= res[res.length - 1][1]) {
      const [startPrev, endPrev] = res.pop();
      res.push([Math.min(startPrev, start), Math.max(endPrev, end)]);
    } else {
      res.push([start, end]);
    }
  }
  return res;
}
console.log(
  merge([
    [1, 4],
    [4, 5],
  ])
);

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
