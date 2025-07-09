//first non repeating number
//arr=[4, 5, 1, 2, 0, 4]
//Output: 5
/*
function firstNonRepeat(arr){
  for(let i=0;i<arr.length;i++){
    count=0
    for(let j=0;j<arr.length;j++){
      if(arr[i]===arr[j]){
        count++
      }
    }
   if(count===1) return arr[i]
  }

 return -1
}
console.log(firstNonRepeat(arr))
*/
/*
function firstNonRepeat(arr){
  let freqMap={}
  for(let num of arr){
   freqMap[num]=(freqMap[num]||0)+1
  }
  for(let num of arr){
    if(freqMap[num]===1) return num
  }
 return -1
}
*/
//console.log(firstNonRepeat(arr))
/*
let nums = [0, 1, 0, 3, 12];
function zeroToLast(nums){
    let i=0;
    let j=1;
    while(j<nums.length){
     if(nums[i]==0){
       if(nums[j]!=0){
         nums[i]=nums[j]
         nums[j]=0
         i++;
         j++;
       }else{
         j++
       }
     }
   }
   return nums
}
console.log(zeroToLast(nums))
*/

function removeElement(nums,val) {
  i=0;
  for(let i=0;i<nums.length;i++){
    if(nums[i]!=val){
      k++
    }
  }
return nums.length
}

console.log(removeElement([3, 2, 2, 3], 3));
