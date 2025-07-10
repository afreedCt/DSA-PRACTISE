//?)odd or even with out if else
function oddOrEven(num){
  return num%2==0?"even":"odd"
}
//console.log(oddOrEven(5))
//delete duplicates from sorted list
var deleteDuplicates = function(head) {
    let current = head;
    console.log("curent",current[0])
    while (current && current.next) {
        if (current.val === current.next.val) {
            current.next = current.next.next; // skip duplicate
        } else {
            current = current.next; // move to next node
        }
    }
    return head;
};

head = [1,1,2,3,3]
//console.log(deleteDuplicates(head))

//check anagram

s = "anagram", t = "nagaram"

function checkAnagram(s,t){
 let map=new Map()
  for(let char of s){
      map[char]=(map[char]||0)+1
  }
  for(let char of t){
   if(!map[char]){
    return false;
   }
    map[char]--
  }
   return true
    console.log(map)
}
console.log(checkAnagram(s,t))
