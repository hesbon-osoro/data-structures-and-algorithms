const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const curry = f => a => f(a);

const double = arr => arr.map(n => n * 2);

console.log(`${digits}\nDoubled:${curry(double)(digits)}`);
