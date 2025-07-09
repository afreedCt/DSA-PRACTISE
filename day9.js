//fibonacho
/*
function fib(n){
   if(n==0)return 0;
   if(n==1)return 1;
   return fib(n-1)+fib(n-2)
}
console.log(fib(1))
*/

//reverse string using recursion
function reverseRec(arr){
   console.log(arr[0])
   arr1=0;
   arr2=arr.length-1
   function changeChar(char1,char2){
    if(char1>char2) return;
    temp=arr[char1]
    arr[char1]=arr[char2]
    arr[char2]=temp
    changeChar(char1+1,char2-1)
   }
  changeChar(arr1,arr2)
  return arr
}
let arr=["h","e","l","l","o"]
console.log(reverseRec(arr))
