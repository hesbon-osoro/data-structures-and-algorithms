const digits = [1, 2, 3, 100, 14];

const curry = f => a => f(a);

const result = arr => arr.find(a => a > 10);

console.log(`${digits}\nFirst digit > 10: ${curry(result)(digits)}`);
