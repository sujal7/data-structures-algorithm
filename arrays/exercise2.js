const maxSubArray = (nums) => {
  let length = nums.length;
  let max = nums[0];
  let sum = 0;
  // Time Complexity: O(n)
  for (let i = 0; i < length; i++) {
    sum += nums[i];
    if (sum > max) {
      max = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
