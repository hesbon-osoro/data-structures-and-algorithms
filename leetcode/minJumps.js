/**
 * @param {number[]} arr
 * @return {number}
 */
const minJumps = function (arr) {
  const n = arr.length;
  const index = new Map();
  for (let i = 0; i < n; i++) {
    if (!index.has(arr[i])) {
      index.set(arr[i], []);
    }
    index.get(arr[i]).push(i);
  }
  const queue = [0];
  const visited = new Set();
  let step = 0;
  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const cur = queue.shift();
      if (cur === n - 1) {
        return step;
      }
      if (cur - 1 >= 0 && !visited.has(cur - 1)) {
        queue.push(cur - 1);
        visited.add(cur - 1);
      }
      if (cur + 1 < n && !visited.has(cur + 1)) {
        queue.push(cur + 1);
        visited.add(cur + 1);
      }
      if (index.has(arr[cur])) {
        for (const next of index.get(arr[cur])) {
          if (!visited.has(next)) {
            queue.push(next);
            visited.add(next);
          }
        }
        index.delete(arr[cur]);
      }
    }
    step++;
  }
  return -1;
};
