let nums = [1, 2, 3, 4];

var productExceptSelf = function (nums) {
  // optimal approach using left and right arrays
  // let n=nums.length;
  // let left=new Array(n).fill(1);
  // let right=new Array(n).fill(1);
  // let output=new Array(n).fill(1);
  // for(let i=1;i<n;i++){
  //     left[i]=left[i-1]*nums[i-1];
  // }
  // for(let i=n-2;i>=0;i--){
  //     right[i]=right[i+1]*nums[i+1];
  // }
  // for(let i=0;i<n;i++){
  //     output[i]=left[i]*right[i];
  // }
  // return output;

  // optimal approach with only one Array
  let n = nums.length;
  let output = new Array(n).fill(1);
  for (let i = 1; i < n; i++) {
    output[i] = output[i - 1] * nums[i - 1];
  }
  let postfix = 1;
  for (let i = n - 1; i >= 0; i--) {
    output[i] *= postfix;
    postfix *= nums[i];
  }
  return output;
};

console.log(productExceptSelf(nums));
