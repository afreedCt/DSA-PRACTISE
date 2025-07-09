//11)find the index of first ocxurence in a string (28-leetcode)
/*
str="sadbutsad"
tar="sad"
//console.log("tar",str.slice(0,4))
for(let i=0;i<str.length;i++){
   if(str.slice(i,i+tar.length)===tar){
     return str.slice(i,i+tar.length)
     break;
   }*
}
*/

//12)single element in sorted array

let arr=[1,1,2,3,3,4,4,5,5]
left=0;
right=arr.length-1;
const singleElem=()=>{
 while(left<right){
  mid=Math.floor((left+right)/2)
  if(mid%2===1){
    mid--
  }
  if(arr[mid]==arr[mid+1]){
     left+=2
  }else{
    right=mid
  }
 }
 return arr[left]
}

console.log(singleElem())

//13)search insert position(35-leetcode)
/*
arr = [1,3,5,6], target = 4

const searchPosition=()=>{
  left=0;
  right=arr.length-1;
  while(left<=right){
   mid=Math.floor((left+right)/2)
    if(arr[mid]===target){
      return mid
    }
    if(arr[mid]<target){
      left=mid+1
    }else{
      right=mid-1
    }
  }
return left
}
console.log(searchPosition())
*/
