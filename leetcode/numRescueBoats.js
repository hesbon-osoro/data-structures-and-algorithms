/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
const numRescueBoats = function (people, limit) {
  let boats = 0;
  let left = 0;
  let right = people.length - 1;

  // Sort people array in increasing order
  people.sort((a, b) => a - b);

  // Two-pointer approach to find minimum number of boats
  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      // move to the next lightest person
      left++;
    }
    // move to the next heaviest person
    right--;
    // count the number of boats used
    boats++;
  }

  return boats;
};
