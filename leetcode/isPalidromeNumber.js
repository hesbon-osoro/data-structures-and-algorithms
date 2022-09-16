/**
 * Given an integer x, return true if x is palindrome integer.

* An integer is a palindrome when it reads the same backward as forward.

* For example, 121 is a palindrome while 123 is not.
 */

const isPalidromeNumber = x => {
  const number = x.toString();
  // const reverseNumber = number.split('').reverse().join('');
  let reverseNumber = '';
  for (let i = number.length - 1; i >= 0; i--) {
    reverseNumber += number[i];
  }
  return number === reverseNumber;
};
