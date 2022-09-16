const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const curry = f => a => f(a);

const sum = arr => arr.reduce((a, b) => a + b, 0);

console.log(sum(digits));
