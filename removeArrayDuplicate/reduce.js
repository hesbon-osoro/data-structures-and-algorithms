import { fruits } from './filter.js';

const reduceRemoveDuplicates = arr =>
  arr.reduce((acc, curr) => {
    if (!acc.includes(curr)) {
      acc.push(curr);
    }
    return acc;
  }, []);

console.log(reduceRemoveDuplicates(fruits));
