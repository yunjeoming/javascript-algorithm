/**
 * 최소힙이란?
 * 이진트리 구조로 되어있으며, 최소값이 트리 최상단에 위치함
 * 값 반환 시 최소값인 최상단 노드가 반환되고 트리의 제일 마지막 값이 최상단으로 이동하게 된다.
 * 부모 노드 인덱스 = n
 * 왼쪽 자식 노드 인덱스 = 2n
 * 오른쪽 자식 노드 인덱스 = 2n + 1
 */

class MinHeap {
  constructor() {
    this.arr = [null];
  }

  // 추가
  add(data) {
    this.arr.push(data);

    let myIdx = this.arr.length - 1;
    let parentIdx = Math.trunc(myIdx / 2);
    while (myIdx != 1 && this.arr[myIdx] < this.arr[parentIdx]) {
      this.swap(myIdx, parentIdx);
      myIdx = parentIdx;
      parentIdx = Math.trunc(myIdx / 2);
    }
  }

  // 삭제
  delete() {
    if (this.arr.length == 1) {
      return null;
    }

    this.swap(1, this.arr.length - 1);
    const returnValue = this.arr.pop();

    if (this.arr.length == 2) {
      return returnValue;
    }

    let currIdx = 1;
    let left = currIdx * 2;
    let right = left + 1;

    if (this.arr[left] == null) {
      return returnValue;
    }

    let targetIdx = this.arr[right] == null ? left : this.arr[left] < this.arr[right] ? left : right;

    while (this.arr[currIdx] > this.arr[targetIdx]) {
      this.swap(targetIdx, currIdx);

      currIdx = targetIdx;
      left = currIdx * 2;
      right = left + 1;
      if (this.arr[left] == null) {
        return returnValue;
      }
      targetIdx = this.arr[right] == null ? left : this.arr[left] < this.arr[right] ? left : right;
    }

    return returnValue;
  }

  // 스왑
  swap(firstIdx, secondIdx) {
    [this.arr[secondIdx], this.arr[firstIdx]] = [this.arr[firstIdx], this.arr[secondIdx]];
  }

  // 출력
  print() {
    console.log(this.arr.slice(1));
  }
}

const heap = new MinHeap();
heap.add(7);
heap.add(6);
heap.add(5);
heap.add(1);
heap.add(4);
heap.add(2);
heap.print();
heap.delete();
heap.delete();
heap.print();
