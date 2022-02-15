/**
 * Creates an empty memoization table/cache.
 * @returns {Number} - The output of the function.
 */
function memoizedAddTo80() {
  let cache = {};
  /**
   * Checks if the given number is already in the cache and returns the output if it is.
   * If not, adds the number and its output to the cache and returns the output.
   * @param {Number} n - The number to be checked.
   */
  return function (n) {
    if (n in cache) {
      return cache[n];
    }
    console.log('This is taking long time...');
    cache[n] = n + 80;
    return cache[n];
  };
}

const memoized = memoizedAddTo80();

console.log(memoized(5));
console.log(memoized(5));
console.log(memoized(5));
console.log(memoized(15));
console.log(memoized(15));
