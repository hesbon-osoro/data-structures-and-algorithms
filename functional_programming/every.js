const numbers = [1, 2.2, 3, 4, 5, 6, 7, 8, 9, 10];

const test = arr => arr.every(n => Number.isInteger(n));

const curry = func => ar => func(ar);

console.log(`${numbers}\nAre all integers?: ${curry(test)(numbers)}`);
