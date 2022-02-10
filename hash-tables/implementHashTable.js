// Implementing custom hash table
class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  // underscore '_' says it is private but still can be accessed
  // this is just a custom hash function example.
  // O(1)
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  // O(1)
  set(fruitName, quantity) {
    let index = this._hash(fruitName);
    if (!this.data[index]) {
      this.data[index] = [];
    }
    this.data[index].push([fruitName, quantity]);
  }

  // O(1), but if we have a lot of collisions, it will be O(n)
  get(fruitName) {
    let index = this._hash(fruitName);
    const currentBucket = this.data[index];
    for (let i = 0; i < currentBucket.length; i++) {
      if (currentBucket[i][0] === fruitName) return currentBucket[i][1];
    }
    return undefined;
  }

  keys() {
    const keysArray = [];
    // Loops through data.length times so it's not efficient.
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
console.log(myHashTable.get('grapes'));
myHashTable.set('apples', 9);
myHashTable.set('oranges', 2);
console.log(myHashTable.get('apples'));

console.log(myHashTable.keys());
console.log(myHashTable);
