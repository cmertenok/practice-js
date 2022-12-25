/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] == target) return nums.indexOf(nums[i]);
    }

    let result = [...nums, target].sort((a, b) => a - b);

    return result.indexOf(target);
};

console.log(searchInsert([1,3,5,6], 5));
console.log(searchInsert([1,3,5,6], 2));
console.log(searchInsert([1,3,5,6], 7));
console.log(searchInsert([1,3,5,6,7], 7));
