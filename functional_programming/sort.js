const digits = [2, 1, 4, 5, 3, 6, 10, 7, 9, 8];

const curry = f => a => f(a);

const ascend = arr => arr.sort((a, b) => a - b);

const descend = arr => ascend(arr).reverse();
const descend2 = arr => arr.sort((a, b) => b - a);

console.log(`${digits}\nAscend: ${curry(ascend)(digits)}`);
console.log(`${digits}\nDescend: ${curry(descend)(digits)}`);
console.log(`${digits}\nDescend2: ${curry(descend2)(digits)}`);

// These functions cause array mutation,
// should opt for spread operator
console.log(digits);
