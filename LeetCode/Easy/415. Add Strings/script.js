/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let numOne = BigInt(num1);
    let numTwo = BigInt(num2);

    return (numOne + numTwo).toString();
};

console.log(addStrings('11', '123'));
console.log(addStrings('0', '0'));
console.log(addStrings('456', '77'));