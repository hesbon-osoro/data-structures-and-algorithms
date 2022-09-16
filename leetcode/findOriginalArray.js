/*
An integer array original is transformed into a doubled array changed by appending twice the value of every element in original, and then randomly shuffling the resulting array.

Given an array changed, return original if changed is a doubled array. If changed is not a doubled array, return an empty array. The elements in original may be returned in any order.
/*
/**
 * @param {number[]} changed
 * @return {number[]}
 */
const findOriginalArray = function (changed, result = []) {
  let { length } = changed;
  changed.sort((a, b) => a - b);
  for (let i = 0; i < length; i++) {
    let value = changed[i];
    if (value !== -1) {
      let doubleIndex = changed.indexOf(value * 2, i + 1);
      if (doubleIndex > -1) {
        result.push(value);
        changed[i] = -1;
        changed[doubleIndex] = -1;
      } else {
        return [];
      }
    }
  }

  return result;
};
