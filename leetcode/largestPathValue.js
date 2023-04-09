/**
 * @param {string} colors
 * @param {number[][]} edges
 * @return {number}
 */
const largestPathValue = function (colors, edges) {
  let data = {},
    maxColorCount = -1;
  let visited = {},
    edgesMap = {},
    res;
  for (const edge of edges) {
    if (edgesMap[edge[0]] === undefined) {
      edgesMap[edge[0]] = [];
    }
    edgesMap[edge[0]].push(edge[1]);
  }
  for (let i = 0; i < colors.length; i++) {
    res = dfs(i);
    if (res === false) {
      return -1;
    } else {
      for (const [, val] of Object.entries(res)) {
        if (val > maxColorCount) {
          maxColorCount = val;
        }
      }
    }
  }

  return maxColorCount;

  function dfs(node) {
    let res = false,
      map = false;

    if (data[node] !== undefined) {
      //We have already visited all the paths from this node
      return data[node];
    }
    if (visited[node] !== undefined) {
      //This is a cycle, we got this node again while visiting of its paths
      return false;
    }
    visited[node] = true;
    if (edgesMap[node] !== undefined) {
      for (const element of edgesMap[node]) {
        res = dfs(element);
        if (res === false) {
          return false;
        }
        if (map === false) {
          map = JSON.parse(JSON.stringify(res));
        } else {
          for (const [key, val] of Object.entries(res)) {
            if (map[key] === undefined) {
              map[key] = val;
            } else {
              if (map[key] < val) {
                map[key] = val;
              }
            }
          }
        }
      }
    }
    if (map === false) {
      //If this is an edge node, we dont have any outgoing edge from this node
      map = {};
      map[colors[node]] = 1; //So the path starting from this node will have only one color, the color of node itself
    } else if (map[colors[node]] === undefined) {
      //If none of the paths starting from this node contains the same color as of this node.
      map[colors[node]] = 1;
    } else {
      //Increment the max count by 1 for the node's color
      map[colors[node]] += 1;
    }
    delete visited[node];
    data[node] = JSON.parse(JSON.stringify(map));
    return data[node];
  }
};
