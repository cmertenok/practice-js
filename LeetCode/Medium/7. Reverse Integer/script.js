/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reversPosNumber;
    let reversNegNumber;

    if(x < 0) {
        x = x * (-1);
        let reversNegNumber = Number(x.toString().split('').reverse().join('')) * (-1);
        return (reversNegNumber > (-2)**31) ? reversNegNumber : 0;
    } else if(x > 0){
        let reversPosNumber = Number(x.toString().split('').reverse().join(''));
        return (reversPosNumber < (2)**31) ? reversPosNumber : 0;
    } else return 0;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(30000000000));
console.log(reverse(-30000000000));
console.log(reverse(30000000003));
console.log(reverse(-30000000003));