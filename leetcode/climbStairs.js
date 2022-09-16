var climbStairs = function (n) {
  return factorial(n) / (factorial(2) * factorial(n - 2));
};

const factorial = n => {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
};
let n = 2,
  r = 2;
console.log(factorial(n) / (factorial(r) * factorial(n - r)));
