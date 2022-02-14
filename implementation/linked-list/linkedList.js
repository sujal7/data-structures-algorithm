/**
 * Represents a Singly Linked List.
 */
class LinkedList {
  /**
   * Initializes the first element in the Linked List.
   * @param {Number/String} value - The element to be added to the Linked List.
   */
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    // Tail is same as head in case of a single element Linked List.
    this.tail = this.head;
    this.length = 1;
  }

  /**
   * Adds value to the tail of Linked List.
   * Time Complexity: O(1)
   * @param {Number/String} value - The element to be added to the Linked List.
   * @returns {Object} - The Linked List
   */
  append(value) {
    const newNode = {
      value: value,
      next: null,
    };

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  /**
   * Adds value to the head of Linked List.
   * Time Complexity: O(1)
   * @param {Number/String} value - The element to be added to the Linked List.
   * @returns {Object} - The Linked List
   */
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  /**
   * Prints the Linked List.
   * @returns {Object} - The array representation of the Linked List.
   */
  printList() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode != null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return arr;
  }

  /**
   * Inserts element at the given index in the Linked List.
   * Time Complexity: O(n)
   * @param {Number} index - The index at which the element is to be inserted.
   * @param {Number/String} value - The element to be inserted.
   * @returns {Object} - The Linked List
   */
  insert(index, value) {
    // If index is 0, just prepend the value.
    if (index === 0) {
      this.prepend(value);

      return this;
    }

    // If index is greater than the length of the Linked List, just append the value.
    if (index >= this.length) {
      this.append(value);

      return this;
    }

    const newNode = {
      value: value,
      next: null,
    };

    let currentNode = this.head;
    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next;
    }
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    this.length++;

    return this;
  }

  /**
   * Removes element at the given index in the Linked List.
   * Time Complexity: O(n)
   * @param {Number} index - The index at which the element is to be removed.
   * @returns {Object} - The Linked List
   */
  remove(index) {
    // If index is 0, just remove the head.
    if (index === 0) {
      let nodeToBeRemoved = this.head;
      this.head = nodeToBeRemoved.next;
      this.length--;
      return this;
    }

    // Removes the last element if given index is greater than the length of the Linked List.
    if (index >= this.length) index = this.length - 1;

    let currentNode = this.head;
    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next;
    }
    let nodeToBeRemoved = currentNode.next;
    currentNode.next = nodeToBeRemoved.next;
    this.length--;

    return this;
  }
}

// Create an object of Linked List with initial element.
const myLinkedList = new LinkedList(5);

// Append elements to the Linked List.
myLinkedList.append(10);
myLinkedList.append(50);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(64);

// Prepend elements to the Linked List.
myLinkedList.prepend(0);

// Insert elements at the given index in the Linked List.
myLinkedList.insert(3, 12);
myLinkedList.insert(1, 99);

console.log('Object representation');
// Remove element at the given index in the Linked List.
console.log(myLinkedList.remove(0));

console.log('Array representation');
console.log(myLinkedList.printList());
