/**
 * @param {number[][]} stones
 * @return {number}
 */
const removeStones = function (stones) {
  const rows = new Map();
  const cols = new Map();
  for (const [row, col] of stones) {
    rows.set(row, (rows.get(row) || new Set()).add(col));
    cols.set(col, (cols.get(col) || new Set()).add(row));
  }
  const visited = new Set();
  const visit = (i, j) => {
    const key = `${i}-${j}`;
    if (visited.has(key)) return;
    visited.add(key);
    const adjRow = rows.get(i);
    for (const col of adjRow) {
      visit(i, col);
    }
    const adjCol = cols.get(j);
    for (const row of adjCol) {
      visit(row, j);
    }
  };
  let remainingStones = 0;
  for (const [row, col] of stones) {
    const key = `${row}-${col}`;
    if (visited.has(key)) continue;
    visit(row, col);
    remainingStones++;
  }
  return stones.length - remainingStones;
};
