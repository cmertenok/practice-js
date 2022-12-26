/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let arr = [];
    
    for(let i = 0; i < nums.length; i++) {
        if(!arr.includes(nums[i])){
            arr.push(nums[i]);
        }
    }
    
    return (arr.length === nums.length) ? false : true;
};

console.log(containsDuplicate([1]));
console.log(containsDuplicate([1,2,3,1]));
console.log(containsDuplicate([1,2,3,4]));
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));
console.log(containsDuplicate([2,14,18,22,22]));