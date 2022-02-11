// Stacks - Both array and linked list works for stacks with their own advantages.
// Implementing Stacks using Linked List
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      let tempTop = this.top;
      this.top = newNode;
      this.top.next = tempTop;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return null;
    if (this.top === this.bottom) this.bottom = null;

    // just to store in case we need it.
    const tempTop = this.top;
    this.top = this.top.next;
    this.length--;
    return this;
  }
}

const myStack = new Stack();
console.log(myStack.push('Google'));
console.log(myStack.push('Facebok'));
console.log(myStack.push('Youtube'));
console.log(myStack.peek());
console.log(myStack.pop());
