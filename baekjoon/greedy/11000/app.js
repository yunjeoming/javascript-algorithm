let fs = require('fs');
let [n, ...rest] = fs.readFileSync('./input.txt').toString().split('\n');

// array: 메모리 초과
const classes = rest.map((r) => r.split(' ').map((d) => +d));
classes.sort((a, b) => a[0] - b[0]);
let total = 0;
let endTime = 0;
let restClasses = classes;
let tempClasses = [];

while (restClasses.length > 0) {
  for (let i = 0; i < restClasses.length; i++) {
    const [s, e] = restClasses[i];

    // 시작할 수 없는 조건
    if (s < endTime) {
      tempClasses.push(restClasses[i]);
      continue;
    }

    endTime = e;
  }

  total += 1;
  restClasses = tempClasses;
  tempClasses = [];
  endTime = 0;
}

console.log(total);
