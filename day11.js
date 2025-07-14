let num=5;
let arr=["even","odd"]

//console.log(num%2)


//?)running sum (1480)
nums=[1,2,3,4]

function runningSum(nums){
  console.log(nums)
   let newNum=new Array(nums.length).fill(0)
   console.log(newNum)
  for(let i=0;i<nums.length;i++){
    for(let j=0;j<=i;j++){
      newNum[i]+=nums[j]
    }
  }
  return newNum
}
//console.log(runningSum(nums))

//?)find the richest customer (1672)

let accounts=[[1,2,3],[3,2,1]]

const richestCustomer=(acc)=>{
  maxWealth=0;
  for(let i=0;i<acc.length;i++){
   sum=0;
    for(let j=0;j<acc[i].length;j++){
     sum+=acc[i][j]
    }
    maxWealth=Math.max(maxWealth,sum)
  }
 return maxWealth
}
console.log(richestCustomer(accounts))
