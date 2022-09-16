const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = arr => arr.filter(n => n % 2 === 0);

const curry = f => a => f(a);

console.log(curry(result)(data));
