/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function(s) {
    const regExp = /[^a-zA-Z0-9]+/g; 
    let finalString = s.replace (regExp, '').toLocaleLowerCase();

    if(finalString == finalString.split('').reverse('').join('')) {
        return true;
    } else return false;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(""));
console.log(isPalindrome("0P"));