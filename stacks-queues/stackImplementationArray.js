// Stacks - Both array and linked list works for stacks with their own advantages.
// Implementing Stacks using Array
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

class Stack {
  constructor() {
    this.array = [];
  }

  peek() {
    return this.array[this.array.length - 1];
  }

  push(value) {
    this.array.push(value);
    return this;
  }

  pop() {
    if (this.length === 0) return null;
    this.array.pop();
    return this;
  }
}

const myStack = new Stack();
console.log(myStack.push('Google'));
console.log(myStack.push('Facebok'));
console.log(myStack.push('Youtube'));
console.log(myStack.peek());
console.log(myStack.pop());
