// Queue - We use linked list to implement queue, if we use array we need to change position of all
// Queue implementation using Linked List

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (this.length === 0) {
      return null;
    }
    if (this.length === 1) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return this;
  }
}

const myQueue = new Queue();
console.log(myQueue.enqueue('Ram'));
console.log(myQueue.enqueue('Shyam'));
console.log(myQueue.enqueue('Hari'));
console.log(myQueue.peek());
console.log(myQueue.dequeue());
