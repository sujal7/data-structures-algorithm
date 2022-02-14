// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233 ...
// Using recursion, fibonacci series time complexity is O(2^n)
// So, we need to use dynamic programming

// Normal approach: O(2^n)
let calculations1 = 0;
function fibonacci(n) {
  calculations1++;
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Dynamic programming approach: O(n)
let calculations2 = 0;
function fibonacciMaster() {
  let cache = {};
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

console.log('Slow', fibonacci(35));
console.log('We did ' + calculations1 + ' calculation'); // this does 9227465 calculations

const fasterFib = fibonacciMaster();
console.log('Dynamic Programming', fasterFib(35));
console.log('We did ' + calculations2 + ' calculations'); // this does 69 calculations
