/**
 * Represents a hash table.
 */
class HashTable {
  /**
   * Initializes the hash table of given size.
   * @param {Number} size - The size of the hash table.
   */
  constructor(size) {
    this.data = new Array(size);
  }

  /**
   * Simple implementation of hash function.
   * @param {String} key - The key to be hashed.
   * @returns {Number} - The hashed key.
   */
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  /**
   * Sets the value of the given key to the hash table.
   * Time Complexity: O(1)
   * @param {String} fruitName - The key to be set.
   * @param {Number} quantity - The value to be set.
   */
  set(fruitName, quantity) {
    let index = this._hash(fruitName);
    if (!this.data[index]) {
      this.data[index] = [];
    }
    this.data[index].push([fruitName, quantity]);
  }

  /**
   * Gets the value of the given key from the hash table.
   * Time Complexity: O(1), but if we have a lot of collisions, it can be O(n)
   * @param {String} fruitName - The key to be retrieved.
   * @returns {Number} - The value of the given key.
   */
  get(fruitName) {
    let index = this._hash(fruitName);
    const currentBucket = this.data[index];
    for (let i = 0; i < currentBucket.length; i++) {
      if (currentBucket[i][0] === fruitName) return currentBucket[i][1];
    }
    return undefined;
  }

  /**
   * Display the keys and of hash table.
   * Time Complexity: O(n) where n is the total length of hash table
   * @returns {Array} - The array representation of the keys in hash table.
   */
  keys() {
    const keysArray = [];
    // Loops through size of hash table times so it's not efficient.
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 100);
myHashTable.set('oranges', 212);
myHashTable.set('apples', 923);

console.log(myHashTable.get('oranges'));

console.log(myHashTable.keys());
console.log(myHashTable);
