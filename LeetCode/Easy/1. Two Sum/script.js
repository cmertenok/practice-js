/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = 1; j < nums.length; j++) {
            if(nums[i] + nums[j] == target) {
                if(i !== j) {
                    return [i, j];
                }
            }
        }
    }
};

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,0,4,9,10], 13));
console.log(twoSum([1, 1], 2));
