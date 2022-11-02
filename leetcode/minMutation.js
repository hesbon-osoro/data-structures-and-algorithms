/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
const minMutation = function (start, end, bank) {
  const bankSet = new Set(bank);
  if (!bankSet.has(end)) {
    return -1;
  }
  const queue = [start];
  let count = 0;
  while (queue.length) {
    count++;
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const current = queue.shift();
      if (current === end) {
        return count - 1;
      }
      for (const next of getNext(current, bankSet)) {
        queue.push(next);
      }
    }
  }
  return -1;
};

const getNext = (current, bankSet) => {
  const result = [];
  for (const gene of bankSet) {
    let diff = 0;
    for (let i = 0; i < gene.length; i++) {
      if (gene[i] !== current[i]) {
        diff++;
      }
    }
    if (diff === 1) {
      result.push(gene);
    }
  }
  return result;
};
