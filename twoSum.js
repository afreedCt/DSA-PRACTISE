let nums = [2, 7, 11, 15];
let target = 22;

const twoSum = (nums, target) => {
  // Bruteforce approach
  // for(let i=0;i<nums.length;i++){
  //     for(let j=i;j<nums.length;j++){
  //         if(nums[i]+nums[j]===target){
  //             return [i,j]
  //         }
  //     }
  // }

  // Optimal approach using hashmap

  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
};

console.log(twoSum(nums, target));
