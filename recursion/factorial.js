// O(n)
function findFactorialRecursive(number) {
  if (number === 1) {
    return 1;
  }
  return number * findFactorialRecursive(number - 1);
}

// O(n)
function findFactorialIterative(number) {
  let answer = 1;
  for (let i = number; i >= 1; i--) {
    answer *= i;
  }
  return answer;
}

console.log(findFactorialRecursive(5));
console.log(findFactorialIterative(5));
