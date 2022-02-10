// 5-->15-->23

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

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

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

  // add 1 as head
  prepend(value) {
    const newHeadNode = {
      value: value,
      next: this.head,
    };
    this.head = newHeadNode;
    return this;
  }
}

const myLinkedList = new LinkedList(10);
console.log(myLinkedList);

myLinkedList.append(15);
myLinkedList.append(23);
myLinkedList.append(33);
myLinkedList.append(13);
console.log(myLinkedList.append(63));
// console.log(myLinkedList);

console.log(myLinkedList.prepend(1));
