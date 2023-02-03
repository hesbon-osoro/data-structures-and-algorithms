/**
 * @param {number[]} cards
 * @return {boolean}
 */
const judgePoint24 = function (cards) {
  //converting all the integers to decimal numbers.
  cards = cards.map(card => Number(card.toFixed(4)));

  //Function that calculates all possible values after all operations on the numbers passed
  const computeTwocards = (num1, num2) => {
    return [
      num1 + num2,
      num1 - num2,
      num2 - num1,
      num1 * num2,
      num1 / num2,
      num2 / num1,
    ];
  };

  const dfs = list => {
    let size = list.length;
    if (size === 1) {
      return Math.abs(list[0] - 24) < 0.001;
    }

    for (let i = 0; i < size; i++) {
      for (let j = i + 1; j < size; j++) {
        let nextRound = [];
        for (let k = 0; k < size; k++) {
          if (k !== i && k !== j) nextRound.push(list[k]);
        }
        for (let val of computeTwocards(list[i], list[j])) {
          nextRound.push(val);
          if (dfs(nextRound)) return true;
          else nextRound.pop();
        }
      }
    }
    return false;
  };

  return dfs(cards);
};
