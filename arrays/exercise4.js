const containsDuplicate = (nums) => {
  let length = nums.length;
  let result = [];
  // Time Complexity: O(n)
  for (let i = 0; i < length; i++) {
    if (result.includes(nums[i])) {
      return true;
    } else {
      result.push(nums[i]);
    }
  }
  return false;
};

console.log(containsDuplicate([1, 5, 5, 3, 10, 2]));
