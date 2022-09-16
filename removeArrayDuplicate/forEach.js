import { fruits } from './filter.js';

export const removeDuplicates = arr => {
  let unique = [];
  arr.forEach(e => {
    if (!unique.includes(e)) {
      unique.push(e);
    }
  });
  return unique;
};

console.log(removeDuplicates(fruits));
