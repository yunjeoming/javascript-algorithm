let fs = require('fs');
let data = fs.readFileSync('./input.txt').toString();

let bases = data.split('-');

const newValues = bases.map((base) => {
  return base.includes('+')
    ? base.split('+').reduce((prev, curr) => {
        return prev + +curr;
      }, 0)
    : +base;
});

const answer = newValues.reduce((prev, curr, index) => {
  if (index == 0) {
    return curr;
  }

  return prev - curr;
}, 0);

console.log(answer);
