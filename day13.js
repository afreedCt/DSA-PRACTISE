//?)  happy number

const isHappy=(n)=>{
  let seen=new Set()
  while(n!==1 && !seen.has(n)){
     seen.add(n)
     n=getSum(n)
  }
  return n==1
}

const getSum=(n)=>{
  let sum=0;
   while(n>0){
      digit=n%10;
      sum+=digit*digit;
      n=Math.floor(n/10)
   }
  return sum
}

//console.log(isHappy(19))
//console.log(isHappy(4))

let nums=[0,2,3,4]
const missingNumber=(nums)=>{
  let sum=0;
  let n=nums.length;
   for(let num of nums){
     sum+=num
   }

   let expectedSum=n*(n+1)/2
  console.log(expectedSum,sum)
   return expectedSum-sum
}

console.log(missingNumber(nums))


// [1,2,3]

