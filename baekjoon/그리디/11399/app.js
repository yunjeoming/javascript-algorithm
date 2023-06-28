let fs = require('fs');
let data = fs.readFileSync('./input.txt').toString().split('\n');
const [n, arr] = data;
const arrData = arr.split(' ').map((d) => +d);

const value = solution(arrData);
console.log(value);

function solution(data) {
  data.sort((a, b) => a - b);
  let waitTime = 0;
  let totalTime = 0;
  for (let i = 0; i < data.length; i++) {
    waitTime += data[i];
    totalTime += waitTime;
  }
  return totalTime;
}
