//16)painters patition

let arr=[40,30,10,20]
let m=2;

const isPossible=(arr,m,maxAllowedTime)=>{
   console.log("possible",arr,m,maxAllowedTime)
  painters=1;
  time=0;
  for(let i=0;i<arr.length;i++){
    if(time+arr[i]<=maxAllowedTime){
      time+=arr[i]
    }else{
      painters++;
      time=arr[i]
    }
  }
  return painters<=m
}
const minTimeToPaint=(arr,m)=>{
   sum=0;
   maxVal=0;
  for(let i=0;i<arr.length;i++){
    sum+=arr[i]
    maxVal=Math.max(maxVal,arr[i])
  }
   st=maxVal
   end=sum
   ans=-1
   while(st<=end){
     let mid=Math.floor((st+end)/2)
     if(isPossible(arr,m,mid)){
        ans=mid
        end=mid-1
     }else{
       st=mid+1
     }
   }
 return ans
}

//console.log(minTimeToPaint(arr,m))

let nums=[1,12,-5,-6,50,3]
let k=4

function maxAverageSubArray(nums,k){
   sum=0
  for(let i=0;i<k;i++){
   sum+=nums[i]
  }
  maxSum=sum
  start=0;
  for(let end=k;end<nums.length;end++){
     sum=sum-nums[start]+nums[end]
    maxSum=Math.max(maxSum,sum)
    start++
   }
return maxSum/k

}
console.log(maxAverageSubArray(nums,k))
