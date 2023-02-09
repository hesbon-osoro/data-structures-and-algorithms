/**
 * @param {string[]} ideas
 * @return {number}
 */
const distinctNames = function (ideas) {
  // Create an array of 26 sets, each representing the starting letter of an idea name
  let abc = new Array(26).fill(0).map(s => new Set());

  // Iterate over each idea name
  for (let idea of ideas) {
    // Get the starting letter of the idea name
    let pos = idea[0].charCodeAt(0) - 'a'.charCodeAt(0);

    // Add the remaining part of the name (excluding the first letter) to the set of names starting with the same letter
    abc[pos].add(idea.slice(1));
  }

  // Initialize a variable to store the result
  let result = 0;

  // Iterate over the array of sets
  for (let idx = 0; idx < abc.length; idx++) {
    for (let j = idx + 1; j < abc.length; j++) {
      // Initialize a variable to store the count of shared suffixes
      let count = 0;

      // Iterate over the set at index idx
      for (let sfx of abc[idx]) {
        // If the suffix exists in the set at index j, increment the count
        count += abc[j].has(sfx) ? 1 : 0;
      }

      // Update the result by adding 2 * unique suffixes in set at idx * unique suffixes in set at j
      result += 2 * (abc[idx].size - count) * (abc[j].size - count);
    }
  }

  // Return the final result
  return result;
};
