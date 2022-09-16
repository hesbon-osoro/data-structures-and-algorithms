function flipAndInvertImage(image) {
  for (let i = 0; i < image.length; i++) {
    image[i].reverse();
    for (let j = 0; j < image[i].length; j++) {
      if (image[i][j] === 1) {
        image[i][j] = 0;
      } else {
        image[i][j] = 1;
      }
    }
  }
  return image;
}

console.log(
  flipAndInvertImage([
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0],
  ])
);
