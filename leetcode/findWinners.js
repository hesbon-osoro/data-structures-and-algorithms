/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
const findWinners = function (matches) {
  const players = new Set();
  const losers = new Map();
  for (const [winner, loser] of matches) {
    players.add(winner);
    players.add(loser);
    losers.set(loser, (losers.get(loser) || 0) + 1);
  }
  const result = [[], []];
  for (const player of players) {
    if (losers.has(player) === false) result[0].push(player);
    if (losers.get(player) === 1) result[1].push(player);
  }
  return result.map(arr => arr.sort((a, b) => a - b));
};
