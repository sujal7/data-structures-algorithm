const strings = ['a', 'b', 'c', 'd'];
// 4*4 = 16 bytes of storage in 32 bit system
// 4*8 = 32 bytes of storage in 64 bit system

// access
strings[1]; // O(1)

// push
strings.push('e'); // O(1)

// pop
strings.pop(); // O(1)
strings.pop(); // O(1)

// unshift
strings.unshift('x'); // O(n)

// splice or insert
strings.splice(2, 0, 'alien'); // O(n/2) or O(n)

// delete
strings.splice(3, 1); // O(n)

console.log(strings);
