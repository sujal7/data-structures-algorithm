/**
 * Represents an array.
 */
class MyArray {
  /**
   * Initializes an array of length 0 with no data
   */
  constructor() {
    this.length = 0;
    this.data = {};
  }

  /**
   * Gets the element at the given index.
   * @param {Number} index - The index of the element to be returned.
   * @returns {Number/String} - The element at the given index.
   */
  get(index) {
    return this.data[index];
  }

  /**
   * Pushes the given element to the end of the array.
   * @param {Number/String} item - The element to be added to the array.
   * @returns {Number} - The length of the array.
   */
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  /**
   * Removes the last element from the array.
   * @returns {Number/String} - The last element in the array.
   */
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  /**
   * Deletes the element at the given index.
   * @param {Number} index - The index at which the element is to be deleted.
   * @returns {Number/String} - The deleted element.
   */
  delete(index) {
    const item = this.data[index];
    // using it in seperate function due to single responsiblity principle.
    this.shiftItems(index);
    return item;
  }

  /**
   * Shifts the elements after the deleted element in the array to the left.
   * @param {Number} index - The index at which the element is to be deleted.
   */
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

console.log('\nMy Array 1');
const newArr = new MyArray();

newArr.push(20);
newArr.push('apple');
newArr.push(true);
newArr.push(45);
newArr.push(95);
console.log(newArr.get(1));
newArr.pop();
newArr.delete(0);
console.log(newArr);

console.log('\nMy Array 2');
const newArr2 = new MyArray();
newArr2.push(5);
newArr2.push(10);
newArr2.push(15);
newArr2.push(20);
newArr2.delete(1);
console.log(newArr2);
