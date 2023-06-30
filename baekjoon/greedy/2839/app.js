let fs = require('fs');
let inputData = fs.readFileSync('./input.txt').toString().split(' ');
let input = +inputData[0];

function solution(input) {
  let rest = input % 5;
  let 몫 = Math.trunc(input / 5);

  // 정확히 5의 배수일 때
  if (rest == 0) return 몫;

  for (let i = 몫; i >= 0; i--) {
    let 배수5 = 5 * i;
    let 배수3 = input - 배수5;

    // 5는 애초에 나뉘기 때문에, 3이 나뉘는지 본다.
    if (배수3 % 3 == 0) {
      return 배수5 / 5 + 배수3 / 3;
    }
  }

  return -1;
}

const answer = solution(input);
console.log(answer);
