/*const isPalindrome=(x)=>{
   str=x.toString().split("").reverse().join("")
   return Number(str)===x?true:false
}
console.log(isPalindrome(-121))
*/

//console.log(Math.round(3/10))
//console.log(121/10)
//palindorme number
/*
const isPalindrome=(x)=>{
   let temp=x;
   let num=0;
   let last=0;
   if(x<=9) return true
   while(x>0){
     last=x%10;
     num=num*10+last;
    console.log("x = ",x,"num = ",num,"last = ",last)
     x=Math.round(x/10)	
  }
  return temp===num?true:false
}
console.log(isPalindrome(9999))
//isPalindrome(123)
*/


//maximum sub array

//let arr=[1,2,3,4,5]

//let arr=[3,-4,5,4,-1,7,-8]
/*
//brute force method
maxsum=0;
 for(let st=0;st<arr.length;st++){
   console.log("start",st)
  let cursum=0
   for(let end=st;end<arr.length;end++){
    cursum+=arr[end]
    maxsum=Math.max(cursum,maxsum)
    console.log("arr[end] : ",arr[end],"end : ",end,"cursum : ",cursum,"max : ",maxsum)
   }
 }

*/
/*
let arr=[-2,1,-3,4,-1,2,1,-5,4]	
//let arr=[-1,-2,-3,-4,-5]
//kadne's algorithum

let maxsum=-Infinity;
let cursum=0;
for(let num of arr){
   cursum+=num;
   maxsum=Math.max(cursum,maxsum)
   console.log("num",num,"cursum",cursum,"maxsum",maxsum)
   if(cursum<0){
     cursum=0;
   }
}
console.log(maxsum)
//console.log(-1>0)
*/


//paired sum
/*
let arr=[2,7,11,15]
let target=13
n=arr.lengt
let a=0;
let b=0;
const pairedsum=()=>{
 for(let i=0;i<n;i++){
  a+=1;
  for(let j=i+1;j<n;j++){
  b+=1;
    if(arr[i]+arr[j]===target){
      return [i,j]
    }
  }
 }
return -1
}
console.log(pairedsum(),a,b)
*/
/*
const pairedsum=()=>{
  let start=0;
  let end = n-1;
   while(start<end){
     if(arr[start]+arr[end]>target){
        end--
     }else if(arr[start]+arr[end]<target){
      start++
     }else{
       return [{ind:start,val:arr[start]},{ind:end,val:arr[end]}]
     }
   }
return -1
}

console.log(pairedsum())
*/

//weather temperature
/*
let arr=[1,2,3,4,5]
let ans=[]

for(let i=0;i<arr.length;i++){
  day=0;
  for(let j=i+1;j<arr.length;j++){
   day+=1;
  }
 ans.push(day)
}
console.log(ans)
*/
/*
let arr=[35,25,32,26,33]
let answer=[]

for(let i=0;i<arr.length;i++){
  curmax=arr[i]
  day=0
  for(let j=i+1;j<arr.length;j++){
    if(arr[j]>arr[i]){
      curmax=arr[j]
      day=j-i
      break;
    }
  }
 answer.push(day)
}
console.log(answer)
*/

let arr = [35, 25, 32, 26, 33];
let answer = new Array(arr.length).fill(0);
let stack = []; // stores indices

for (let i = 0; i < arr.length; i++) {
  while (arr[i] > arr[stack[stack.length - 1]]) {
    let prevIndex = stack.pop();
    answer[prevIndex] = i - prevIndex;
  }
  stack.push(i);
}

console.log(answer);

