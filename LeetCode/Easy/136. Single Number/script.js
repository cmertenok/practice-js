/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = arr => arr.find((e, i) => arr.indexOf(e) == arr.lastIndexOf(e));

console.log(singleNumber([2,2,1]));
console.log(singleNumber([4,1,2,1,2]));
console.log(singleNumber([1]));