/*let x=2;
let n=10;
ans=1;
function myPow(){
   binform=n
 while(binform>0){
   if(binform%2==1){
     ans*=x;
   }
  x*=x
  binform=Math.floor(binform/2)
  console.log("binform",binform,"x",x,"ans",ans)
 }
 return ans
}

//console.log(myPow())
console.log(14/7)
*/
/*
//find out pow
let nums=[3,2,2,3]
let val=3;
let j=0;
for(let i=0;i<nums.length;i++){
  if(nums[i]!==val){
   nums[j]=nums[i]
   j++
  }
 console.log("i",i,"j",j,nums[i])
}
console.log("ren",nums)
*/

//best time to buy and sell stock

let prices=[7,1,5,3,6,4]
let maxProfit=0;
let bestBuy=prices[0];

for(let i=1;i<prices.length;i++){
  if(prices[i]>bestBuy){
    maxProfit=Math.max(maxProfit,prices[i]-bestBuy)
  }
  bestBuy=Math.min(bestBuy,prices[i])
}
console.log(prices)
console.log("best sell",maxProfit+bestBuy,"bestBuy",bestBuy)
