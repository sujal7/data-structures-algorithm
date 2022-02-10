// Function that reverses a string
function reverse(str) {
  // check input
  if (typeof str !== 'string' || str.length < 2) {
    return 'Not good input';
  }

  let length = str.length;
  let reversed = [];
  // Time Complexity: O(n)
  for (let i = length - 1; i >= 0; i--) {
    reversed.push(str[i]);
  }

  return reversed.join('');
}

console.log(reverse('Hello my Name is Sujal'));
console.log(reverse(21312312));
console.log(reverse(undefined));
