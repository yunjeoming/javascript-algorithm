let fs = require('fs');
let [info, ...rest] = fs.readFileSync('./input.txt').toString().trim().split('\n');
let [n, m, start] = info.split(' ').map((i) => +i);
rest = rest.map((r) => r.split(' ').map((a) => +a));
let graph = Array.from({ length: n + 1 }).map((a) => new Array(n + 1).fill(0));

for (let r of rest) {
  const [x, y] = r;
  graph[x][y] = 1;
  graph[y][x] = 1;
}

let visited = new Array(n + 1).fill(false);
let dfsAnswer = [];
let bfsAnswer = [];

const dfs = (idx) => {
  if (visited[idx]) {
    return;
  }

  visited[idx] = true;
  dfsAnswer.push(idx);

  for (let i = 1; i < graph.length; i++) {
    if (graph[idx][i] == 1 && !visited[i]) {
      dfs(i);
    }
  }
};
const bfs = (idx) => {
  let queue = [];
  queue.push(idx);

  while (queue.length > 0) {
    let targetIdx = queue.shift();
    visited[targetIdx] = true;
    bfsAnswer.push(targetIdx);

    for (let i = 1; i < graph.length; i++) {
      if (graph[targetIdx][i] == 1 && !visited[i] && !queue.includes(i)) {
        queue.push(i);
      }
    }
  }
};

dfs(start);
visited.fill(false);
bfs(start);

console.log(dfsAnswer.join(' '));
console.log(bfsAnswer.join(' '));
