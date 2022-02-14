// 3 Rules
// 1. Identify the base case
// 2. Identify the recursive case
// 3. Get closer and closer and return when needed, usually you have 2 cases.

// Recursion stores function calls in stack.
let counter = 0;
function inception() {
  console.log(counter);
  if (counter > 3) {
    return 'done';
  }
  counter++;
  // we need to use 'return' keyword such that the return value 'done' is passed to bottom of stack
  // else it will return undefiuned.
  return inception();
}

console.log(inception());
