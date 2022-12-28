/**
 * @param {number[]} piles
 * @param {number} k
 * @return {number}
 */
const minStoneSum = function (piles, k) {
  const queue = new MaxPriorityQueue();
  let sum = 0;
  for (const pile of piles) {
    sum += pile;
    queue.enqueue(pile);
  }
  let remove = 0;
  let t = 0;
  while (!queue.isEmpty() && t < k) {
    let cur = queue.dequeue().element;
    let half = Math.floor(cur / 2);
    remove += half;
    queue.enqueue(cur - half);
    t++;
  }
  return sum - remove;
};
