
let nums=[4,3,2,5,1]
n=nums.length

const bubbleSort=(nums,n)=>{
    for(let i=0;i<n-1;i++){
        for(let j=0;j<n-i-1;j++){
            if(nums[j]>nums[j+1]){
                [nums[j],nums[j+1]]=[nums[j+1],nums[j]]
                
            }
            console.log("changed",j,i,nums);
        }
    }
    return nums
}

console.log(bubbleSort(nums,n));
