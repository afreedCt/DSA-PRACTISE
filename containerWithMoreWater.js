
height = [1,8,6,2,5,4,8,3,7]
// height = [1,1]
// height = [1,8,6,2,7,8]
const maxAreaWater = function(height) {
    let left=0;
    let right=height.length-1;
    let maxArea=0;

    while(left<right){
        console.log(left,right,height[left],height[right],maxArea)
        let width=right-left;
        let ht=Math.min(height[left],height[right]);
        maxArea=Math.max(maxArea,ht*width);
        if(height[left]<height[right]){
            left++
            console.log("going left")
        }else{
            console.log("going right")
            right--
        }

    }

    return maxArea

}

console.log(maxAreaWater(height));