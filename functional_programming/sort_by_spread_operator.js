const digits = [2, 1, 4, 5, 3, 6, 10, 7, 9, 8];

const curry = f => a => f(a);
// The spread operator creates shallow copy of the original array
// this removes the effect of array mutation

const ascend = arr => [...arr].sort((a, b) => a - b);

const descend = arr => ascend(arr).reverse();
const descend2 = arr => [...arr].sort((a, b) => b - a);

console.log(`${digits}\nAscend: ${curry(ascend)(digits)}`);
console.log(`${digits}\nDescend: ${curry(descend)(digits)}`);
console.log(`${digits}\nDescend2: ${curry(descend2)(digits)}`);
console.log(digits);
