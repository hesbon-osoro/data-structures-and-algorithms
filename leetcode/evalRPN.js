/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = function (tokens) {
  const stack = [];
  const ops = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => (a / b) | 0,
  };
  for (const token of tokens) {
    if (ops[token]) {
      const b = stack.pop();
      const a = stack.pop();
      stack.push(ops[token](a, b));
    } else {
      stack.push(parseInt(token));
    }
  }
  return stack[0];
};
