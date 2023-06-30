let fs = require('fs');
let [n, ...rest] = fs.readFileSync('./input.txt').toString().trim().split('\n');

class Heap {
  constructor() {
    this.heap = [0];
  }

  swap(a, b) {
    let temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
  }

  push(data) {
    this.heap.push(data);

    let currIdx = this.heap.length - 1;
    let parentIdx = ~~(currIdx / 2);

    while (currIdx > 1 && this.heap[currIdx] < this.heap[parentIdx]) {
      this.swap(currIdx, parentIdx);

      currIdx = parentIdx;
      parentIdx = ~~(currIdx / 2);
    }
  }

  pop() {
    if (this.heap.length == 1) {
      return 0;
    }

    this.swap(1, this.heap.length - 1);
    const returnValue = this.heap.pop();

    let currIdx = 1;
    let left = currIdx * 2;
    let right = left + 1;

    while (this.heap[left] != null) {
      let targetIdx = this.heap[right] != null ? (this.heap[left] <= this.heap[right] ? left : right) : left;
      if (this.heap[currIdx] > this.heap[targetIdx]) {
        this.swap(currIdx, targetIdx);
        currIdx = targetIdx;
        left = currIdx * 2;
        right = left + 1;
      } else {
        break;
      }
    }

    return returnValue;
  }

  getSize() {
    return this.heap.length - 1;
  }
}

const heap = new Heap();
for (let card of rest) {
  if (card) {
    heap.push(+card.trim());
  }
}
let total = 0;

for (let i = 1; i < n; i++) {
  let first = heap.pop();
  let second = heap.pop();
  let newValue = first + second;
  total += newValue;
  heap.push(newValue);
}

console.log(total);
