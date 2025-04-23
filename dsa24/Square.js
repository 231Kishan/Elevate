function sortedSquares(nums) {
    let res = Array(nums.length);
    let left = 0, right = nums.length - 1, index = nums.length - 1;

    while (left <= right) {
        let leftSq = nums[left] * nums[left];
        let rightSq = nums[right] * nums[right];

        if (leftSq > rightSq) {
            res[index--] = leftSq;
            left++;
        } else {
            res[index--] = rightSq;
            right--;
        }
    }

    return res;
}
console.log(sortedSquares([-7, -3, 2, 3, 11]));