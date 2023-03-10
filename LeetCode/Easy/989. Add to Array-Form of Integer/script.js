/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */

var addToArrayForm = function(num, k) {
    let sum = (BigInt(num.join('')) + BigInt(k)).toString().split('');
    
    return sum;
};


console.log(addToArrayForm([1,2,0,0], 34));
console.log(addToArrayForm([2,7,4], 181));
console.log(addToArrayForm([2,1,5], 806));
console.log(addToArrayForm([1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3], 516));