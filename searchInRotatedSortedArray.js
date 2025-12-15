let nums=[4,5,6,7,0,1,2];
let target=1;

search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] == target) {
            return mid
        }

        if (nums[left] <= nums[mid]) {
            // left
            if (target < nums[left] || target > nums[mid]) {
                // go to right
                left = mid + 1
            } else {
                // stay left
                right = mid - 1
            }
        } else {
            // right
            if (target > nums[right] || target < nums[mid]) {
                // go to left
                right = mid - 1
            } else {
                //stay right
                left = mid + 1
            }
        }
    }
    return -1
};

console.log(search(nums, target));