//8)Binaru search
/*
let arr1=[3,4,5,9,12];
let target1=12;
const binarySearch=(arr,target)=>{
  left=0;
  right=arr.length-1;
  while(left<=right){
    mid=Math.floor((left+right)/2)
    if(target>arr[mid]){
      left=mid+1;
    }else if(target<arr[mid]){
      right=mid-1
    }else{
      return mid
    }
  }
  return -1
}
console.log(binarySearch(arr1,target1))
*/
/*
let arr2=[-1,0,3,5,9,12]
let target2=12
//console.log(binarySearch(0,arr.length-1))
const recursiveBinarySearch=(left,right)=>{
 if(left<=right){
   mid=Math.floor(left+(right-left)/2)
   if(target2>arr2[mid]){
     left=mid+1
     return recursiveBinarySearch(left,right)
   }else if(target2<arr2[mid]){
     right=mid-1
     return recursiveBinarySearch(left,right)
   }else{
     return mid
   }
 }
     return -1
}
console.log(recursiveBinarySearch(0,arr2.length-1))
*/

//9)search in rotated sorted array
/*
nums = [4,5,6,7,0,1,2]
target = 0
//Output: 4
left=0;
right=nums.length-1;
const rotateSearch=()=>{
 while(left<=right){
  mid=Math.floor((left+right)/2)
  if(nums[mid]==target){
    return mid
  }

  if(nums[left]<=nums[mid]){ //left
    if(nums[left]<=target&&target<nums[mid]){
      right=mid-1;
    }else{
      left=mid+1;
    }
  }else{ //right
    if(nums[mid]<target&&target<=nums[right]){
      left=mid+1;
    }else{
      right=mid-1;
    }
  }
 }
return -1
}

console.log(rotateSearch())
*/

//peak index in a mountain array
let arr = [0,2,1,0]
function peakIndex(){
  let low=0;
  let high=arr.length-1;
 while(low<high){
  let mid=Math.floor((low+high)/2)
//  console.log(mid)
  if(arr[mid]<arr[mid+1]){
   low=mid+1
  }else{
    high=mid
  }
 }
return arr[low]
}

console.log(peakIndex())
