const depthFirstPrint = (graph, source) => {
  const stack = [source];
  while (stack.length) {
    const current = stack.pop();
    console.log(current);
    for (let neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }
};

const graph = {
  a: ['c', 'b'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
};
console.log('Depth First Search:');
depthFirstPrint(graph, 'a');

console.log(`Recursive:`);
const depthFirstPrintRecursive = (graph, source) => {
  console.log(source);
  for (let neighbor of graph[source]) {
    depthFirstPrintRecursive(graph, neighbor);
  }
};
const graph1 = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
};
depthFirstPrintRecursive(graph1, 'a');

console.log('Breadth First Search:');
const breadthFirstPrint = (graph, source) => {
  const queue = [source];
  while (queue.length) {
    const current = queue.shift();
    console.log(current);
    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
};
breadthFirstPrint(graph, 'a');
const breadthFirstPrintRecursive = (graph, source) => {
  console.log(source);
  for (let neighbor of graph[source]) {
    breadthFirstPrintRecursive(graph, neighbor);
  }
};
console.log('Recursive:');
breadthFirstPrintRecursive(graph, 'a');
