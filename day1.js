// 1)valid anagram
Input: s = "anagram", t = "nagaram"

function checkAnagram(){
    let sCount={}
    
    for(let char of s){
        sCount[char]=(sCount[char]||0)+1
    }
    for(let char of t){
        if(sCount[char]){
            sCount[char]--
        }else{
            return false
        }
    }
    return true
}

console.log(checkAnagram());



