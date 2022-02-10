// Pointer
let obj1 = { a: true };
let obj2 = obj1;

obj1.a = false;

// result of a is false as it is poining to the same value in memory.
console.log(obj2);

delete obj1;

// obj2 doesn't get deleted as it is still pointing to {a: true} in memory.
console.log(obj2);
