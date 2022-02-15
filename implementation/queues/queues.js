/**
 * Represents a Node/Element in the queue.
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * Represents a Queue.
 */
class Queue {
  /**
   * Initializes an empty queue.
   */
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  /**
   * Displays the first element in the queue.
   * @returns
   */
  peek() {
    return this.first;
  }

  /**
   * Adds new element to the back of the queue.
   * @param {String} value - The element to be added to the queue.
   * @returns {Object} - The queue.
   */
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

  /**
   * Removes the first element from the queue.
   * @returns {Object} - The queue.
   */
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
myQueue.enqueue('Ram');
myQueue.enqueue('Hari');
myQueue.enqueue('Shyam');
myQueue.enqueue('Gita');
myQueue.enqueue('John');
console.log(myQueue.peek());
console.log(myQueue.dequeue());
