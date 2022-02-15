const numbers = [3213, 12, 5, 77, 223, 65, 42, 8, 2, 0];

/**
 * Sorts the given array.
 * @param {Object} array - The array to be sorted.
 */
function insertionSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    if (array[i] < array[0]) {
      //move number to the first position
      array.unshift(array.splice(i, 1)[0]);
    } else {
      // Only sort number smaller than number on the left of it.
      if (array[i] < array[i - 1]) {
        // Find where the number should be inserted.
        for (var j = 1; j < i; j++) {
          if (array[i] >= array[j - 1] && array[i] < array[j]) {
            array.splice(j, 0, array.splice(i, 1)[0]);
          }
        }
      }
    }
  }
}

insertionSort(numbers);
console.log(numbers);
