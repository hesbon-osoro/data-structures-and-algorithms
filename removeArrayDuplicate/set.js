import { fruits } from './filter.js';

export const setRemoveDuplicates = arr => [...new Set(arr)];

console.log(setRemoveDuplicates(fruits));
