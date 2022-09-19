const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: [],
};

const hasPath = (graph, src, dst) => {
  let stack = [src];
  //   let path = [];
  while (stack.length) {
    let current = stack.pop();
    for (let neighbor of graph[current]) {
      //   path.push(neighbor);
      // avoid storing in array
      if (neighbor === dst) return true;
      stack.push(neighbor);
    }
  }
  //   return path.includes(dst);
  return false;
};
console.log('Depth First:');
console.log(hasPath(graph, 'f', 'k')); // true
console.log(hasPath(graph, 'f', 'j')); // false
console.log(`Recursive:`);
const hasPathRecurse = (graph, src, dst) => {
  if (src === dst) return true;
  for (let neighbor of graph[src]) {
    if (hasPathRecurse(graph, neighbor, dst)) return true;
  }
  return false;
};
console.log(hasPathRecurse(graph, 'f', 'k')); // true
console.log(hasPathRecurse(graph, 'f', 'j')); // false

console.log('Breadth First:');
const hasPathBFS = (graph, src, dst) => {
  let queue = [src];
  while (queue.length) {
    let current = queue.shift();
    for (let neighbor of graph[current]) {
      if (neighbor === dst) return true;
      queue.push(neighbor);
    }
  }
  return false;
};
console.log(hasPathBFS(graph, 'f', 'k')); // true
