function solution(maps) {
  var answer = [];
  maps = maps.map((m) => [...m].map((s) => (isNaN(+s) ? -1 : +s)));

  let dy = [1, -1, 0, 0];
  let dx = [0, 0, 1, -1];
  let total = 0;

  const dfs = (x, y) => {
    if (maps[x][y] == -1) {
      return false;
    }

    total += maps[x][y];
    maps[x][y] = -1;

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (nx < 0 || ny < 0 || ny > maps[0].length - 1 || nx > maps.length - 1) {
        continue;
      }

      dfs(nx, ny);
    }
  };

  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      dfs(i, j);
      if (total > 0) {
        answer.push(total);
      }
      total = 0;
    }
  }
  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}
