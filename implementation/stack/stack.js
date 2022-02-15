/**
 * Represents a Stack.
 */
class Stack {
  /**
   * Initializes an empty stack.
   */
  constructor() {
    this.array = [];
  }

  /**
   * Displays the top element in the stack.
   * @returns {Number/String} - The top element in the stack.
   */
  peek() {
    return this.array[this.array.length - 1];
  }

  /**
   * Adds the given element to the top of the stack.
   * @param {Number/String} value - The element to be added to the stack.
   * @returns {Object} - The stack.
   */
  push(value) {
    this.array.push(value);
    return this;
  }

  /**
   * Removes the top element from the stack.
   * @returns {Object} - The stack.
   */
  pop() {
    if (this.length === 0) return null;
    this.array.pop();
    return this;
  }
}

const myStack = new Stack();
myStack.push(1);
myStack.push('Discord');
myStack.push('YouTube');
myStack.push('Twitter');

console.log(myStack.peek());
myStack.pop();

console.log(myStack);
