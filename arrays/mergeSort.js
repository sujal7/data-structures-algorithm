function mergeSortedArrays(arr1, arr2) {
  const mergedArr = [];
  let array1Item = arr1[0];
  let array2Item = arr2[0];

  // check input
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }

  if (typeof array1Item !== 'number' || typeof array2Item !== 'number') {
    return 'Not good input';
  }

  let i = 1;
  let j = 1;
  while (array1Item || array2Item) {
    if (array1Item < array2Item || array2Item === undefined) {
      mergedArr.push(array1Item);
      array1Item = arr1[i];
      i++;
    } else {
      mergedArr.push(array2Item);
      array2Item = arr2[j];
      j++;
    }
  }
  return mergedArr;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
console.log(
  mergeSortedArrays([0, 2, 4, 6, 8, 10, 12, 15], [2, 5, 9, 11, 13, 16, 18, 20])
);
