//let nums=[2,2,1,1,1,2,2,1,1]
//let nums=[3,2,3]
//let nums=[1,2,2,1,3,1,3,3,1,3,3,3,3,1,1,1]
/*
let freq=0;
let ans=0;
for(let i=0;i<nums.length;i++){
   if(freq==0){
     ans=nums[i]
   }
   if(ans==nums[i]){
     freq++
   }else{
    freq--
   }
}
console.log(ans)
*/
/*
//s = "Hello World";
//s = "   fly me   to   the moon  ";
s = "luffy is still joyboy"
function lengthOfLastWord(str){
  let res=str.trim().split(" ")
   return res[res.length-1].split("")

}
console.log(lengthOfLastWord(s))
*/
/*
//s="Race a car,!%"
//s="Malayalam"
s=" "
const validPalindrome=(s)=>{
  str=s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
  return str===str.split("").reverse().join("") ?true:false
}
console.log(validPalindrome(s))
*/

//let s=["(","[","}","]",")"]
let s=["(",")","[","]"]
const validParanthesis=()=>{
let map={
  "(":")",
  "[":"]",
  "{":"}"
}
let stack=[]
for(let char of s){
  if(Object.keys(map).includes(char)){
   stack.push(char)
  }else {
    if(map[stack[stack.length-1]]==char){
     stack.pop()
    }else{
     return false
    }
  }
console.log(stack,char)
}
if(stack.length==0){
  return true
}else{
  return false
}
}

console.log(validParanthesis())

/*
stack=["(","["]
let rem=stack.pop()
console.log(stack,rem)
*/
