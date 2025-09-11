let nums=[1,2]
let ans=[]
function printSubSets(nums,ans,i){


    if(i==nums.length){
        console.log(ans)
        return;
    }


    ans.push(nums[i])
    // console.log("calling in push : ",i,ans)
    printSubSets(nums,ans,i+1)
    ans.pop()
    // console.log("calling in pop : ",i,ans)
    printSubSets(nums,ans,i+1)

}

printSubSets(nums,ans,0)