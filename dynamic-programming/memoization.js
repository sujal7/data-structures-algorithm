// Dynamic programming is the optimizaiton technique to solve a problem
// Memoization is optimizaiton technique by storing results of expensive function calls and returning the cached result when same input occurs again.

// Normal Approach
function addTo80(n) {
  console.log('long time');
  return n + 80;
}
console.log(addTo80(5));
console.log(addTo80(5));
console.log(addTo80(5));

let cache = {};
function memoizedAddTo80(n) {
  if (n in cache) {
    return cache[n];
  }
  console.log('long time');
  cache[n] = n + 80;
  return cache[n];
}

console.log(memoizedAddTo80(5));
console.log(memoizedAddTo80(5));
console.log(memoizedAddTo80(5));
