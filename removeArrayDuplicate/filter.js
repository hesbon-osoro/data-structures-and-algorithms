export let fruits = ['apple', 'mango', 'apple', 'orange', 'mango', 'mango'];

export const filterRemoveDuplicates = arr =>
  arr.filter((item, index) => arr.indexOf(item) === index);

console.log(filterRemoveDuplicates(fruits));
