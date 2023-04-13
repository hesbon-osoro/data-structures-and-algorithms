/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
const validateStackSequences = function (pushed, popped) {
  const stack = [];
  let i = 0;
  for (const element of pushed) {
    stack.push(element);
    while (stack.length && stack[stack.length - 1] === popped[i]) {
      stack.pop();
      i++;
    }
  }
  return stack.length === 0;
};
