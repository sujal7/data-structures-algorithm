// Structure of doubly linked list
// let myLinkedList = {
//   head: {
//     value: 5,
//     next: {
//       value: 15,
//       next: {
//         value: 23,
//         next: null,
//         prev: {
//           value: 15,
//         },
//       },
//       prev: {
//         value: 5,
//       },
//     },
//     prev: null,
//   },
// };

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null,
    };
    newNode.prev = this.tail;
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
      prev: null,
    };
    this.head.prev = newNode;
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
      prev: null,
    };

    let currentNode = this.head;
    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next;
    }
    const follower = currentNode.next;
    currentNode.next = newNode;
    newNode.prev = currentNode;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;

    return this.printList();
  }

  // O(n)
  remove(index) {
    if (index === 0) {
      let nodeToBeRemoved = this.head;
      this.head = nodeToBeRemoved.next;
      this.head.prev = null;
      this.length--;
      return nodeToBeRemoved.value;
    }

    if (index >= this.length) index = this.length - 1;

    let currentNode = this.head;
    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next;
    }

    let nodeToBeRemoved = currentNode.next;
    let follower = nodeToBeRemoved.next;
    follower.prev = currentNode;
    currentNode.next = nodeToBeRemoved.next;
    this.length--;

    return nodeToBeRemoved.value;
  }
}

const myLinkedList = new DoublyLinkedList(5);
myLinkedList.append(10);
myLinkedList.append(30);
myLinkedList.prepend(1);
myLinkedList.insert(1, 11);

myLinkedList.remove(1);

console.log(myLinkedList.printList());
