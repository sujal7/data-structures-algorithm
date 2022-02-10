// Two Sums
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
const twoSum = function (nums, target) {
  let length = nums.length;
  let result = [];
  // Time Complexity: O(n^2)
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i);
        result.push(j);
        return result;
      }
    }
  }
};

console.log(twoSum([1, 5, 3, 10, 2], 12));
