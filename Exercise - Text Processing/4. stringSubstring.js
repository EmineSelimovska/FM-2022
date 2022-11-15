function stringSubstring(word,text) {
    let textArr = text.split(' ');
   for (const wordText of textArr) {
    if(wordText.toLowerCase() === word.toLowerCase()){
       return console.log(word);
        
    }
   
}
console.log(`${word} not found!`)

   
}
stringSubstring('python',

'JavaScript is the best programming language')