let user = {
  age: 32,
  name: 'John',
  student: true,
  speak: function () {
    console.log('Hello');
  },
};

console.log(user.age); // O(1)
user.spell = 'abra kadabra'; // O(1)
user.speak(); // O(1)
