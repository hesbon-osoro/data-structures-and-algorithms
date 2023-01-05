/**
 * @param {number[][]} points
 * @return {number}
 */
const findMinArrowShots = function (points) {
  // sort the array of balloon coordinates by the start coordinate
  points.sort((a, b) => a[0] - b[0]);

  // initialize the counter and the previous balloon
  let counter = 0;
  let prev = null;

  // iterate through the sorted array of balloon coordinates
  for (const point of points) {
    // check if the current balloon overlaps with the previous one
    if (prev !== null && point[0] <= prev[1]) {
      // update the end coordinate to the minimum of the current end coordinate and the previous end coordinate
      prev[1] = Math.min(prev[1], point[1]);
    } else {
      // increment the counter and set the current balloon as the previous balloon
      counter++;
      prev = point;
    }
  }

  return counter;
};
