const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const digits = [1, 2, 5, 7, 11];

const curry = f => (a, b) => f(a, b);

const result = (arr1, arr2) => arr2.some(n => arr1.includes(n));

console.log(curry(result)(numbers, digits));
