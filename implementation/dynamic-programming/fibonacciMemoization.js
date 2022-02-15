// Using recursion, fibonacci series time complexity is O(2^n), after using memoization, it becomes O(n).

let calculations1 = 0;
/**
 * Normal recursive fibonacci function.
 * Time Complexity: O(2^n)
 * @param {Number} n - The index to be calculated.
 * @returns {Number} - The number at the given index of fibonacci series.
 */
function fibonacci(n) {
  calculations1++;
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

let calculations2 = 0;
/**
 * Memoized fibonacci function.
 * Time Complexity: O(n)
 * @returns {Number} - The number at the given index of fibonacci series.
 */
function fibonacciMaster() {
  let cache = {};
  /**
   * Calculates the fibonacci number at the given index.
   * @param {Number} n - The index to be calculated.
   */
  return function fib(n) {
    calculations2++;
    if (n in cache) {
      return cache[n];
    }
    if (n < 2) {
      return n;
    } else {
      cache[n] = fib(n - 1) + fib(n - 2);
      return cache[n];
    }
  };
}

console.log('Normal approach answer: ', fibonacci(35));
console.log('We did ' + calculations1 + ' calculation'); // this does 9227465 calculations

const fasterFib = fibonacciMaster();
console.log('Dynamic Programming answer: ', fasterFib(35));
console.log('We did ' + calculations2 + ' calculations'); // this does 69 calculations
