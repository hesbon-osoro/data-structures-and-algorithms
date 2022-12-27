/*
You have n bags numbered from 0 to n - 1. You are given two 0-indexed integer arrays capacity and rocks. The ith bag can hold a maximum of capacity[i] rocks and currently contains rocks[i] rocks. You are also given an integer additionalRocks, the number of additional rocks you can place in any of the bags.

Return the maximum number of bags that could have full capacity after placing the additional rocks in some bags.

*/
/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
const maximumBags = function (capacity, rocks, additionalRocks) {
  let needed = [];

  let i = 0;
  while (i < capacity.length) {
    needed[i] = capacity[i] - rocks[i];
    i++;
  }
  needed.sort((a, b) => a - b);

  for (let i = 0; i < needed.length; i++) {
    if (needed[i] > additionalRocks) {
      break;
    }
    additionalRocks = additionalRocks - needed[i];
    needed[i] = 0;
  }
  let count = 0;
  for (let char of needed) {
    if (char === 0) count++;
  }

  return count;
};
