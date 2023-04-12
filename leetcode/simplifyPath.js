/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = function (path) {
  const stack = [];
  const pathArr = path.split('/');
  for (const element of pathArr) {
    const cur = element;
    if (cur === '..') {
      stack.pop();
    } else if (cur !== '.' && cur !== '') {
      stack.push(cur);
    }
  }
  return '/' + stack.join('/');
};
