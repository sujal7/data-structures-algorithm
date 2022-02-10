// Implementing custom array data structure
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    // using it in seperate function due to single responsiblity principle.
    this.shiftItems(index);
    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArr = new MyArray();
console.log(newArr);

newArr.push(5);
newArr.push('yes');
newArr.push(true);
console.log(newArr);

console.log(newArr.get(0));

newArr.pop();
console.log(newArr);

const newArr2 = new MyArray();
newArr2.push(5);
newArr2.push(10);
newArr2.push(15);
newArr2.push(20);
newArr2.delete(0);
console.log(newArr2);
