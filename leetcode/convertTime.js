/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
const convertTime = function (current, correct) {
  let timeDiff = getTimeDiff(current, correct);
  let count = 0;
  while (timeDiff !== 0) {
    if (timeDiff >= 60) {
      timeDiff -= 60;
    } else if (timeDiff >= 15) {
      timeDiff -= 15;
    } else if (timeDiff >= 5) {
      timeDiff -= 5;
    } else {
      timeDiff -= 1;
    }
    count++;
  }
  return count;
};

const getTimeDiff = (current, correct) => {
  const [currentHour, currentMin] = current.split(':').map(Number);
  const [correctHour, correctMin] = correct.split(':').map(Number);
  const currentTotalMin = currentHour * 60 + currentMin;
  const correctTotalMin = correctHour * 60 + correctMin;
  return Math.abs(correctTotalMin - currentTotalMin);
};
