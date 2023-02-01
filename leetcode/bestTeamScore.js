/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
const bestTeamScore = function (scores, ages) {
  let numberOfPlayers = scores.length;
  let players = [];
  for (let i = 0; i < numberOfPlayers; i++) {
    players.push([scores[i], ages[i]]);
  }
  players.sort((player1, player2) => {
    if (player1[1] !== player2[1]) {
      return player1[1] - player2[1];
    } else {
      return player1[0] - player2[0];
    }
  });
  let bestScores = Array(numberOfPlayers).fill(0);
  for (let i = 0; i < numberOfPlayers; i++) {
    for (let j = 0; j < numberOfPlayers; j++) {
      if (players[j][0] <= players[i][0]) {
        bestScores[i] = Math.max(bestScores[i], bestScores[j]);
      }
    }
    bestScores[i] += players[i][0];
  }
  return Math.max(...bestScores);
};
