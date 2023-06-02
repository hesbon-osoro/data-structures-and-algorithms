/**
 * @param {number[][]} bombs
 * @return {number}
 */
const maximumDetonation = function (bombs) {
  const n = bombs.length;
  let max = 0;
  // For each Bombs
  for (let i = 0; i < n; i++) {
    const arr = new Array(n).fill(false);
    const queue = [i];
    // Use BFS algorithm
    while (queue.length !== 0) {
      let temp = queue[0];
      queue.shift();
      if (arr[temp]) continue;
      arr[temp] = true;
      for (let j = 0; j < n; j++) {
        if (!arr[j]) {
          // Geometry Calculation
          let dist = Math.pow(
            Math.pow(bombs[temp][0] - bombs[j][0], 2) +
              Math.pow(bombs[temp][1] - bombs[j][1], 2),
            0.5
          );
          if (dist <= bombs[temp][2]) queue.push(j);
        }
      }
    }
    max = Math.max(max, arr.filter(e => e).length);
    if (max === n) return max;
  }
  return max;
};
