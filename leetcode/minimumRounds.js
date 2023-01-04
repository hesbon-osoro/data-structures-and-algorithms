/**
 * @param {number[]} tasks
 * @return {number}
 */
const minimumRounds = function (tasks) {
  let counter = {},
    res = 0;
  //Count frequency of each task
  for (let task of tasks) {
    counter[task] = (counter[task] || 0) + 1;
  }
  //Go through the task and try to get 3(max) done each time.
  for (let count in counter) {
    //If the task only show up Once, that means not possible.
    if (counter[count] === 1) return -1;
    res += Math.ceil(counter[count] / 3);
  }
  return res;
};
