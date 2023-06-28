let fs = require('fs');
let data = fs.readFileSync('./input.txt').toString().split('\n');
let [n, ...coins] = data;
let [, money] = n.split(' ').map((n) => +n);
coins = coins.map((c) => +c).sort((a, b) => b - a);

solution(money, coins);

function solution(money, coins) {
  let totalNum = 0;
  for (let i = 0; i < coins.length; i++) {
    let coin = coins[i];
    if (money < coin) {
      continue;
    } else {
      const cnt = Math.trunc(money / coin);
      totalNum += cnt;
      money %= coin;

      if (money == 0) break;
    }
  }
  console.log(totalNum);
}
