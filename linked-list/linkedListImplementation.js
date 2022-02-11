// 5-->15-->23

// Structure of linked list
// let myLinkedList = {
//   head: {
//     value: 5,
//     next: {
//       value: 15,
//       next: {
//         value: 23,
//         next: null,
//       },
//     },
//   },
// };

/**
 * Represents a singly linked list
 */
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  // O(1)
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

  // O(1)
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

  printList() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode != null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return arr;
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);

      return this.printList();
    }

    if (index >= this.length) {
      this.append(value);

      return this.printList();
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

    return this.printList();
  }

  // O(n)
  remove(index) {
    if (index === 0) {
      let nodeToBeRemoved = this.head;
      this.head = nodeToBeRemoved.next;
      this.length--;
      return nodeToBeRemoved.value;
    }

    if (index >= this.length) index = this.length - 1;

    let currentNode = this.head;
    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next;
    }
    let nodeToBeRemoved = currentNode.next;
    currentNode.next = nodeToBeRemoved.next;
    this.length--;

    return nodeToBeRemoved.value;
  }
}

const myLinkedList = new LinkedList(10);

myLinkedList.append(15);
myLinkedList.append(23);
myLinkedList.append(33);
myLinkedList.append(13);
myLinkedList.append(63);
// console.log(myLinkedList);
myLinkedList.prepend(1);

myLinkedList.insert(5, 30);
myLinkedList.insert(1, 8);

console.log(myLinkedList.printList());

console.log(myLinkedList.remove(0));
console.log(myLinkedList.printList());

console.log(myLinkedList.remove(100));
console.log(myLinkedList.printList());
