/*
The Skyline Problem(Hard)
A city's skyline is the outer contour of the silhouette formed by all the buildings in that city when viewed from a distance. Given the locations and heights of all the buildings, return the skyline formed by these buildings collectively.
*/
/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
const getSkyline = function (buildings) {
  const result = [];
  const points = [];
  for (let building of buildings) {
    points.push([building[0], building[2]]);
    points.push([building[1], -building[2]]);
  }
  let heights = [];

  points.sort((a, b) => b[1] - a[1]);
  points.sort((a, b) => a[0] - b[0]);

  for (let point of points) {
    if (point[1] > 0) {
      heights.push(point[1]);
    } else {
      heights.splice(heights.indexOf(-point[1]), 1);
    }
    let currHeight = heights.length === 0 ? 0 : Math.max(...heights);
    if (result.length === 0 || result[result.length - 1][1] !== currHeight)
      result.push([point[0], currHeight]);
  }
  return result;
};
