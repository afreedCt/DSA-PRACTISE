let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

var maxSubArray = function (nums) {
  // optimal approach  kadane's algorithm
  let maxSub = nums[0];
  curSub = 0;
  for (let i = 0; i < nums.length; i++) {
    curSub += nums[i];
    if (curSub > maxSub) {
      maxSub = curSub;
    }
    if (curSub < 0) {
      curSub = 0;
    }
  }
  return maxSub;
};

console.log(maxSubArray(nums));
