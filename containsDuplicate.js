let nums=[1,2,3,1]
var containsDuplicate = function(nums) {

    // bruteforce approach
    // for(let i=0;i<nums.length;i++){
    //     for(let j=i+1;j<nums.length;j++){
    //         if(nums[i]===nums[j]){
    //             return true
    //         }
    //     }
    // }

    // return false


    // optimal approach using hashmap
    // let map=new Map();
    // for(let i=0;i<nums.length;i++){
    //     if(map.has(nums[i])){
    //         return true
    //     }else{
    //         map.set(nums[i])
    //     }
    // }
    // return false;


    // optimal approach using set
    let set=new Set(nums);
    return set.size!==nums.length;
};
console.log(containsDuplicate(nums));