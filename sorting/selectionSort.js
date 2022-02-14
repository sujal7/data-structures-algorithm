// Selection sorts sorts by finding smallest item and placing it in the front.

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

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
    [array[i], array[smallest]] = [array[smallest], temp];
  }
}

selectionSort(numbers);
console.log(numbers);
