/**
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeight = function (stones) {
  const sortedStones = stones.sort((a, b) => b - a);
  while (sortedStones.length > 1) {
    const first = sortedStones.shift();
    const second = sortedStones.shift();
    if (first !== second) {
      sortedStones.push(first - second);
      sortedStones.sort((a, b) => b - a);
    }
  }
  return sortedStones.length ? sortedStones[0] : 0;
};
