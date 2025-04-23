function searchRange(nums, target) {
    function findIndex(left) {
        let low = 0, high = nums.length - 1, idx = -1;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);

            if (nums[mid] === target) {
                idx = mid;
                if (left) high = mid - 1;
                else low = mid + 1;
            } else if (nums[mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return idx;
    }

    return [findIndex(true), findIndex(false)];
}

console.log(searchRange([5,7,7,8,8,10], 8));




