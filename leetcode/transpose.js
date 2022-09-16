function transpose(matrix) {
  let transposed = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (!transposed[j]) {
        transposed[j] = [];
      }
      transposed[j].push(matrix[i][j]);
    }
  }

  return transposed;
}

console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
