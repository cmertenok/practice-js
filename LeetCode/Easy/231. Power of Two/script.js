/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n < 0) {
        return false;
    }
    return (n && (n & (n - 1)) === 0);
};

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(3));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(-16));