var isPalindrome = function (s) {
  return (
    s
      .replace(/[^a-z0-9]/gi, '')
      .split('')
      .reverse()
      .join('')
      .toLowerCase() === s.toLowerCase().replace(/[^a-z0-9]/gi, '')
  );
};
