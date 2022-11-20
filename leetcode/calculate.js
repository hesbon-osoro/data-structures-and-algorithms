/**
 * @param {string} s
 * @return {number}
 */
const calculate = function (s) {
  let stack = [];
  //   remove white spaces
  s = s.replace(/\s/g, '');
  let sign = '+';
  let digitPattern = /\d/;

  for (let i = 0; i < s.length; i++) {
    if (digitPattern.test(s[i])) {
      // put the whole number into the stack
      if (digitPattern.test([s[i - 1]])) {
        stack[stack.length - 1] += s[i];
      } else {
        stack.push(sign + s[i]);
      }
    } else if (s[i] == '+' || s[i] == '-') {
      sign = s[i];
    } else if (s[i] == '(') {
      // put '+(' or '-(' into the stack
      stack.push(sign + s[i]);
      sign = '+';
    } else {
      // case s[i]==')'
      let sum = 0;
      let temp = 0;
      while (temp !== '-(' && temp !== '+(') {
        sum += parseInt(temp);
        temp = stack.pop();
      }
      stack.push(temp[0] == '+' ? sum : -sum);
    }
  }
  let result = 0;
  while (stack.length) {
    result += parseInt(stack.pop());
  }
  return result;
};
