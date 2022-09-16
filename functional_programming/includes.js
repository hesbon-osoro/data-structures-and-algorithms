const integers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sample = [1, 2, 3, 4];

const curry = f => (a, b) => f(a, b);

const test = (arr1, arr2) => arr2.every(n => arr1.includes(n));

console.log(curry(test)(integers, sample));

// console.log(test(integers,sample))
