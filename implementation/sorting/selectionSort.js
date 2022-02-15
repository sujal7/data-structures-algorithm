const numbers = [3213, 12, 5, 77, 223, 65, 42, 8, 2, 0];

/**
 * Sorts the given array using Selection Sort.
 * @param {Object} array - The array of numbers.
 */
function selectionSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    let smallest = i;
    let temp = array[i];
    for (let j = i; j < length; j++) {
      if (array[j] < array[smallest]) {
        smallest = j;
      }
    }
    // Swap the smallest number with the number at the current index.
    [array[i], array[smallest]] = [array[smallest], temp];
  }
}

selectionSort(numbers);
console.log(numbers);
