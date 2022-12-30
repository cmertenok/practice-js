function moveZeros(arr) {
    let zeroArr = [];
    let finalArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== 0) finalArr.push(arr[i]);
        else zeroArr.push(arr[i]);
    }

    return [...finalArr, ...zeroArr];
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));
console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));