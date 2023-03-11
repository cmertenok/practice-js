/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    let reversed1 = Number(num.toString().split('').reverse().join(''));
    let reversed2 = Number(reversed1.toString().split('').reverse().join(''));

    return (num === reversed2) ? true : false;
};

console.log(isSameAfterReversals(526));
console.log(isSameAfterReversals(1800));
console.log(isSameAfterReversals(0));
