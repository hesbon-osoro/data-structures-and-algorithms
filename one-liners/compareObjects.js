const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 2 };
console.log(obj1 === obj2); // false

const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);

// examples
isEqual({ a: 1, b: 2 }, { a: 1, b: 2 }); // true
isEqual({ a: 1, b: 2 }, { a: 1, b: 3 }); // false
// works with arrays too
isEqual([1, 2, 3], [1, 2, 3]); // true
isEqual([1, 2, 3], [1, 2, 4]); // false
