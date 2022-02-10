const moveZeroes = (nums) => {
  let length = nums.length;
  let result = [];
  // Time Complexity: O(n)
  for (let i = 0; i < length; i++) {
    if (nums[i] !== 0) {
      result.push(nums[i]);
    }
  }
  for (let i = 0; i < length; i++) {
    if (result[i] === undefined) {
      result.push(0);
    }
  }
  return result;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
