// Bubble sort sorts by comparing adjacent elements and swapping the greater one to the back.

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// O(n^2)
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
