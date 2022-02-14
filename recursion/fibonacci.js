// Given a number N return index value of fibonacci series
// Eg: input: 3, output: 1+1=2

// O(n)
function fibonacciIterative(n) {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
}

// O(2^n): Exponential Time
function fibonacciRecursive(n) {
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciIterative(6));
console.log(fibonacciRecursive(6));
