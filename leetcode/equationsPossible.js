/*
Satisfiability of Equality Equations(Medium)
You are given an array of strings equations that represent relationships between variables where each string equations[i] is of length 4 and takes one of two different forms: "xi==yi" or "xi!=yi".Here, xi and yi are lowercase letters (not necessarily different) that represent one-letter variable names.

Return true if it is possible to assign integers to variable names so as to satisfy all the given equations, or false otherwise.
*/
/**
 * @param {string[]} equations
 * @return {boolean}
 */
const equationsPossible = function (equations) {
  const parent = Array(26)
    .fill(0)
    .map((_, i) => i);
  const find = x => {
    if (parent[x] !== x) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  };
  for (const equation of equations) {
    if (equation[1] === '=') {
      const p1 = find(equation[0].charCodeAt(0) - 'a'.charCodeAt(0));
      const p2 = find(equation[3].charCodeAt(0) - 'a'.charCodeAt(0));

      parent[p2] = p1;
    }
  }
  for (const equation of equations) {
    if (equation[1] === '!') {
      const p1 = find(equation[0].charCodeAt(0) - 'a'.charCodeAt(0));
      const p2 = find(equation[3].charCodeAt(0) - 'a'.charCodeAt(0));
      if (p1 === p2) return false;
    }
  }
  return true;
};
