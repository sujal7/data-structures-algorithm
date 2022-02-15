const numbers = [3213, 12, 5, 77, 223, 65, 42, 8, 2, 0];

/**
 * Sorts the given array.
 * Time Complexity: O(n^2)
 * @param {Object} array - The array to be sorted.
 */
function bubbleSort(array) {
  let length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
}

bubbleSort(numbers);
console.log(numbers);
