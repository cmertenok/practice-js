function generateHashtag (str) {
   
   let temporaryResult = str.trim().split(' ');
   let finalResult = [];
   temporaryResult.unshift('#');

   if(temporaryResult.join('').length > 140 || 
      temporaryResult.join('').length <= 1) {
        return false;
    }

    for(let i = 0; i < temporaryResult.length; i++) {
        if(temporaryResult[i] == '') delete temporaryResult[i];
    }

    temporaryResult.forEach(item => {
        const word = item[0].toUpperCase() + item.slice(1);
        finalResult.push(word);
    });

    return finalResult.join('');
}

console.log(generateHashtag(" Hello there thanks for trying my Kata"));
console.log(generateHashtag(" Hello there thanks for trying my Kata Hello there thanks for trying my Kata"));
console.log(generateHashtag("    Hello     World   " ));
console.log(generateHashtag(" "));
console.log(generateHashtag("       "));
