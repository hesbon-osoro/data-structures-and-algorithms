/**
 * @param {number[]} arr
 * @return {number}
 */
const sumSubarrayMins = function (arr) {
  const stack = [];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[stack[stack.length - 1]] > arr[i]) {
      stack.pop();
    }
    left[i] = stack.length ? stack[stack.length - 1] : -1;
    stack.push(i);
  }
  stack.length = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) {
      stack.pop();
    }
    right[i] = stack.length ? stack[stack.length - 1] : arr.length;
    stack.push(i);
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += (i - left[i]) * (right[i] - i) * arr[i];
    sum %= 1000000007;
  }
  return sum;
};
