const repeatedNumber = (arr) => {
  let hashTable = {};

  // O(n)
  for (let i = 0; i < arr.length; i++) {
    // we need to use undefined because sometimes when the value of key is 0, js treats the statement as falsy
    if (hashTable[arr[i]] !== undefined) {
      return arr[i];
    }
    hashTable[arr[i]] = arr[i];
  }
  return undefined;
};

console.log(repeatedNumber([0, 5, 1, 0, 3, 5, 1, 2, 4]));
