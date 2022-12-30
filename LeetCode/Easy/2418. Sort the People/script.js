/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let sortedArr = [...heights].sort((a, b) => b - a);
    let result = [];
    
    for (let i = 0; i < sortedArr.length; i++) {
        result.push(names[heights.indexOf(sortedArr[i])]);
    }
    
    return result;
};

console.log(sortPeople(["Mary","John","Emma"], [180,165,170]));
console.log(sortPeople(["Alice","Bob","Bob"], [155,185,150]));