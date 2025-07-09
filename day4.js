/*
//container with max water
let height=[1,8,6,2,5,4,8,3,7]
let maxWater=0;
for(let i=0;i<height.length;i++){
console.log("i",i)
  for(let j=i+1;j<height.length;j++){
    w=j-i;
    h=Math.min(height[i],height[j])
    curWater=h*w;
    maxWater=Math.max(maxWater,curWater)
    console.log("i",i,"j",j,"w",w,"h",h,"curwater",curWater,"maxWater",maxWater)
  }
//  console.log("i",i,"w",w,"h",h,"curwater",curWater,"maxWater",maxWater)
}
*/

let height=[1,8,6,2,5,4,8,3,7]
const maxContainer=()=>{
  let maxWater=0;let lp=0;let rp=height.length-1;
  while(lp<rp){
   w=rp-lp;
    h=Math.min(height[lp],height[rp])
    curWater=w*h;
    maxWater=Math.max(maxWater,curWater)
   height[lp]<height[rp]?lp++:rp--;
  }
  return maxWater
}

console.log(maxContainer())
