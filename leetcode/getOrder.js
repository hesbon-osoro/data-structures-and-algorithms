/**
 * @param {number[][]} tasks
 * @return {number[]}
 */
const getOrder = function (tasks) {
  tasks = tasks.map(([a, b], i) => [a, b, i]).sort((a, b) => b[0] - a[0]);
  let pq = new MinPriorityQueue({
      priority: ([e, p, idx]) => p + 10 ** -7 * (idx + 1),
    }),
    curtime = tasks[tasks.length - 1][0],
    res = [];
  while (tasks.length || pq.size()) {
    while (tasks.length && curtime >= tasks[tasks.length - 1][0])
      //get everything available inside the pq
      pq.enqueue(tasks.pop());
    if (pq.size()) {
      //make the selection
      let [e, p, idx] = pq.dequeue()['element'];
      curtime += Number(p);
      res.push(idx);
    } else if (tasks.length)
      //otherwise, increment time for the next element.
      curtime = tasks[tasks.length - 1][0];
  }
  return res;
};
